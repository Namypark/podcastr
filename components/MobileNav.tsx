"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignedIn, SignedOut, useClerk } from "@clerk/nextjs";

import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
const MobileNav = () => {
  const pathName = usePathname();
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          width={24}
          height={24}
          alt="mobile menu"
          className="cursor-pointer"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-black-1 text-white-1 border-black-1"
      >
        <Link
          href="/"
          className="flex cursor-pointer gap-1 items-center pb-10 pl-12"
        >
          <Image
            src="/assets/icons/logo.svg"
            width={23}
            height={27}
            alt="logo"
          />
          <h1 className="text-24 font-extrabold text-white-1 ml-2">Podcastr</h1>
        </Link>
        <div className="flex h-[calc(100vh - 72px] w-full flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <>
              <nav className="flex flex-col gap-6 items-start h-full space-y-1">
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
                      <SheetClose key={route} asChild>
                        <Link
                          href={route}
                          className={cn(
                            "gap-3 text-16-semibold text-gray-1 w-full flex items-center py-4 max-lg:px-4  lg:justify-start hover:bg-nav-focus",
                            {
                              "bg-nav-focus border-r-4 border-orange-1":
                                isActive,
                            }
                          )}
                        >
                          <Image
                            src={"/" + imgURL}
                            width={23}
                            height={27}
                            alt={label}
                          />
                          {label}
                        </Link>
                      </SheetClose>
                    );
                  }
                )}
                <SignedIn>
                  <SheetClose asChild>
                    <Link
                      href="/profile"
                      className={cn(
                        "gap-3 text-16-semibold w-full text-gray-1 flex items-center py-4 max-lg:px-4  hover:bg-nav-focus",
                        {
                          "bg-nav-focus border-r-4 border-orange-1":
                            pathName === "/profile",
                        }
                      )}
                    >
                      <Image
                        src="/assets/icons/profile.svg"
                        width={23}
                        height={27}
                        alt="Profile"
                      />
                      Profile
                    </Link>
                  </SheetClose>
                </SignedIn>
              </nav>
              <SignedOut>
                <div className="flex-center w-full pb-14  max-lg:px-4 lg:pr-8 mt-9">
                  <Button
                    asChild
                    className="bg-orange-1 w-full text-16 font-extrabold"
                  >
                    <SheetClose asChild>
                      <Link href="/sign-in">Sign in</Link>
                    </SheetClose>
                  </Button>
                </div>
              </SignedOut>
              <SignedIn>
                <div className="flex-center w-full pb-14  max-lg:px-4 lg:pr-8 mt-9">
                  <SheetClose asChild>
                    <Button
                      className="bg-orange-1 w-full text-16 font-extrabold text-white-1"
                      onClick={() => signOut(() => router.push("/"))}
                    >
                      Log out
                    </Button>
                  </SheetClose>
                </div>
              </SignedIn>
            </>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
