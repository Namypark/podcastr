import { Id } from "@/convex/_generated/dataModel";
import { VoiceType } from "@/types";
import { Dispatch, SetStateAction } from "react";

export declare interface PostCardTypes {
  podcastId: number;
  title: string;
  description: string;
  imgURL: string;
}
export type VoiceType =
  | "alloy"
  | "echo"
  | "fable"
  | "onyx"
  | "nova"
  | "shimmer"
  | undefined;

export declare interface GeneratePodcastProps {
  setAudioStorageId: Dispatch<SetStateAction<Id<"_storage"> | null>>;
  setAudio: Dispatch<SetStateAction<string>>;
  voiceType: VoiceType;
  audio: string;
  voicePrompt: string;
  setVoicePrompt: Dispatch<SetStateAction<string>>;
  setAudioDuration: Dispatch<SetStateAction<number>>;
}

export declare interface GenerateThumbnailProps {
  setImage: Dispatch<SetStateAction<string>>;
  setImageStorageId: Dispatch<SetStateAction<Id<"_storage"> | null>>;
  image: string;
  imagePrompt: string;
  setImagePrompt: Dispatch<SetStateAction<string>>;
}
