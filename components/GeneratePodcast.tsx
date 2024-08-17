import { GeneratePodcastProps, VoiceType } from "@/types";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Loader } from "lucide-react";
import { useAction, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { v4 as uuidv4 } from "uuid";
import { useUploadFiles } from "@xixixao/uploadstuff/react";
import { useToast } from "@/components/ui/use-toast";

const useGeneratePodcast = (props: GeneratePodcastProps) => {
  //Logic for podcast generation
  const { setAudio, voiceType, voicePrompt, setAudioStorageId } = props;
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const generateUploadUrl = useMutation(api.files.generateUploadUrl);
  const { startUpload } = useUploadFiles(generateUploadUrl);
  const getPodcastAudio = useAction(api.openai.generateAudioAction);
  const getAudioUrl = useMutation(api.podcasts.getUrl);
  const { toast } = useToast();

  const generatePodcast = async () => {
    setIsGenerating(true);
    setAudio("");

    if (!voicePrompt || !voiceType) {
      // todo: show error messages
      toast({
        variant: "destructive",
        title: "Please provide a voice Prompt/ voice type to generate audio",
        description: "There was a problem with your request.",
      });
      return setIsGenerating(false);
    }

    try {
      const response = await getPodcastAudio({
        voice: voiceType!,
        input: voicePrompt,
      });
      console.log(response);
      const blob = new Blob([response], { type: "audio/mpeg" });
      const fileName = `podcast-${uuidv4()}.mp3`;
      const file = new File([blob], fileName, { type: "audio/mpeg" });
      //
      const uploaded = await startUpload([file]);
      const storageId = (uploaded[0].response as any).storageId;
      setAudioStorageId(storageId);
      const audioUrl = await getAudioUrl({ storageId });
      setAudio(audioUrl!);
      setIsGenerating(false);
      toast({
        title: "Podcast generated successfully",
      });
    } catch (error) {
      console.log("There is an error generating podcast", error);
      setIsGenerating(false);
      // todo: show error messages
      toast({
        variant: "destructive",
        title: `Error Generating Podcast, ${error}`,
        description: "There was a problem with your request.",
        className: "bg-black-1",
      });
    }
  };
  return { generatePodcast, isGenerating };
};

const GeneratePodcast = (props: GeneratePodcastProps) => {
  const { isGenerating, generatePodcast } = useGeneratePodcast(props);

  const {
    setAudioStorageId,
    setAudio,
    voiceType,
    audio,
    voicePrompt,
    setVoicePrompt,
    setAudioDuration,
  } = props;
  return (
    <div className="gap-2.5 flex flex-col">
      <div className="gap-2.5 flex flex-col">
        <Label className="text-16 font-bold text-white-1">
          AI Prompt to Generate Audio
        </Label>
        <Textarea
          placeholder="Enter AI prompt to generate Audio"
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
          onClick={generatePodcast}
        >
          {isGenerating ? (
            <>
              Generating
              <Loader className="animate-spin ml-2" size={20} />
            </>
          ) : (
            "Generate"
          )}
        </Button>
        {audio && (
          <audio
            src={audio}
            autoPlay
            className="mt-5"
            onLoadedMetadata={({ currentTarget }) =>
              setAudioDuration(currentTarget.duration)
            }
          />
        )}
      </div>
    </div>
  );
};
export default GeneratePodcast;
