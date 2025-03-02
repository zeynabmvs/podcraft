"use client";

import Link from "next/link";
import { sidebarLinks } from "@/constants/index";
import { usePathname } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";

import { clsx } from "clsx";
import { SignedIn, SignedOut, useClerk, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useAudio } from "@/providers/AudioProvider";
import { cn } from "@/lib/utils";
import { HiUser } from "react-icons/hi";
import { IoIosLogOut } from "react-icons/io";
import { GoSignIn } from "react-icons/go";
import PodcraftLogo from '@/components/partials/PodcraftLogo'

const LeftSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { signOut } = useClerk();
  const { audio } = useAudio();
  const { user } = useUser();

  return (
    <aside
      className={cn("left_sidebar h-[calc(100vh-1px)]", {
        "h-[calc(100vh-85px)]": audio?.audioUrl,
      })}
    >
      <nav>
      <PodcraftLogo />


        {sidebarLinks.map(({ route, label, icon: Icon }) => {
          const isActive =
            pathname === route || pathname.startsWith(`${route}/`);

          return (
            <Link
              href={route}
              key={label}
              className={clsx(
                "flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start lg:pl-8",
                {
                  "bg-nav-focus border-r-4 border-primary-1": isActive,
                }
              )}
            >
              <Icon size={24} />
              <p className="hidden lg:block">{label}</p>
            </Link>
          );
        })}

        <SignedIn>
          {user && (
            <Link
              href={`/user-profile`}
              key="user-profile"
              className={clsx(
                "flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start lg:pl-8",
                {
                  "bg-nav-focus border-r-4 border-primary-1":
                    pathname === `/user-profile` ||
                    pathname.startsWith(`/user-profile`),
                }
              )}
            >
              <HiUser size={24} />
              <p className="hidden lg:block">My profile</p>
            </Link>
          )}
        </SignedIn>
      </nav>

      <SignedOut>
        <div className="flex-center lg:w-[80%] pb-14 mx-auto">
          <Button
            asChild
            className="text-16 w-full bg-primary-1 font-medium"
          >
            <Link href="/sign-in" className="flex gap-1">
              <IoIosLogOut size={20} />
              <span className="hidden lg:block">Sign in</span>
            </Link>
          </Button>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex-center lg:w-[80%] pb-14 mx-auto">
          <Button
            className="text-16 w-full bg-primary-1 font-medium flex gap-1"
            onClick={() => signOut(() => router.push("/"))}
          >
            <GoSignIn size={20} />
            <span className="hidden lg:block">Log Out</span>
          </Button>
        </div>
      </SignedIn>
    </aside>
  );
};

export default LeftSidebar;
