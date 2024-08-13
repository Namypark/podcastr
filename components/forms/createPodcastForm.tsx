"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { Id } from "@/convex/_generated/dataModel";
import GeneratePodcast from "../GeneratePodcast";
import { GeneratePodcastProps, VoiceType } from "@/types";
import GenerateThumbnail from "../GenerateThumbnail";
import { toast } from "../ui/use-toast";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";

export const CreatePodcastForm = () => {
  const voiceCategories = ["alloy", "shimmer", "nova", "echo", "onyx"];
  const [imagePrompt, setImagePrompt] = useState<string>("");
  const [imageStorageId, setImageStorageId] = useState<Id<"_storage"> | null>(
    null
  );
  const [imageUrl, setImageUrl] = useState<string>("");

  const [audioPrompt, setAudioPrompt] = useState<string>("");
  const [audioUrl, setAudioUrl] = useState<string>("");

  const [audioStorageId, setAudioStorageId] = useState<Id<"_storage"> | null>(
    null
  );
  const [audioDuration, setAudioDuration] = useState<number>(0);
  const [voicePrompt, setVoicePrompt] = useState<string>("");
  const [voiceType, setVoiceType] = useState<VoiceType>();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const router = useRouter();
  const createPodcast = useMutation(api.podcasts.createPodcast);
  // ...
  const formSchema = z.object({
    podcastTitle: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    category: z.string({
      required_error: "Please select a category",
    }),
    podcastDescription: z.string().min(10, {
      message: "Description must be at least 10 characters.",
    }),
    audioString: z.string().min(2, {
      message: "Audio Prompt must be at least 2 characters.",
    }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      podcastTitle: "",

      podcastDescription: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(data: z.infer<typeof formSchema>) {
    // Do something with the form data.
    // ✅ This will be type-safe and validated.
    try {
      setIsSubmitting(true);
      if (!audioUrl || !imageUrl || !voiceType) {
        toast({
          title: "Please generate audio and image ",
        });
        setIsSubmitting(false);
        throw new Error("please generate audio image");
      }
      await createPodcast({
        podcastTitle: data.podcastTitle,
        podcastDescription: data.podcastDescription,
        audioUrl,
        imageUrl,
        voiceType,
        imagePrompt,
        voicePrompt,
        views: 0,
        audioDuration,
        audioStorageId: audioStorageId!,
        imageStorageId: imageStorageId!,
      });
      router.push("/");
    } catch (error) {
      toast({
        title: "Error",
        variant: "destructive",
      });
      console.log(error);
    }
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-12 flex w-full flex-col"
      >
        <div className="flex flex-col gap-[30px] border-b border-black-5 pb-10">
          <FormField
            control={form.control}
            name="podcastTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Podcast Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your title"
                    {...field}
                    className="focus:ring-offset-orange-1 input-class"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex-col flex gap-2.5 ">
            <FormLabel className="text-16 text-white-1 font-bold">
              Select AI Voice
            </FormLabel>
            <Select onValueChange={(value) => setVoiceType(value as VoiceType)}>
              <FormControl>
                <SelectTrigger
                  className={cn(
                    "text-16 w-full border-none bg-black-1 text-gray-1 focus:ring-offset-orange-1"
                  )}
                >
                  <SelectValue
                    placeholder="Select AI voice"
                    className="placeholder:text-gray-1"
                  />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="bg-black-1 font-bold text-white-1 text-16 border-none focus:ring-offset-orange-1">
                {voiceCategories.map((category: string) => (
                  <SelectItem
                    value={category}
                    key={category}
                    className="capitalize focus:bg-orange-1"
                  >
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
              {voiceType && (
                <audio
                  src={`/assets/${voiceType}.mp3`}
                  autoPlay
                  className="hidden"
                />
              )}
            </Select>
          </div>

          <FormField
            control={form.control}
            name="podcastDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Podcast Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about yourself"
                    className="resize-none input-class focus:ring-offset-orange-1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col pt-10"></div>

        <div className="w-full">
          <GeneratePodcast
            setAudioStorageId={setAudioStorageId}
            setAudio={setAudioUrl}
            voiceType={voiceType}
            audio={audioUrl}
            voicePrompt={voicePrompt}
            setVoicePrompt={setVoicePrompt}
            setAudioDuration={setAudioDuration}
          />
          <GenerateThumbnail
            setImage={setImageUrl}
            setImageStorageId={setImageStorageId}
            image={imageUrl}
            imagePrompt={imagePrompt}
            setImagePrompt={setImagePrompt}
          />
        </div>
        <div className="mt-6 w-full">
          <Button
            type="submit"
            className="text-16 w-full bg-orange-1 text-white-1 rounded-lg transition-all duration-500 hover:bg-black-1"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                submitting
                <Loader className="animate-spin mr-2" size={20} />
              </>
            ) : (
              "Submit & Publish Podcast"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};
