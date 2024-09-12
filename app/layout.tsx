import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ConvexClerkProvider from "@/providers/ConvexClerkProvider";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podcast App",
  description: "Listen and share podcasts",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white-1 bg-black-3`}>
        <ConvexClerkProvider>{children}</ConvexClerkProvider>
      </body>
    </html>
  );
}
