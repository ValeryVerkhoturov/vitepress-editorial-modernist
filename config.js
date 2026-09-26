// Head entries for the two web fonts the theme sets its display and mono
// type in. Spread them into `head` in `.vitepress/config`:
//
//   import { editorialFonts } from "vitepress-editorial-modernist/config";
//   export default defineConfig({ head: [...editorialFonts] });
//
// Both families ship Cyrillic subsets. Skip this export if you self-host
// the fonts or point `--ed-font-display` / `--ed-font-mono` elsewhere.
export const editorialFonts = [
  ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
  [
    "link",
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
  ],
  [
    "link",
    {
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css2" +
        "?family=Playfair+Display:ital,wght@0,400..700;1,400..600" +
        "&family=JetBrains+Mono:wght@400;500" +
        "&display=swap",
    },
  ],
];
