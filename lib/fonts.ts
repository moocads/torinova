import { Manrope, Sora } from "next/font/google";

export const fontBody = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const fontDisplay = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const fontVariables = `${fontBody.variable} ${fontDisplay.variable}`;
