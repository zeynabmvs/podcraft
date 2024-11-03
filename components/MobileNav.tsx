"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, useClerk, useUser } from "@clerk/nextjs";
import { clsx } from "clsx";
import { Button } from "@/components/ui/button";
import { HiUser } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoIosLogOut } from "react-icons/io";
import { GoSignIn } from "react-icons/go";
import { SpaceIcon } from "lucide-react";

const MobileNav = () => {
  const pathname = usePathname();
  const { user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <section>
      <Sheet>
        <SheetTrigger>
          <HiBars3BottomRight size={32} />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-black-1">
          <Link
            href="/"
            className="flex cursor-pointer items-center gap-1 pb-10 pl-4"
          >
            <Image src="/logo.png" alt="logo" width={23} height={27} />
            <h1 className="text-24 font-extrabold  text-white-1 ml-2">
              Podcraft
            </h1>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose>
              <nav className="flex h-full flex-col gap-6 text-white-1">
                {sidebarLinks.map(({ route, label, icon: Icon }) => {
                  const isActive =
                    pathname === route || pathname.startsWith(`${route}/`);

                  return (
                    <SheetClose key={route}>
                      <Link
                        href={route}
                        className={cn(
                          "flex gap-3 items-center py-4 max-lg:px-4 justify-start",
                          {
                            "bg-nav-focus border-r-4 border-primary-1":
                              isActive,
                          }
                        )}
                      >
                        <Icon size={24} />
                        <p>{label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}

                <SignedIn>
                  {user && (
                    <SheetClose key="user-profile">
                      <Link
                        href="/user-profile"
                        className={clsx(
                          "flex gap-3 items-center py-4 max-lg:px-4 justify-left lg:justify-start",
                          {
                            "bg-nav-focus border-r-4 border-primary-1":
                              pathname === `/user-profile` ||
                              pathname.startsWith(`/user-profile`),
                          }
                        )}
                      >
                        <HiUser size={24} />

                        <p>My profile</p>
                      </Link>
                    </SheetClose>
                  )}
                </SignedIn>
              </nav>

              <div className="mr-8">
                <SignedOut>
                  <div className="flex-center lg:w-[80%] pb-14 mx-auto">
                    <Button
                      asChild
                      className="text-16 w-full bg-primary-1 font-extrabold"
                    >
                      <Link href="/sign-in" className="flex gap-1">
                        <IoIosLogOut size={20} />
                        <span>Sign in</span>
                      </Link>
                    </Button>
                  </div>
                </SignedOut>
                <SignedIn>
                  <div className="flex-center lg:w-[80%] pb-14 mx-auto">
                    <Button
                      className="text-16 w-full bg-primary-1 font-extrabold flex gap-1"
                      onClick={() => signOut(() => router.push("/"))}
                    >
                      <GoSignIn size={20} />
                      <span>Log Out</span>
                    </Button>
                  </div>
                </SignedIn>
              </div>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
