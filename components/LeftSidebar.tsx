"use client";

import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants/index";
import { usePathname, useRouter } from "next/navigation";
import { clsx } from "clsx";

const LeftSidebar = () => {
  const pathname = usePathname();
  const router = useRouter()

  return (
    <aside className="bg-black-1 w-1/6 h-full p-4">
      <nav>
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center"
        >
          <Image src="/logo.png" width={40} height={40} alt="logo" />
          <h1 className="text-24 font-extrabold text-white max-lg:hidden">
            Podcast
          </h1>
        </Link>

        {sidebarLinks.map(({ route, label, imgURL }) => {
          const isActive = pathname === route || pathname.startsWith(`${route}/`)

          return <Link
              href={route}
              key={label}
              className={clsx("flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start", 
                {
                  'bg-nav-focus border-r-4 border-primary-1' : isActive
                }
              )}
            >
            <Image src={imgURL} width={24} height={24} alt={route} />
            <p className="hidden lg:block">{label}</p>
          </Link>
        })}

      </nav>
    </aside>
  );
};

export default LeftSidebar;
