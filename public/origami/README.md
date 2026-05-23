# Origami Images

Drop your AI-generated origami images here. The app picks them up automatically on the next deploy — no code changes needed.

## Naming convention

```
rule-01.webp
rule-02.webp
...
rule-40.webp
```

Zero-padded to two digits (`rule-01`, not `rule-1`).

## Format

- **Format**: WebP preferred (smallest file size, best quality)
- **Recommended size**: 400×400 px (square)
- **Max file size**: aim for < 80 KB each (3.2 MB total for all 40)

## How the fallback works

If an image file is missing or fails to load, the app renders a matching SVG origami star in the same pastel palette. You can add images one at a time — the rest keep showing the SVG until their WebP arrives.
