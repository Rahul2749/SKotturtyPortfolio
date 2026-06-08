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
        "tertiary": "#ecd4ff",
        "outline": "#859399",
        "primary": "#a5e7ff",
        "on-primary-fixed-variant": "#004e60",
        "on-tertiary": "#4a0080",
        "on-background": "#dee1f7",
        "background": "#05070A",
        "surface-container-lowest": "#090e1c",
        "outline-variant": "#3c494e",
        "surface-variant": "#2f3445",
        "surface-container-high": "#25293a",
        "surface-container": "#1a1f2f",
        "on-surface": "#dee1f7",
        "surface": "#0e1322",
        "secondary": "#ffb3ae",
        "surface-container-highest": "#2f3445",
        "on-surface-variant": "#bbc9cf",
        "on-primary": "#003543",
        "surface-container-low": "#161b2b"
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
        "display": ["Syne"]
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
