"use client";

import PodcastCard from "@/components/PodcastCard";
import { podcastData } from "@/constants";
import React from "react";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import PodcastPlayer from "../../components/PodcastPlayer";

const Home = () => {
  const trendingPodcasts = useQuery(api.podcasts.getTrending);

  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>

        <div className="podcast_grid">
          {podcastData.map(({ _id, title, podcastDescription, imageUrl }) => (
            <PodcastCard
              podcastId={_id}
              title={title}
              description={podcastDescription}
              imgURL={imageUrl}
              key={title}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
