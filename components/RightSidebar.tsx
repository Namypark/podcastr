"use client";
import React from "react";
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import Header from "./Header";
import Carousel from "./Carousel";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { allTestPodcasts } from "@/constants";
import { useRouter } from "next/navigation";
const RightSidebar = () => {
  // const { user } = useUser();
  const { user } = useUser();
  const router = useRouter();
  // const topUsersByPodcast = useQuery(api.users.getTopUserByPodcastCount);

  const topUsersByPodcast = [
    {
      _id: "user_1",
      _creationTime: 1672531200000, // Example timestamp (January 1, 2023)
      email: "userone@example.com",
      imageUrl:
        "https://lovely-flamingo-139.convex.cloud/api/storage/3106b884-548d-4ba0-a179-785901f69806",
      clerkId: "user_2kX8UsW5HW3k2ToeHQZOKVQ5lqc",
      name: "Joe Rogan",
      podcast: [
        {
          podcastTitle: "The Joe Rogan Experience",
          podcastId: "1",
        },
        {
          podcastTitle: "The Futur",
          podcastId: "2",
        },
        {
          podcastTitle: "Waveform",
          podcastId: "3",
        },
        {
          podcastTitle: "The Tech Talks Daily Podcast",
          podcastId: "4",
        },
        {
          podcastTitle: "GaryVee Audio Experience",
          podcastId: "5",
        },
        {
          podcastTitle: "Syntax",
          podcastId: "6",
        },
        {
          podcastTitle: "IMPAULSIVE",
          podcastId: "7",
        },
        {
          podcastTitle: "Ted Tech",
          podcastId: "8",
        },
      ],
      totalPodcasts: 8,
    },
    {
      _id: "user_2",
      _creationTime: 1672531200000, // Example timestamp (January 1, 2023)
      email: "userone@example.com",
      imageUrl:
        "https://lovely-flamingo-139.convex.cloud/api/storage/ca7cb1a6-4919-4b2c-a73e-279a79ac6d23",
      clerkId: "user_2kX8UsW5HW3k2ToeHQZOKVQ5lqc121",
      name: "Gary Vaynerchuk",
      podcast: [
        {
          podcastTitle: "GaryVee Audio Experience",
          podcastId: "5",
        },
      ],
      totalPodcasts: 2,
    },
    {
      _id: "user_3",
      _creationTime: 1672531200000, // Example timestamp (January 1, 2023)
      email: "userone@example.com",
      imageUrl:
        "https://lovely-flamingo-139.convex.cloud/api/storage/5ba7ed1b-88b4-4c32-8d71-270f1c502445",
      clerkId: "user_2kX8UsW5HW3k2ToeHQZOKVQ5lq2121c",
      name: "Neil Hughes",
      podcast: [
        {
          podcastTitle: "Tech talks daily",
          podcastId: "4",
        },
      ],
      totalPodcasts: 3,
    },
    {
      _id: "user_4",
      _creationTime: 1672531200000, // Example timestamp (January 1, 2023)
      email: "userone@example12.com",
      imageUrl:
        "https://lovely-flamingo-139.convex.cloud/api/storage/8a55d662-fe3f-4bcf-b78b-3b2f3d3def5c",
      clerkId: "user_2kX8UsW5HW3k2ToeHQZOKVQ5lqc121",
      name: "Logan paul",
      podcast: [
        {
          podcastTitle: "Impaulsive",
          podcastId: "7",
        },
      ],
      totalPodcasts: 1,
    },
  ];
  // console.log(similarPodcasts);
  return (
    <section className="right_sidebar text-white">
      <SignedIn>
        <Link href={`/profile/${user?.id}`} className="flex gap-3 pb-12">
          <UserButton />
          <div className="flex w-full items-center justify-between">
            <h1 className="text-16 truncate font-bold text-white-1">
              {user?.firstName} {user?.lastName}
            </h1>
            <Image
              src="/assets/icons/right-arrow.svg"
              width={24}
              height={24}
              alt="right-arrow"
            />
          </div>
        </Link>
      </SignedIn>
      <section className="space-y-3">
        <Header headerTitle="Fans Also Like" />
        <Carousel fansLikeDetail={topUsersByPodcast!} />
        {/* //use the code below if you have an openai api key loaded with credits */}
        {/* <Carousel fansLikeDetail={topUsersByPodcast!} /> */}
      </section>
      <section>
        <Header headerTitle="Top podcasters" />
        <div className="flex flex-col gap-6 mt-6">
          {topUsersByPodcast?.slice(0, 5).map((podcaster) => (
            <div
              key={podcaster._id}
              className="flex justify-between items-center cursor-pointer hover:bg-black-5"
              onClick={() => router.push(`/profile/${podcaster.clerkId}`)}
            >
              <figure className="flex gap-3">
                <Image
                  src={podcaster.imageUrl}
                  alt="profile image"
                  width={44}
                  height={44}
                  className="aspect-square rounded-lg "
                />
                <div className="flex flex-col items-start justify-start">
                  <h1 className="text-white-1 font-bold text-14 truncate">
                    {podcaster.name}
                  </h1>
                  <span className="text-12 text-white-2 font-normal">
                    {podcaster.name
                      ? podcaster.name.split(" ").pop()
                      : podcaster.name.split(" ")[0]}
                  </span>
                </div>
              </figure>
              <p className="text-12 text-white-1 font-normal">{`${podcaster.totalPodcasts} podcasts`}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default RightSidebar;
