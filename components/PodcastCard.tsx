import React from "react";
import Image from "next/image";
import { PostCardTypes } from "@/types";
const PodcastCard = ({
  podcastId,
  title,
  description,
  imgURL,
}: PostCardTypes) => {
  return (
    <div className="cursor-pointer ">
      <figure className="flex flex-col gap-2">
        <Image
          src={imgURL}
          alt={title}
          width={174}
          height={174}
          className="aspect-square h-fit w-full rounded-xl 2xl:rounded-[200px]"
        />
        <div className="flex flex-col items-center">
          <h1 className="text-16 truncate font-bold text-white-1 w-full">
            {title}
          </h1>
          <span className="text-12 truncate font-normal capitalize text-gray-1">
            {description}
          </span>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
