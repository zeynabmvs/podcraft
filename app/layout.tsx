import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import ConvexClerkProvider from "@/providers/ConvexClerkProvider";
import "@/app/globals.css";
import AudioProvider from "@/providers/AudioProvider";
import NextTopLoader from "nextjs-toploader";
import NetworkStatus from "@/components/NetworkStatus";

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
          <NextTopLoader
            color="#FF4C4C"
            showSpinner={false}
            shadow="0 0 0 #FF4C4C,0 0 0 #FF4C4C"
          />
          <AudioProvider>{children}</AudioProvider>
          <NetworkStatus />
        </body>
      </html>
    </ConvexClerkProvider>
  );
}
