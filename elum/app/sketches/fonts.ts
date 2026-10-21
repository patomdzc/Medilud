import { Anybody, Big_Shoulders, Funnel_Display, Funnel_Sans } from "next/font/google";

// Tipografías PROVISIONALES de boceto. La final se elige en la siguiente fase (puede ser comercial).
export const anybody = Anybody({ subsets: ["latin", "latin-ext"], axes: ["wdth"], variable: "--f-reg", display: "swap" });
export const shoulders = Big_Shoulders({ subsets: ["latin", "latin-ext"], variable: "--f-hor", display: "swap" });
export const funnelDisplay = Funnel_Display({ subsets: ["latin", "latin-ext"], variable: "--f-via-d", display: "swap" });
export const funnelSans = Funnel_Sans({ subsets: ["latin", "latin-ext"], variable: "--f-via", display: "swap" });

export const sketchFonts = [anybody, shoulders, funnelDisplay, funnelSans].map((f) => f.variable).join(" ");
