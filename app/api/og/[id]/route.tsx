import { ImageResponse } from "next/og";
import { getRuleById } from "@/data/rules";
import { paletteForRule } from "@/data/palettes";

export const runtime = "edge";
export const revalidate = 86400;

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const rule = getRuleById(Number(id));

  if (!rule) {
    return new Response("Not found", { status: 404 });
  }

  const palette = paletteForRule(rule.id);
  const excerpt = rule.text.length > 180 ? rule.text.slice(0, 180).trimEnd() + "…" : rule.text;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: palette.bg,
          padding: "64px",
          gap: "28px",
        }}
      >
        {/* origami SVG */}
        <svg width="110" height="110" viewBox="0 0 110 110">
          {(() => {
            const cx = 55, cy = 55, r = 42;
            const outer = Array.from({ length: 6 }, (_, i) => {
              const angle = (Math.PI / 3) * i - Math.PI / 2;
              const len = i % 2 === 0 ? r : r * 0.5;
              return `${cx + len * Math.cos(angle)},${cy + len * Math.sin(angle)}`;
            }).join(" ");
            const inner = Array.from({ length: 6 }, (_, i) => {
              const angle = (Math.PI / 3) * i - Math.PI / 2 + Math.PI / 6;
              const len = r * 0.35;
              return `${cx + len * Math.cos(angle)},${cy + len * Math.sin(angle)}`;
            }).join(" ");
            return (
              <>
                <polygon points={outer} fill={palette.accent} opacity={0.35} />
                <polygon points={inner} fill={palette.accent} opacity={0.6} />
                <circle cx={cx} cy={cy} r={r * 0.18} fill={palette.accent} opacity={0.8} />
              </>
            );
          })()}
        </svg>

        {/* rule number */}
        <div
          style={{
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: palette.accent,
          }}
        >
          Rule {rule.id}
        </div>

        {/* rule text */}
        <div
          style={{
            fontSize: "30px",
            lineHeight: 1.5,
            textAlign: "center",
            color: palette.ink,
            maxWidth: "900px",
          }}
        >
          {excerpt}
        </div>

        {/* attribution */}
        <div
          style={{
            fontSize: "13px",
            color: palette.accent,
            opacity: 0.75,
            marginTop: "8px",
          }}
        >
          The Forty Rules of Love · Elif Shafak
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
