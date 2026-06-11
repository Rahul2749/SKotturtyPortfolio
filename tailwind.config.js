/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "tertiary": "#80B3FF",
        "outline": "#94a3b8",
        "outline-variant": "#CBD5E1",
        "primary": "#4F8CFF",
        "on-primary": "#FFFFFF",
        "on-primary-fixed-variant": "#003380",
        "on-tertiary": "#002266",
        "on-background": "#111111",
        "background": "#F8F8F8",
        "on-surface": "#111111",
        "on-surface-variant": "#334155",
        "surface": "#F8F8F8",
        "surface-variant": "#E0E0E0",
        "surface-container-lowest": "#FFFFFF",
        "surface-container-low": "#F8F8F8",
        "surface-container": "#F0F0F0",
        "surface-container-high": "#E8E8E8",
        "surface-container-highest": "#E0E0E0",
        "secondary": "#0055FF",
        "on-card": "#0f172a",
        "on-card-variant": "#1e293b"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "unit": "8px",
        "container-margin": "clamp(1rem, 5vw, 40px)",
        "gutter": "24px",
        "component-padding-x": "24px",
        "component-padding-y": "12px",
        "section-gap": "clamp(60px, 10vw, 120px)"
      },
      fontFamily: {
        "display-lg": ["Syne"],
        "headline-md": ["Syne"],
        "body-md": ["Hanken Grotesk"],
        "headline-lg": ["Syne"],
        "body-lg": ["Hanken Grotesk"],
        "label-lg": ["Hanken Grotesk"],
        "label-sm": ["Hanken Grotesk"],
        "display-md": ["Syne"],
        "body-sm": ["Hanken Grotesk"],
        "body": ["Hanken Grotesk"],
        "display": ["Syne"],
        "serif": ["Playfair Display", "serif"]
      },
      fontSize: {
        "display-lg": ["72px", {"lineHeight": "1.2", "letterSpacing": "-0.04em", "fontWeight": "800"}],
        "headline-md": ["24px", {"lineHeight": "1.4", "fontWeight": "600"}],
        "body-md": ["16px", {"lineHeight": "1.5", "fontWeight": "400"}],
        "headline-lg": ["40px", {"lineHeight": "1.3", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "body-lg": ["18px", {"lineHeight": "1.5", "fontWeight": "400"}],
        "label-lg": ["14px", {"lineHeight": "1.5", "letterSpacing": "0.05em", "fontWeight": "600"}],
        "label-sm": ["12px", {"lineHeight": "1.5", "letterSpacing": "0.02em", "fontWeight": "500"}],
        "display-md": ["56px", {"lineHeight": "1.3", "letterSpacing": "-0.03em", "fontWeight": "700"}],
        "body-sm": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}]
      }
    },
  },
  plugins: [],
}
