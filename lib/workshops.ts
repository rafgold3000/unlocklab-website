// Past workshops, newest first. Static on purpose: there is no "upcoming" list
// until events resume, so nothing is ever sorted by the clock at build time.

export type Workshop = {
  title: string;
  date: string; // YYYY-MM-DD, New York time
  time: string;
  place: string;
  host: string;
  summary: string;
  url: string;
};

export const PAST_WORKSHOPS: Workshop[] = [
  {
    title: "Next-Gen Knowledge Work with Claude Code",
    date: "2025-10-28",
    time: "9–11 AM",
    place: "26 Broadway, 3rd floor, New York",
    host: "UnlockLab with SkWx and FidelicAI",
    summary:
      "A hands-on, two-hour Claude Code workshop for non-coders: setup, practical use cases and the future of knowledge work, over bagels and coffee.",
    url: "https://luma.com/00wvf46f",
  },
  {
    title: "Apple Silicon AI Builders Breakfast · NYC",
    date: "2025-10-08",
    time: "9–11 AM",
    place: "26 Broadway, 3rd floor, New York",
    host: "FidelicAI (Memetica Corporation)",
    summary:
      "A morning gathering for developers building AI on Apple Silicon, with live demos of tools such as MLX and PyTorch Metal, followed by open hacking.",
    url: "https://luma.com/y73kqjyz",
  },
];
