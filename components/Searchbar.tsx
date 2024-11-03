"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";
import { useDebounce } from "@/lib/useDebounce";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useRouter } from "nextjs-toploader/app";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const debouncedValue = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedValue) {
      router.push(`/discover?search=${debouncedValue}`);
    } else if (!debouncedValue && pathname === "/discover" && search)
      router.push("/discover");
  }, [router, pathname, debouncedValue]);

  return (
    <div className="relative mt-8 block">
      <Input
        className="input-class py-6 pl-12 focus-visible:ring-offset-primary-1"
        placeholder="Search for podcasts or authors"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        // onLoad={() => setSearch("")}
      />
      <HiMagnifyingGlass size={18} className="absolute left-4 top-3.5" />
    </div>
  );
};

export default Searchbar;
