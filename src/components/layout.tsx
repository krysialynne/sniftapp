import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import Background from "~/components/background";
import { forum, manrope } from "../utils/fonts";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${manrope.variable} ${forum.variable}`}>
      <Background />
      {children}
      <Analytics />
    </html>
  );
}
