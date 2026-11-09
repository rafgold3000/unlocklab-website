import { expect, test } from "vitest";
import { PAST_WORKSHOPS } from "@/lib/workshops";

test("past workshops are the two confirmed events, newest first", () => {
  expect(PAST_WORKSHOPS.map((w) => [w.title, w.date])).toEqual([
    ["Next-Gen Knowledge Work with Claude Code", "2025-10-28"],
    ["Apple Silicon AI Builders Breakfast · NYC", "2025-10-08"],
  ]);
  expect(PAST_WORKSHOPS.every((w) => w.place.includes("26 Broadway"))).toBe(true);
});
