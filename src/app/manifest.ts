import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "org.dadabhagwan.uniconvert",
    name: "uniConvert",
    short_name: "uniConvert",
    description:
      "A tool for converting text between various Unicode and non-Unicode fonts.",
    categories: ["utilities", "productivity", "text", "fonts"],
    start_url: "/",
    lang: "en",
    display: "standalone",
    background_color: "#E9E5DE",
    theme_color: "#092D35",
    icons: [
      {
        src: "/assets/svgs/dbf-logo.svg",
        sizes: "512x512",
        type: "image/svg+xml",
      },
    ],
  };
}
