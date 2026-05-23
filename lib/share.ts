import { Rule } from "@/data/rules";

export function getSiteUrl(): string {
  if (typeof window !== "undefined") return window.location.origin;
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://forty-rules-of-love-one.vercel.app";
}

export function buildShareUrl(id: number): string {
  return `${getSiteUrl()}/rule/${id}`;
}

export function buildWhatsAppUrl(rule: Rule): string {
  const text = encodeURIComponent(
    `"${rule.text}"\n\n— Rule ${rule.id}, The Forty Rules of Love by Elif Shafak\n${buildShareUrl(rule.id)}`
  );
  return `https://wa.me/?text=${text}`;
}

export function buildTwitterUrl(rule: Rule): string {
  const text = encodeURIComponent(`"${rule.text.slice(0, 200)}"\n— Rule ${rule.id}, The Forty Rules of Love`);
  const url = encodeURIComponent(buildShareUrl(rule.id));
  return `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
}
