import { PaletteKey, paletteForRule } from "./palettes";

export interface Rule {
  id: number;
  text: string;
  image: string;
  palette: PaletteKey;
}

// TODO: Replace each `text` value with the corresponding rule from
// Elif Shafak's "The Forty Rules of Love". Keep attribution in the footer.
const PALETTE_KEYS: PaletteKey[] = [
  "blush",
  "mint",
  "butter",
  "lavender",
  "peach",
  "sky",
  "sand",
  "rose",
];

const rawRules: Omit<Rule, "palette">[] = [
  { id: 1, text: "Rule 1 — fill in from the novel.", image: "/origami/rule-01.webp" },
  { id: 2, text: "Rule 2 — fill in from the novel.", image: "/origami/rule-02.webp" },
  { id: 3, text: "Rule 3 — fill in from the novel.", image: "/origami/rule-03.webp" },
  { id: 4, text: "Rule 4 — fill in from the novel.", image: "/origami/rule-04.webp" },
  { id: 5, text: "Rule 5 — fill in from the novel.", image: "/origami/rule-05.webp" },
  { id: 6, text: "Rule 6 — fill in from the novel.", image: "/origami/rule-06.webp" },
  { id: 7, text: "Rule 7 — fill in from the novel.", image: "/origami/rule-07.webp" },
  { id: 8, text: "Rule 8 — fill in from the novel.", image: "/origami/rule-08.webp" },
  { id: 9, text: "Rule 9 — fill in from the novel.", image: "/origami/rule-09.webp" },
  { id: 10, text: "Rule 10 — fill in from the novel.", image: "/origami/rule-10.webp" },
  { id: 11, text: "Rule 11 — fill in from the novel.", image: "/origami/rule-11.webp" },
  { id: 12, text: "Rule 12 — fill in from the novel.", image: "/origami/rule-12.webp" },
  { id: 13, text: "Rule 13 — fill in from the novel.", image: "/origami/rule-13.webp" },
  { id: 14, text: "Rule 14 — fill in from the novel.", image: "/origami/rule-14.webp" },
  { id: 15, text: "Rule 15 — fill in from the novel.", image: "/origami/rule-15.webp" },
  { id: 16, text: "Rule 16 — fill in from the novel.", image: "/origami/rule-16.webp" },
  { id: 17, text: "Rule 17 — fill in from the novel.", image: "/origami/rule-17.webp" },
  { id: 18, text: "Rule 18 — fill in from the novel.", image: "/origami/rule-18.webp" },
  { id: 19, text: "Rule 19 — fill in from the novel.", image: "/origami/rule-19.webp" },
  { id: 20, text: "Rule 20 — fill in from the novel.", image: "/origami/rule-20.webp" },
  { id: 21, text: "Rule 21 — fill in from the novel.", image: "/origami/rule-21.webp" },
  { id: 22, text: "Rule 22 — fill in from the novel.", image: "/origami/rule-22.webp" },
  { id: 23, text: "Rule 23 — fill in from the novel.", image: "/origami/rule-23.webp" },
  { id: 24, text: "Rule 24 — fill in from the novel.", image: "/origami/rule-24.webp" },
  { id: 25, text: "Rule 25 — fill in from the novel.", image: "/origami/rule-25.webp" },
  { id: 26, text: "Rule 26 — fill in from the novel.", image: "/origami/rule-26.webp" },
  { id: 27, text: "Rule 27 — fill in from the novel.", image: "/origami/rule-27.webp" },
  { id: 28, text: "Rule 28 — fill in from the novel.", image: "/origami/rule-28.webp" },
  { id: 29, text: "Rule 29 — fill in from the novel.", image: "/origami/rule-29.webp" },
  { id: 30, text: "Rule 30 — fill in from the novel.", image: "/origami/rule-30.webp" },
  { id: 31, text: "Rule 31 — fill in from the novel.", image: "/origami/rule-31.webp" },
  { id: 32, text: "Rule 32 — fill in from the novel.", image: "/origami/rule-32.webp" },
  { id: 33, text: "Rule 33 — fill in from the novel.", image: "/origami/rule-33.webp" },
  { id: 34, text: "Rule 34 — fill in from the novel.", image: "/origami/rule-34.webp" },
  { id: 35, text: "Rule 35 — fill in from the novel.", image: "/origami/rule-35.webp" },
  { id: 36, text: "Rule 36 — fill in from the novel.", image: "/origami/rule-36.webp" },
  { id: 37, text: "Rule 37 — fill in from the novel.", image: "/origami/rule-37.webp" },
  { id: 38, text: "Rule 38 — fill in from the novel.", image: "/origami/rule-38.webp" },
  { id: 39, text: "Rule 39 — fill in from the novel.", image: "/origami/rule-39.webp" },
  { id: 40, text: "Rule 40 — fill in from the novel.", image: "/origami/rule-40.webp" },
];

export const rules: Rule[] = rawRules.map((r) => ({
  ...r,
  palette: PALETTE_KEYS[(r.id - 1) % PALETTE_KEYS.length],
}));

export function getRuleById(id: number): Rule | undefined {
  return rules.find((r) => r.id === id);
}
