import { v } from "convex/values";
import { action } from "./_generated/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
export const generateAudioAction = action({
  args: {
    input: v.string(),
    voice: v.union(
      v.literal("alloy"),
      v.literal("echo"),
      v.literal("fable"),
      v.literal("onyx"),
      v.literal("nova"),
      v.literal("shimmer")
    ),
  },
  handler: async (_, { voice, input }) => {
    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice: voice,
      input: input,
    });
    console.log(openai);
    const buffer = Buffer.from(await mp3.arrayBuffer());
    return buffer;
  },
});

export const generateThumbnailAction = action({
  args: { prompt: v.string() },
  handler: async (_, { prompt }) => {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      quality: "standard",
    });
    const imageUrl = response.data[0].url;
    if (!imageUrl) throw new Error("Error generating thumbnail");
    const imageResponse = await fetch(imageUrl);
    const buffer = await imageResponse.arrayBuffer();

    return buffer;
  },
});
