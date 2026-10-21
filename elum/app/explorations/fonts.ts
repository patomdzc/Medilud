import { Familjen_Grotesk, Azeret_Mono, Geologica, Fragment_Mono, Gloock, Golos_Text } from "next/font/google";

// A · Medidor
export const familjen = Familjen_Grotesk({ subsets: ["latin", "latin-ext"], variable: "--font-a-display", display: "swap" });
export const azeret = Azeret_Mono({ subsets: ["latin", "latin-ext"], variable: "--font-a-num", display: "swap" });

// B · Instrumento
export const geologica = Geologica({ subsets: ["latin", "latin-ext"], variable: "--font-b-display", display: "swap" });
export const fragment = Fragment_Mono({ subsets: ["latin", "latin-ext"], weight: "400", variable: "--font-b-num", display: "swap" });

// C · Reposo
export const gloock = Gloock({ subsets: ["latin", "latin-ext"], weight: "400", variable: "--font-c-display", display: "swap" });
export const golos = Golos_Text({ subsets: ["latin", "latin-ext"], variable: "--font-c-text", display: "swap" });

export const fontVars = [familjen, azeret, geologica, fragment, gloock, golos].map((f) => f.variable).join(" ");
