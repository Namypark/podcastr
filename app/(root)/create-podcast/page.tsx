import { CreatePodcastForm } from "@/components/forms/createPodcastForm";
import React from "react";

const CreatePodcast = () => {
  return (
    <section className="mt-9 gap-6">
      <h1 className="text-20 font-semibold text-white-1 mb-9">
        Create podcast
      </h1>
      <CreatePodcastForm />
    </section>
  );
};

export default CreatePodcast;
