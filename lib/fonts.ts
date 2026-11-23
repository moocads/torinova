import { Manrope, Space_Grotesk } from "next/font/google";

export const fontBody = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const fontVariables = `${fontBody.variable} ${fontDisplay.variable}`;
