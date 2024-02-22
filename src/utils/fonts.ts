import { Forum, Manrope } from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const forum = Forum({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-forum",
});
