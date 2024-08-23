"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PodcastDetailPlayerProps, TestDataProps } from "@/types";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useToast } from "./ui/use-toast";
import { allTestPodcasts } from "@/constants";
import { useRouter } from "next/navigation";
import LoaderSpinner from "./LoaderSpinner";
import { Button } from "./ui/button";
import { useAudio } from "@/providers/AudioProvider";

const PodcastDetailPlayer = ({
  audioUrl,
  podcastTitle,
  author,
  imageUrl,
  podcastId,
  imageStorageId,
  audioStorageId,
  isOwner,
  authorImageUrl,
  authorId,
}: PodcastDetailPlayerProps) => {
  // const deletePodcast = useMutation(api.podcasts.deletePodcast);

  const deletePodcast = (id: string) =>
    allTestPodcasts.filter((podcast) => podcast._id === id);

  const { toast } = useToast();
  const router = useRouter();
  const { setAudio } = useAudio();
  const [isDeleting, setIsDeleting] = useState(false);
  const handleDelete = async () => {
    try {
      // await deletePodcast({
      //   podcastId,
      //   podcasts.audioStorageId,
      //   podcasts.imageStorageId
      // }
      // );
      deletePodcast(podcastId);
      const updatedPodcasts = deletePodcast(podcastId);
      toast({
        title: "Successfully deleted podcast",
      });
      router.push("/");
    } catch (error) {
      console.error(error);
      toast({
        title: "Error deleting podcast",
        variant: "destructive",
      });
    }
  };

  const handlePlay = () => {
    setAudio({
      title: podcastTitle,
      audioUrl,
      imageUrl,
      author,
      podcastId,
    });
  };

  if (!imageUrl || !audioUrl) return <LoaderSpinner />;
  return (
    <div className="mt-6 flex w-full justify-between max-md:justify-center">
      <div className="flex flex-col gap-8 mt-5 max-md:items-center md:flex-row">
        <Image
          src={imageUrl}
          width={250}
          height={250}
          alt="now-playing-image-art"
        />
        <div className="flex flex-col w-full gap-5 max-md:items-center md:gap-9">
          <article className="flex flex-col gap-2 max-md:items-center">
            <h1 className="text-32 font-extrabold tracking-[-0.32px] text-white-1">
              {podcastTitle}
            </h1>
            <figure
              className="flex gap-3 items-center justify-start cursor-pointer"
              onClick={() => router.push(`/profile/${authorId}`)}
            >
              <Image
                src={authorImageUrl}
                width={30}
                height={30}
                alt="author-image"
                className="rounded-full size-[30px] object-cover "
              />
              <h2 className="text-16 font-normal text-white-3">{author}</h2>
            </figure>
          </article>
          <Button
            className="w-full bg-orange-1 text-16 text-white-1 max-w-[250px] font-extrabold"
            onClick={handlePlay}
          >
            <Image
              src="/assets/icons/Play.svg"
              width={20}
              height={20}
              alt="play-button"
            />
            &nbsp; Play podcast
          </Button>
        </div>
      </div>
      {isOwner && (
        <div className="relative mt-2">
          <Image
            src="/assets/icons/three-dots.svg"
            width={20}
            height={30}
            alt="Three dots icon"
            className="cursor-pointer"
            onClick={() => setIsDeleting((prev) => !prev)}
          />
          {isDeleting && (
            <div
              className="absolute -left-32 -top-2 z-10 flex w-32 cursor-pointer justify-center gap-2 rounded-md bg-black-6 py-1.5 hover:bg-black-2"
              onClick={handleDelete}
            >
              <Image
                src="/assets/icons/delete.svg"
                width={16}
                height={16}
                alt="Delete icon"
              />
              <h2 className="text-16 font-normal text-white-1">Delete</h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PodcastDetailPlayer;
