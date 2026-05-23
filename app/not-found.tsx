import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center gap-6 p-8 text-center"
      style={{ backgroundColor: "#fdf8f3" }}
    >
      <div className="font-serif text-7xl" style={{ color: "#e8c8b0" }}>
        ∞
      </div>
      <h1 className="font-serif text-3xl font-light" style={{ color: "#2d1f14" }}>
        This path does not exist
      </h1>
      <p className="text-sm text-stone-400 max-w-xs leading-relaxed">
        Perhaps it is a reminder that not every door we knock on will open — and
        that is perfectly fine.
      </p>
      <Link
        href="/"
        className="mt-2 text-xs tracking-widest uppercase font-semibold transition-opacity hover:opacity-60"
        style={{ color: "#c06030" }}
      >
        ← Return to the rules
      </Link>
    </div>
  );
}
