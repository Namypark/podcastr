"use client";

import LoaderSpinner from "@/components/LoaderSpinner";
import { allTestPodcasts } from "@/constants";
import { api } from "@/convex/_generated/api";
import { useClerk, useUser } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import PodcastCard from "@/components/PodcastCard";
import EmptyState from "@/components/EmptyState";
import { useAudio } from "@/providers/AudioProvider";
import { toast } from "@/components/ui/use-toast";
import { useDebounce } from "@/lib/useDebounce";

const Profile = ({
  params: { profileId },
}: {
  params: { profileId: string };
}) => {
  const { user } = useUser();
  // const podcasts = useQuery(api.podcasts.getPodcastAuthorId, {
  //   authorId: profileId,
  // });
  // const user = useQuery(api.users.getUserById, {
  //   clerkId: profileId,
  // })

  const podcasts = allTestPodcasts.filter(
    (podcast) => podcast.authorId === profileId
  );
  const { setAudio } = useAudio();
  const totalViews = podcasts
    ?.reduce((sum, podcast) => sum + podcast.views, 0)
    .toLocaleString();
  const randomPlay = Math.floor(Math.random() * podcasts.length);
  const randomPodcast = podcasts[randomPlay];
  const handleRandomPlay = () => {
    if (podcasts.length > 0) {
      setAudio({
        title: randomPodcast.podcastTitle,
        audioUrl: randomPodcast.audioUrl,
        imageUrl: randomPodcast.imageUrl,
        author: randomPodcast.author,
        podcastId: randomPodcast._id,
      });
    } else {
      toast({
        title: "No podcasts found",
        variant: "destructive",
      });
    }
  };
  if (!user || !podcasts) return <LoaderSpinner />;

  return (
    <section className="mt-9 gap-3 flex flex-col">
      <h1 className="text-20 font-semibold text-white-1 max-md:text-center">
        Podcaster Profile
      </h1>

      <div className="mt-6 flex gap-3 flex-col sm:flex-row items-center">
        <Image
          src={user?.imageUrl!}
          height={250}
          width={250}
          alt="user-profile-photo"
          className="rounded-xl "
        />
        <div className="flex flex-col space-y-6 justify-between">
          <div className="flex gap-3 items-center max-md:justify-center">
            <Image
              src="/assets/icons/verified.svg"
              width={16}
              height={16}
              alt="verified"
            />
            <span className="text-16 text-gray-1 max-md:text-center">
              Verified Creator
            </span>
          </div>
          <h1 className="text-white-1 font-extrabold text-32 max-md:text-center">
            {user?.fullName}
          </h1>
          <div className="flex-center gap-4 ">
            <Image
              src="/assets/icons/headphone.svg"
              width={24}
              height={24}
              alt="views"
            />
            <span className="text-16 text-white-1 font-bold">
              {totalViews ? totalViews : 0}
            </span>
            <p className="text-16 text-gray-1 font-normal">monthly views</p>
          </div>
          <Button className="cursor-pointer" onClick={handleRandomPlay}>
            <Image
              src="/assets/icons/randomPlay.svg"
              width={20}
              height={20}
              alt="play"
            />
            <p className="text-white-1 font-semibold text-16">
              Play a random podcast
            </p>
          </Button>
        </div>
      </div>
      <section className="flex flex-col gap-6 mt-9 space-y-4">
        <h1 className="text-white-1 text-20 font-bold">All podcasts</h1>
        {podcasts ? (
          podcasts.length > 0 ? (
            <div className="podcast_grid">
              {podcasts.map(
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
            <EmptyState
              title="You have not created any podcasts yet"
              buttonLink="/create-podcast"
              buttonText="Create a Podcast"
              imageUrl="microphone"
            />
          )
        ) : (
          <EmptyState
            title="You have not created any podcasts yet"
            buttonLink="/create-podcast"
            buttonText="Create a Podcast"
            imageUrl="microphone"
          />
        )}
      </section>
    </section>
  );
};

export default Profile;
