"use client";

import LeftSidebar from "@/components/layout/LeftSidebar";
import MobileNav from "@/components/layout/MobileNav";
import Image from "next/image";
import { Toaster } from "@/components/ui/toaster";
import PodcastPlayer from "@/components/partials/StickyPlayer";
// import ConvexClerkProvider from "@/providers/ConvexClerkProvider";
// import AudioProvider from "@/providers/AudioProvider";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ConvexClerkProvider>
      // <AudioProvider>
        <div className="relative flex flex-col">
          <main className="relative flex bg-black-3">
            <LeftSidebar />

            <section className="flex min-h-screen flex-1 flex-col px-4 sm:px-14">
              <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
                <div className="flex h-16 items-center justify-between md:hidden">
                  <Image
                    src="/logo.png"
                    width={30}
                    height={30}
                    alt="menu icon"
                  />
                  <MobileNav />
                </div>
                <div className="flex flex-col md:pb-14">
                  <Toaster />

                  {children}
                </div>
              </div>
            </section>
          </main>
          <PodcastPlayer />
        </div>
      // </AudioProvider>
    //  </ConvexClerkProvider>
  );
}
