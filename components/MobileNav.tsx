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

import { usePathname, useRouter } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  const { user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <section>
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
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
                {sidebarLinks.map(({ route, label, imgURL }) => {
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
                        <Image
                          src={imgURL}
                          alt={label}
                          width={24}
                          height={24}
                        />
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
                        <Image
                          src="/icons/profile.svg"
                          width={24}
                          height={24}
                          alt="my profile"
                        />
                        <p>My profile</p>
                      </Link>
                    </SheetClose>
                  )}
                </SignedIn>
              </nav>

              <div className="mr-8">
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
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
