export type PaletteKey =
  | "blush"
  | "mint"
  | "butter"
  | "lavender"
  | "peach"
  | "sky"
  | "sand"
  | "rose";

export interface Palette {
  bg: string;
  surface: string;
  accent: string;
  ink: string;
}

export const palettes: Record<PaletteKey, Palette> = {
  blush: {
    bg: "#fde8e8",
    surface: "#fff0f0",
    accent: "#c0676a",
    ink: "#5c2426",
  },
  mint: {
    bg: "#d8f0e8",
    surface: "#e8f8f0",
    accent: "#3a9068",
    ink: "#1a4030",
  },
  butter: {
    bg: "#fdf0c8",
    surface: "#fffae8",
    accent: "#b08820",
    ink: "#4a3800",
  },
  lavender: {
    bg: "#e8e0f8",
    surface: "#f0ecff",
    accent: "#7060b8",
    ink: "#2e224a",
  },
  peach: {
    bg: "#fde8d4",
    surface: "#fff2e8",
    accent: "#c06030",
    ink: "#4a2010",
  },
  sky: {
    bg: "#d4eaf8",
    surface: "#e8f4ff",
    accent: "#2870a8",
    ink: "#0c2840",
  },
  sand: {
    bg: "#f0e8d4",
    surface: "#faf4e8",
    accent: "#906830",
    ink: "#3c2810",
  },
  rose: {
    bg: "#f8d8e8",
    surface: "#ffeaf4",
    accent: "#b04878",
    ink: "#480030",
  },
};

const PALETTE_ORDER: PaletteKey[] = [
  "blush",
  "mint",
  "butter",
  "lavender",
  "peach",
  "sky",
  "sand",
  "rose",
];

export function paletteForRule(id: number): Palette {
  return palettes[PALETTE_ORDER[(id - 1) % PALETTE_ORDER.length]];
}
