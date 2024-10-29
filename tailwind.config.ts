/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      typography: (theme: (arg0: string) => any) => ({
        DEFAULT: {
          css: {
            color: theme("colors.neutral.300"),
            fontSize: "0.875rem", // Smaller font size
            lineHeight: "1.5", // Adjust line height to be more compact
            h1: {
              color: theme("colors.blue.400"),
              fontSize: "1.5rem", // Smaller h1 size
              marginBottom: "0.4em", // Reduce space below h1
            },
            h2: {
              color: theme("colors.blue.300"),
              fontSize: "1.25rem", // Smaller h2 size
              marginBottom: "0.3em",
            },
            p: {
              marginTop: "0.4em",
              marginBottom: "0.4em",
            },
            a: {
              color: theme("colors.blue.400"),
              textDecoration: "underline",
            },
            blockquote: {
              color: theme("colors.neutral.400"),
              borderLeftColor: theme("colors.blue.500"),
              fontStyle: "italic",
              paddingLeft: "0.8em",
              marginTop: "0.8em",
              marginBottom: "0.8em",
            },
            li: {
              marginTop: "0.2em",
              marginBottom: "0.2em",
            },
            pre: {
              padding: "0.8em",
              fontSize: "0.85rem",
              marginTop: "0.6em",
              marginBottom: "0.6em",
            },
            code: {
              color: theme("colors.blue.300"),
              backgroundColor: theme("colors.neutral.800"),
              borderRadius: "4px",
              fontSize: "0.85rem", 
            },
          },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
