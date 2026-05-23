"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Rule } from "@/data/rules";
import { paletteForRule } from "@/data/palettes";
import OrigamiPlaceholder from "./OrigamiPlaceholder";

interface Props {
  rule: Rule;
}

export default function RuleCard({ rule }: Props) {
  const palette = paletteForRule(rule.id);
  const preview = rule.text.length > 80 ? rule.text.slice(0, 80).trimEnd() + "…" : rule.text;

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link
        href={`/rule/${rule.id}`}
        className="block rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full"
        style={{ backgroundColor: palette.bg }}
        aria-label={`Rule ${rule.id}`}
      >
        <div
          className="flex items-center justify-center pt-8 pb-4"
          style={{ backgroundColor: palette.surface }}
        >
          <OrigamiPlaceholder id={rule.id} palette={palette} size={110} />
        </div>

        <div className="px-5 py-4 flex flex-col gap-1">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: palette.accent }}
          >
            Rule {rule.id}
          </span>
          <p
            className="font-serif text-sm leading-relaxed line-clamp-3"
            style={{ color: palette.ink }}
          >
            {preview}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
