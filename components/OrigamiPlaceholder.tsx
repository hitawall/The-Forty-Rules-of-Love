"use client";

import { Palette } from "@/data/palettes";

interface Props {
  id: number;
  palette: Palette;
  size?: number;
}

// Geometric origami-style SVG placeholder. Replace with real images via
// OrigamiImage once the WebP assets are in public/origami/.
export default function OrigamiPlaceholder({ id, palette, size = 120 }: Props) {
  const seed = id * 137.508;
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.38;

  // Build a simple 6-point origami star from the rule id as a seed
  const points = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    const len = i % 2 === 0 ? r : r * 0.5;
    return `${cx + len * Math.cos(angle)},${cy + len * Math.sin(angle)}`;
  }).join(" ");

  const innerPoints = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 2 + Math.PI / 6;
    const len = r * 0.35;
    return `${cx + len * Math.cos(angle)},${cy + len * Math.sin(angle)}`;
  }).join(" ");

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
    >
      <polygon points={points} fill={palette.accent} opacity={0.35} />
      <polygon points={innerPoints} fill={palette.accent} opacity={0.6} />
      <circle cx={cx} cy={cy} r={r * 0.18} fill={palette.accent} opacity={0.8} />
    </svg>
  );
}
