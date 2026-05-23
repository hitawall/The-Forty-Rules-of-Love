"use client";

import { useState } from "react";
import Image from "next/image";
import { Rule } from "@/data/rules";
import { paletteForRule } from "@/data/palettes";
import OrigamiPlaceholder from "./OrigamiPlaceholder";

interface Props {
  rule: Rule;
  size?: number;
}

// Renders the real WebP when available; falls back to the SVG placeholder.
// To activate a real image: drop rule-NN.webp into public/origami/ and redeploy.
export default function OrigamiImage({ rule, size = 160 }: Props) {
  const [errored, setErrored] = useState(false);
  const palette = paletteForRule(rule.id);

  if (errored) {
    return <OrigamiPlaceholder id={rule.id} palette={palette} size={size} />;
  }

  return (
    <Image
      src={rule.image}
      alt={`Origami illustration for rule ${rule.id}`}
      width={size}
      height={size}
      className="object-contain"
      onError={() => setErrored(true)}
      priority={rule.id <= 8}
    />
  );
}
