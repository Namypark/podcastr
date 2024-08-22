import { EmptyStateProps } from "@/types";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const EmptyState = ({
  title,
  buttonLink,
  buttonText,
  search,
  imageUrl,
}: EmptyStateProps) => {
  return (
    <section className="flex-center size-full flex-col gap-3">
      <Image
        src="/assets/icons/emptyState.svg"
        width={250}
        height={250}
        alt="Empty state"
      />
      <div className="flex-center w-full max-w-[254px] flex-col gap-3">
        <h1 className="text-16 text-center font-medium text-white-1">
          {title}
        </h1>
        {search && (
          <p className="text-16 text-center font-medium text-white-1">
            Try adjusting your search to find what you&apos;re looking for
          </p>
        )}
        {buttonLink && (
          <Button className="bg-orange-1 w-full">
            <Link href={buttonLink} className="gap-1 flex">
              <Image
                src={`/assets/icons/${imageUrl ? imageUrl : "discover"}.svg`}
                width={20}
                height={20}
                alt="discover"
              />
              <h1 className="text-16 text-center font-medium text-white-1">
                {buttonText}
              </h1>
            </Link>
          </Button>
        )}
      </div>
    </section>
  );
};

export default EmptyState;
