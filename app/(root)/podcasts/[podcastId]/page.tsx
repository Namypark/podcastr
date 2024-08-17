"use client";
import React from "react";
import Image from "next/image";
import { useAction, useQuery } from "convex/react";
import { Value } from "convex/values";

import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import PodcastDetailPlayer from "@/components/PodcastDetailPlayer";
import { getPodcastByVoiceType } from "../../../../convex/podcasts";
import LoaderSpinner from "@/components/LoaderSpinner";
import PodcastCard from "@/components/PodcastCard";
import { allTestPodcasts, podcastData, similarTestPodcasts } from "@/constants";
import { TestDataProps } from "@/types";
import EmptyState from "@/components/EmptyState";
import { useUser } from "@clerk/nextjs";

const PodcastDetails = ({
  params: { podcastId },
}: {
  params: { podcastId: Id<"podcasts"> };
}) => {
  // const podcast = useQuery(api.podcasts.getPodcastById, {
  //   podcastId: params.podcastId,
  const { user } = useUser();
  console.log(user);
  const podcast = allTestPodcasts.find(
    (podcastData) => podcastData._id === podcastId
  );
  const similarPodcasts = allTestPodcasts.filter(
    (podcastData) => podcastData._id !== podcastId
  );
  // const similarPodcasts: TestDataProps | never[] = [];
  // const similarPodcasts = useQuery(api.podcasts.getPodcastByVoiceType, {
  //   podcastId: params.podcastId,
  // });

  const isOwner = user?.id === podcast?.authorId;
  // if (!similarPodcasts || podcast!) {
  //   return <LoaderSpinner />;
  // }

  return (
    <section className="flex flex-col w-full">
      <header className="mt-9 flex items-center justify-between">
        <h1 className="text-20 font-bold text-white-1">Currently Playing</h1>
        <figure className="flex  gap-3 items-center">
          <Image
            src="/assets/icons/headphone.svg"
            height={24}
            width={24}
            alt="headphone"
          />
          <h2 className="text-16 font-bold text-white-1">0</h2>
        </figure>
      </header>

      <PodcastDetailPlayer
        {...podcast}
        podcastId={podcast?._id!}
        isOwner={isOwner}
      />
      <p className="text-white-2 text-16 pb-8 pt-[45px] font-medium max-md:text-center">
        {podcast?.podcastDescription!}
      </p>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 ">
          <h1 className="text-white-1 text-16 font-bold">Transcription</h1>
          <p className="text-16 font-medium text-white-2 ">
            {podcast!.voicePrompt}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-white-1 text-16 font-bold">Thumbnail Prompt</h1>
          <p className="text-16 font-medium text-white-2">
            {podcast!.imagePrompt}
          </p>
        </div>
      </div>
      <section className="mt-8 flex flex-col gap-5">
        <h1 className="text-white-1 text-20 font-bold">Similar Podcasts</h1>
        {similarPodcasts && similarPodcasts.length > 0 ? (
          <div className="podcast_grid">
            {similarPodcasts?.map(
              ({ _id, podcastTitle, podcastDescription, imageUrl }) => (
                <PodcastCard
                  podcastId={_id}
                  title={podcastTitle}
                  description={podcastDescription}
                  imgURL={imageUrl}
                  key={podcastTitle}
                />
              )
            )}
          </div>
        ) : (
          <div>
            <EmptyState
              title="No similar podcasts found"
              buttonLink="/discover"
              buttonText="Discover more podcasts"
              search=""
            />
          </div>
        )}
      </section>
    </section>
  );
};
export default PodcastDetails;
