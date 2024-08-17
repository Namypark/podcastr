"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, useClerk } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const LeftSidebar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const { signOut } = useClerk();
  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6">
        <Link
          href="/"
          className="flex cursor-pointer gap-1 items-center pb-10 max-lg:justify-center"
        >
          <Image
            src="/assets/icons/logo.svg"
            width={23}
            height={27}
            alt="logo"
          />
          <h1 className="text-24 font-extrabold text-white max-lg:hidden">
            Podcastr
          </h1>
        </Link>

        {sidebarLinks.map(
          ({
            label,
            route,
            imgURL,
          }: {
            label: string;
            route: string;
            imgURL: string;
          }) => {
            const isActive =
              pathName === route || pathName.startsWith(`${route}/`);
            return (
              <Link
                key={route}
                href={route}
                className={cn(
                  "gap-3 text-16-semibold text-gray-1 flex items-center py-4 max-lg:px-4 justify-center lg:justify-start hover:bg-nav-focus",
                  { "bg-nav-focus border-r-4 border-orange-1": isActive }
                )}
              >
                <Image src={"/" + imgURL} width={23} height={27} alt={label} />
                {label}
              </Link>
            );
          }
        )}
      </nav>
      <SignedOut>
        <div className="flex-center w-full pb-14  max-lg:px-4 lg:pr-8">
          <Button asChild className="bg-orange-1 w-full text-16 font-extrabold">
            <Link href="/sign-in">Sign in</Link>
          </Button>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex-center w-full pb-14  max-lg:px-4 lg:pr-8">
          <Button
            className="bg-orange-1 w-full text-16 font-extrabold text-white-1"
            onClick={() => signOut(() => router.push("/"))}
          >
            Log out
          </Button>
        </div>
      </SignedIn>
    </section>
  );
};

export default LeftSidebar;
