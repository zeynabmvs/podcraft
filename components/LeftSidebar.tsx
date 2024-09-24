"use client";

import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants/index";
import { usePathname, useRouter } from "next/navigation";
import { clsx } from "clsx";
import { SignedIn, SignedOut, useClerk } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useAudio } from "@/providers/AudioProvider";
import { cn } from "@/lib/utils";

const LeftSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { signOut } = useClerk();
  const { audio } = useAudio();

  return (
    <aside className={cn("left_sidebar h-[calc(100vh-5px)]", {
      'h-[calc(100vh-120px)]': audio?.audioUrl
    })}>
      <nav>
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center"
        >
          <Image src="/logo.png" width={40} height={40} alt="logo" />
          <h1 className="text-24 font-extrabold text-white max-lg:hidden">
            Podcraft
          </h1>
        </Link>

        {sidebarLinks.map(({ route, label, imgURL }) => {
          const isActive =
            pathname === route || pathname.startsWith(`${route}/`);

          return (
            <Link
              href={route}
              key={label}
              className={clsx(
                "flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start",
                {
                  "bg-nav-focus border-r-4 border-primary-1": isActive,
                }
              )}
            >
              <Image src={imgURL} width={24} height={24} alt={route} />
              <p className="hidden lg:block">{label}</p>
            </Link>
          );
        })}
      </nav>

      <div>
        <SignedOut>
          <div className="flex-center w-full pb-14">
            <Button
              asChild
              className="text-16 w-full bg-primary-1 font-extrabold"
            >
              <Link href="/sign-in">Sign in</Link>
            </Button>
          </div>
        </SignedOut>
        <SignedIn>
          <div className="flex-center w-full pb-14 max-lg:px-4 lg:pr-8">
            <Button
              className="text-16 w-full bg-primary-1 font-extrabold"
              onClick={() => signOut(() => router.push("/"))}
            >
              Log Out
            </Button>
          </div>
        </SignedIn>
      </div>
    </aside>
  );
};

export default LeftSidebar;
