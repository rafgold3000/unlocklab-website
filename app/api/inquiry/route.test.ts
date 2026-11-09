import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

const send = vi.fn();
vi.mock("resend", () => ({
  Resend: vi.fn().mockImplementation(function () {
    return { emails: { send } };
  }),
}));

import { POST } from "@/app/api/inquiry/route";

function post(body: unknown) {
  return POST(
    new Request("http://localhost/api/inquiry", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    }),
  );
}

const valid = { name: "Ada", email: "ada@example.com" };

describe("POST /api/inquiry", () => {
  beforeEach(() => {
    send.mockReset();
    vi.stubEnv("RESEND_API_KEY", "re_test");
    vi.stubEnv("INQUIRY_TO", "");
    vi.stubEnv("INQUIRY_FROM", "");
  });
  afterEach(() => vi.unstubAllEnvs());

  test("returns 500 when RESEND_API_KEY is missing", async () => {
    vi.stubEnv("RESEND_API_KEY", "");
    const res = await post(valid);
    expect(res.status).toBe(500);
    expect(await res.json()).toEqual({ error: "not_configured" });
    expect(send).not.toHaveBeenCalled();
  });

  test("returns 502 when Resend errors", async () => {
    send.mockResolvedValue({ data: null, error: { name: "validation_error", message: "bad" } });
    const res = await post(valid);
    expect(res.status).toBe(502);
    expect(await res.json()).toEqual({ error: "send_failed" });
  });

  test("sends once with replyTo set to the submitter and returns 200", async () => {
    send.mockResolvedValue({ data: { id: "1" }, error: null });
    const res = await post(valid);
    expect(res.status).toBe(200);
    expect(send).toHaveBeenCalledTimes(1);
    const arg = send.mock.calls[0][0];
    expect(arg.to).toBe("rafael@skwx.ai");
    expect(arg.from).toBe("UnlockLab <hello@unlocklab.ai>");
    expect(arg.replyTo).toBe("ada@example.com");
    expect(typeof arg.text).toBe("string");
    expect(arg).not.toHaveProperty("html");
  });

  test("spam returns 200 without sending", async () => {
    const res = await post({ ...valid, website: "http://spam" });
    expect(res.status).toBe(200);
    expect(send).not.toHaveBeenCalled();
  });

  test("invalid input returns 400 with field errors", async () => {
    const res = await post({ name: "", email: "nope" });
    expect(res.status).toBe(400);
    expect(Object.keys((await res.json()).errors).sort()).toEqual(["email", "name"]);
  });

  test("malformed JSON returns 400", async () => {
    const res = await POST(new Request("http://localhost/api/inquiry", { method: "POST", body: "{" }));
    expect(res.status).toBe(400);
  });
});
