import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        snowy_day: "var(--snowy-day)",
        midnight_blue: "var(--midnight-blue)",
        off_black: "var(--off-black)",
        noon_yellow: "var(--noon-yellow)",
        clear_blue_sky: "var(--clear-blue-sky)",
      },
    },
  },

  plugins: [],
};

export default config;
