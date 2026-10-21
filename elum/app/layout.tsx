import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elum",
  description: "Elum diagnostica el negocio de tu clínica. Calm is a number.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX">
      <body>{children}</body>
    </html>
  );
}
