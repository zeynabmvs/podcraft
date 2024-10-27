import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import ConvexClerkProvider from "@/providers/ConvexClerkProvider";
import "@/app/globals.css";
import AudioProvider from "@/providers/AudioProvider";

const manrope = Manrope({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podcraft",
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
    <ConvexClerkProvider>
      <html lang="en">
        <body className={`${inter.className} text-white-1 bg-black-3`}>
          <AudioProvider>{children}</AudioProvider>
        </body>
      </html>
    </ConvexClerkProvider>
  );
}
