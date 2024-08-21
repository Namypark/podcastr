"use client";
import Image from "next/image";
import { SearchBarProps } from "@/types";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useDebounce } from "@/lib/useDebounce";
const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const pathName = usePathname();
  const router = useRouter();
  const debouncedValue = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedValue) {
      router.push(`/discover?search=${debouncedValue}`);
    } else if (!debouncedValue && pathName === "/discover") {
      router.push("/discover");
    }
  }, [debouncedValue, pathName, router]);

  return (
    <div className="relative mt-8 block">
      <input
        type="search"
        onChange={handleSearch}
        value={search}
        className="input-class py-3 pl-12 transition-all ease-in-out duration-300 input  w-full focus:outline-orange-1 outline-none rounded-md max-w-[757px] h-[50px] "
        placeholder="Type here to search"
        onLoad={() => setSearch("")}
      />
      <Image
        src="/assets/icons/search.svg"
        width={20}
        height={20}
        alt="search icon"
        className="absolute top-4 left-4"
      />
    </div>
  );
};

export default SearchBar;
