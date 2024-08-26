import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { DESCRIPTION, TITLE } from "@/config";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-762FENC2V2" />
    </html>
  );
}
