import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getRuleById, rules } from "@/data/rules";
import { paletteForRule } from "@/data/palettes";
import RuleView from "@/components/RuleView";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return rules.map((r) => ({ id: String(r.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const rule = getRuleById(Number(id));
  if (!rule) return {};
  return {
    title: `Rule ${rule.id} — The Forty Rules of Love`,
    description: rule.text.slice(0, 160),
  };
}

export default async function RulePage({ params }: Props) {
  const { id } = await params;
  const rule = getRuleById(Number(id));
  if (!rule) notFound();

  const palette = paletteForRule(rule.id);

  const BackLink = (
    <Link
      href="/"
      className="text-xs tracking-widest uppercase font-medium transition-opacity hover:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-current"
      style={{ color: palette.accent }}
      aria-label="Back to all rules"
    >
      ← All rules
    </Link>
  );

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8" style={{ backgroundColor: "#fdf8f3" }}>
      <div className="w-full max-w-lg">
        <RuleView rule={rule} controlSlot={BackLink} />
      </div>
    </div>
  );
}
