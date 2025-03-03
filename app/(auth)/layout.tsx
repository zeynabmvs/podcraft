import Image from "next/image";
// import ConvexClerkProvider from "@/providers/ConvexClerkProvider";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ConvexClerkProvider>
      <main className="relative h-screen w-full">
        <div className="absolute size-full">
          <Image
            src="/images/bg.jpg"
            alt="background"
            fill
            className="size-full"
          />
        </div>

        {children}
      </main>
    // </ConvexClerkProvider>
  );
}
