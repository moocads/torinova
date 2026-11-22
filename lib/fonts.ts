import { Inter, Noto_Sans_SC } from "next/font/google";

// Latin UI font
export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Simplified Chinese — not preloaded (large), only used when lang="zh"
export const fontZh = Noto_Sans_SC({
  weight: ["400", "500", "700"],
  variable: "--font-noto-sc",
  display: "swap",
  preload: false,
});

export const fontVariables = `${fontSans.variable} ${fontZh.variable}`;
