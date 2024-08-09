import { Id } from "@/convex/_generated/dataModel";

export declare interface PostCardTypes {
  podcastId: number;
  title: string;
  description: string;
  imgURL: string;
}

export declare interface GeneratePodcastProps {
  setAudioStorageId: Dispatch<SetStateAction<Id<"_storage"> | null>>;
  setAudio: Dispatch<SetStateAction<string>>;
  voiceType: string | null;
  audio: string;
  voicePrompt: string;
  setVoicePrompt: Dispatch<SetStateAction<string> | null>;
  setAudioDuration: Dispatch<SetStateAction<number>>;
}
