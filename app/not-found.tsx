import Image from "next/image";
import LeftSidebar from "@/components/LeftSidebar";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";
import { Toaster } from "@/components/ui/toaster";

export default function NotFound(): JSX.Element {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-3">
        <LeftSidebar />

        <section className="flex min-h-screen flex-1 flex-col px-4 sm:px-14 ">
          <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
            <div className="flex h-16 items-center justify-between lg:hidden">
              <Image src="/logo.png" width={30} height={30} alt="menu icon" />
              <MobileNav />
            </div>
            <div className="flex flex-col md:pb-14">
              <Toaster />

              {/* Not found stuff */}
              <div className="flex flex-col items-center pt-10">
                <h1 className="text-3xl mb-2">404 - Page Not Found</h1>
                <p className="mb-4">
                  Your search has ventured beyond the known universe.
                </p>
                <div className="relative  w-[300px] h-[300px] md:w-[600px] md:h-[600px]">
                  <Image
                    className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10"
                    src="/images/404.svg"
                    alt="Page Not Found"
                    width={321}
                    height={326}
                  />
                  <Image
                    className="absolute left-1/2 -translate-x-1/2  top-1/2 -translate-y-1/2 z-1 scale-125"
                    src="/images/Ellipse404.svg"
                    alt=""
                    width={865}
                    height={904}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
