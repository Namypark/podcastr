"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import React, { useState, useEffect } from "react";
import { allTestPodcasts } from "@/constants";
import EmptyState from "@/components/EmptyState";
import LoaderSpinner from "@/components/LoaderSpinner";
import PodcastCard from "@/components/PodcastCard";
import { TestDataProps } from "@/types";
import Image from "next/image";
import { SearchCheck } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import { usePathname, useRouter } from "next/navigation";
import { useDebounce } from "@/lib/useDebounce";

const Discover = ({
  searchParams: { search },
}: {
  searchParams: { search: string };
}) => {
  const [filteredPodcasts, setFilteredPodcasts] = useState<TestDataProps[]>([]);
  // const podcastData = useQuery(api.podcasts.getPodcastBySearch, { search: search || "" });
  const podcastTestData = allTestPodcasts;
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (search) {
      const results = podcastTestData.filter(
        (podcast) =>
          podcast.podcastTitle.toLowerCase().includes(search.toLowerCase()) ||
          podcast.author.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredPodcasts(results);
    } else {
      setFilteredPodcasts([]);
    }
  }, [search, podcastTestData]);

  return (
    <div className="flex flex-col gap-9">
      <SearchBar />
      <div className="flex flex-col gap-9">
        <h1 className="text-20 text-white-1 font font-semibold">
          {!search ? "Discover Trending Podcasts" : `Searching for `}
          {search && <span className="text-white-2 ">{search}</span>}
        </h1>

        {podcastTestData ? (
          <>
            {filteredPodcasts.length > 0 ? (
              <div className="podcast_grid">
                {filteredPodcasts?.map(
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
              <>
                <EmptyState
                  title="No results found"
                  buttonLink="/discover"
                  buttonText="Discover"
                  search={search}
                />
              </>
            )}
          </>
        ) : (
          <LoaderSpinner />
        )}
      </div>
    </div>
  );
};

export default Discover;
