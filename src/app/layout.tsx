import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import { AnimationProvider } from "@/animation/provider";
import { profile } from "@/content/profile";
import { env } from "@/lib/env";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  ...(env.NEXT_PUBLIC_SITE_URL
    ? { metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL) }
    : {}),
  title: {
    default: profile.metadataTitle,
    template: `%s · ${profile.metadataTitle}`,
  },
  description: profile.metadataDescription,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${syne.variable}`}>
      <body>
        <AnimationProvider>{children}</AnimationProvider>
      </body>
    </html>
  );
}
