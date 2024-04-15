import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        "s-light-green": "#606C38",
        "s-green": "#283618",
        "s-white": "#FEFAE0",
        "s-med-white": "#f4f1ec",
        "s-light-orange": "#DDA15E",
        "s-orange": "#BC6C25",
        "s-black": "#1B1A19",
      },
    },
  },
  plugins: [],
} satisfies Config;
