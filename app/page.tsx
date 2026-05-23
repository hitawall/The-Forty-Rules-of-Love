import { rules } from "@/data/rules";
import RuleGrid from "@/components/RuleGrid";

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fdf8f3" }}>
      <header className="px-6 pt-14 pb-10 text-center max-w-2xl mx-auto">
        <p className="text-xs tracking-[0.25em] uppercase text-stone-400 mb-3">
          Elif Shafak
        </p>
        <h1
          className="font-serif text-4xl sm:text-5xl font-light leading-snug"
          style={{ color: "#2d1f14" }}
        >
          The Forty Rules
          <br />
          <em>of Love</em>
        </h1>
        <p className="mt-4 text-sm text-stone-400 leading-relaxed">
          A fan tribute. All rules belong to their author.
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <RuleGrid rules={rules} />
      </main>

      <footer className="text-center py-10 text-xs text-stone-400">
        Rules from{" "}
        <em>The Forty Rules of Love</em> by Elif Shafak.
        <br />
        This is an unofficial fan tribute, not affiliated with the author or publisher.
      </footer>
    </div>
  );
}
