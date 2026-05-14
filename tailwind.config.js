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
        brand: {
          blue:         "#246BCE",
          "blue-dark":  "#1a4fa0",
          "blue-light": "#3d82e0",
          "blue-muted": "#e8f0fb",
          coral:         "#FE5A1D",
          "coral-dark":  "#e04000",
          "coral-light": "#ff7a45",
          "coral-muted": "#fff0eb",
        },
        surface: {
          bg:      "#f8f9fc",
          DEFAULT: "#ffffff",
          "2":     "#f2f4f8",
          offset:  "#ebeef5",
          dynamic: "#dde2ec",
          divider: "#d4d9e6",
          border:  "#c8cedf",
        },
        ink: {
          DEFAULT: "#0f1623",
          muted:   "#5a6478",
          faint:   "#9aa2b4",
          inverse: "#f8f9fc",
        },
      },
      fontFamily: {
        body:    ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
        mono:    ["JetBrains Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        xs:    ["clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)",  { lineHeight: "1.5" }],
        sm:    ["clamp(0.875rem, 0.8rem + 0.35vw, 1rem)",      { lineHeight: "1.5" }],
        base:  ["clamp(1rem, 0.95rem + 0.25vw, 1.125rem)",     { lineHeight: "1.6" }],
        lg:    ["clamp(1.125rem, 1rem + 0.75vw, 1.5rem)",      { lineHeight: "1.4" }],
        xl:    ["clamp(1.5rem, 1.2rem + 1.25vw, 2.25rem)",     { lineHeight: "1.25" }],
        "2xl": ["clamp(2rem, 1.2rem + 2.5vw, 3.5rem)",         { lineHeight: "1.15" }],
        "3xl": ["clamp(2.5rem, 1rem + 4vw, 5rem)",             { lineHeight: "1.1"  }],
      },
      borderRadius: {
        sm:    "0.375rem",
        DEFAULT:"0.5rem",
        lg:    "0.75rem",
        xl:    "1rem",
        "2xl": "1.5rem",
        full:  "9999px",
      },
      boxShadow: {
        sm:            "0 1px 2px rgba(15,22,35,0.06)",
        DEFAULT:       "0 4px 12px rgba(15,22,35,0.08)",
        lg:            "0 12px 32px rgba(15,22,35,0.12)",
        xl:            "0 20px 48px rgba(15,22,35,0.16)",
        "brand-blue":  "0 4px 24px rgba(36,107,206,0.35)",
        "brand-coral": "0 4px 24px rgba(254,90,29,0.35)",
      },
      animation: {
        "fade-up":    "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in":    "fadeIn 0.4s cubic-bezier(0.16,1,0.3,1) forwards",
        shimmer:      "shimmer 1.5s ease-in-out infinite",
        float:        "float 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(36,107,206,0.3)" },
          "50%":      { boxShadow: "0 0 40px rgba(36,107,206,0.6)" },
        },
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #246BCE 0%, #1a4fa0 100%)",
        "gradient-coral": "linear-gradient(135deg, #FE5A1D 0%, #e04000 100%)",
        "gradient-hero":  "linear-gradient(135deg, #0a1628 0%, #0f2050 50%, #0a1628 100%)",
      },
    },
  },
  plugins: [],
};