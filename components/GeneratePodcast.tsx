import { GeneratePodcastProps } from "@/types";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Loader } from "lucide-react";

const GeneratePodcast = ({
  setAudioStorageId,
  setAudio,
  voiceType,
  audio,
  voicePrompt,
  setVoicePrompt,
  setAudioDuration,
}: GeneratePodcastProps) => {
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  return (
    <div className="gap-2.5 flex flex-col">
      <div className="gap-2.5 flex flex-col">
        <Label className="text-16 font-bold text-white-1">
          AI Prompt to Generate Podcast
        </Label>
        <Textarea
          placeholder="Enter AI prompt to generate Podcast"
          className="input-class focus:ring-offset-orange-1"
          rows={5}
          value={voicePrompt}
          onChange={({ target }) => setVoicePrompt(target.value)}
        />
      </div>
      <div className="mt-5 w-full max-w-[200px]">
        <Button
          type="submit"
          className="text-16 bg-orange-1 text-white-1 rounded-lg"
          disabled={isGenerating}
        >
          {isGenerating ? (
            <>
              Generating
              <Loader className="animate-spin mr-2" size={20} />
            </>
          ) : (
            "Submit & Publish Podcast"
          )}
        </Button>
      </div>
    </div>
  );
};
export default GeneratePodcast;
