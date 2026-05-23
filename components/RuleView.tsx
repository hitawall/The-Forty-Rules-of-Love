import { Rule } from "@/data/rules";
import { paletteForRule } from "@/data/palettes";
import OrigamiPlaceholder from "./OrigamiPlaceholder";

interface Props {
  rule: Rule;
  /** Rendered inside the share row at the bottom. Pass <ShareButtons> in M3. */
  shareSlot?: React.ReactNode;
  /** Rendered as a close/back control in the top-right corner. */
  controlSlot?: React.ReactNode;
}

export default function RuleView({ rule, shareSlot, controlSlot }: Props) {
  const palette = paletteForRule(rule.id);

  return (
    <div
      className="relative flex flex-col h-full rounded-2xl overflow-hidden"
      style={{ backgroundColor: palette.surface }}
    >
      {/* top control (close button or back link) */}
      {controlSlot && (
        <div className="absolute top-4 right-4 z-10">{controlSlot}</div>
      )}

      {/* origami art */}
      <div
        className="flex items-center justify-center py-10"
        style={{ backgroundColor: palette.bg }}
      >
        <OrigamiPlaceholder id={rule.id} palette={palette} size={160} />
      </div>

      {/* rule content */}
      <div className="flex flex-col flex-1 px-8 py-7 gap-4">
        <span
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: palette.accent }}
        >
          Rule {rule.id}
        </span>

        <p
          className="font-serif text-xl sm:text-2xl leading-relaxed flex-1"
          style={{ color: palette.ink }}
        >
          {rule.text}
        </p>

        <p className="text-xs" style={{ color: palette.accent, opacity: 0.7 }}>
          From <em>The Forty Rules of Love</em> by Elif Shafak
        </p>

        {shareSlot && (
          <div className="pt-2 border-t" style={{ borderColor: palette.bg }}>
            {shareSlot}
          </div>
        )}
      </div>
    </div>
  );
}
