import plugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";
import colors from "tailwindcss/colors";
import forms from "@tailwindcss/forms";
import aspectRatio from "@tailwindcss/aspect-ratio";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        "8xl": "90rem",
        "9xl": "105rem",
        "10xl": "120rem",
      },
      zIndex: {
        1: 1,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
      },
      keyframes: {
        "spin-slow": {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      },
      animation: {
        "spin-slow": "spin-slow 8s linear infinite",
      },
      typography: {
        DEFAULT: {
          // this is for prose class
          css: {
            lineHeight: defaultTheme.lineHeight.relaxed,
            a: {
              textDecoration: "underline",
              "&:hover": {
                opacity: ".85",
                // textDecorationStyle: "dashed",
              },
            },
            img: {
              borderRadius: defaultTheme.borderRadius.md,
            },
          },
        },
      },
    },
  },
  plugins: [
    aspectRatio,
    forms,
    typography,
    plugin(function ({ addUtilities }) {
      const utilFormSwitch = {
        ".form-switch": {
          border: "transparent",
          "background-color": colors.gray[300],
          "background-image":
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")",
          "background-position": "left center",
          "background-repeat": "no-repeat",
          "background-size": "contain !important",
          "vertical-align": "top",
          "&:checked": {
            border: "transparent",
            "background-color": "currentColor",
            "background-image":
              "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")",
            "background-position": "right center",
          },
          "&:disabled, &:disabled + label": {
            opacity: ".5",
            cursor: "not-allowed",
          },
        },
      };

      addUtilities(utilFormSwitch);
    }),
  ],
};
