import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "../../components/RightSidebar";
import Image from "next/image";

export default async function Layout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <LeftSidebar />

      <section className="flex h-full flex-1 flex-col px-4 sm:px-14 overflow-auto">
        <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
          <div className="flex h-16 items-center justify-between md:hidden">
            {/* <Image
              src="/icons/logo.svg"
              width={30}
              height={30}
              alt="menu icon"
            /> */}
            {/* <MobileNav /> */}
          </div>
          <div className="flex flex-col md:pb-14">
            {/* <Toaster /> */}

            {children}
          </div>
        </div>
      </section>

      <RightSidebar />
    </div>
  );
}
