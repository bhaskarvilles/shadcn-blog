import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./markdown-styles.css";
import "./highlight.css";
import { ThemeProvider } from "../components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { getGravatarUrl } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gravatarUrl = getGravatarUrl("bhaskarvilles@gmail.com", 400);

export const metadata: Metadata = {
  title: "Ram's Website",
  description: "Explore cutting-edge tech, geopolitics, ethical hacking, activism, and humanity's future.",
  authors: [{ name: "Bhaskar Ram" }],
  metadataBase: new URL("https://secretcoder.org"),
  openGraph: {
    title: "Ram's Website",
    description: "Explore cutting-edge tech, geopolitics, ethical hacking, activism, and humanity's future.",
    images: [gravatarUrl],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ram's Website",
    description: "Explore cutting-edge tech, geopolitics, ethical hacking, activism, and humanity's future.",
    images: [gravatarUrl],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#141414" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <div className="fixed inset-0 pattern-dots opacity-[0.08] dark:opacity-[0.12] z-[-1] pointer-events-none" />
        <ThemeProvider
          attribute="class"
          defaultTheme="auto"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
