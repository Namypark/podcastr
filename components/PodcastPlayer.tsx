"use client";
import { cn, formatTime } from "@/lib/utils";
import { useAudio } from "@/providers/AudioProvider";
import { Progress } from "@/components/ui/progress";
import * as Slider from "@radix-ui/react-slider";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDebounce } from "@/lib/useDebounce";

const PodcastPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const { audio } = useAudio();

  const debouncedAudioUrl = useDebounce(audio?.audioUrl, 2000);
  //   console.log(audio);

  const togglePlayPause = () => {
    if (audioRef.current?.paused) {
      audioRef.current?.play();
      setIsPlaying(true);
    } else {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted((prev) => !prev);
    }
  };

  const forward = () => {
    if (
      audioRef.current &&
      audioRef.current.currentTime &&
      audioRef.current.duration &&
      audioRef.current.currentTime + 5 < audioRef.current.duration
    ) {
      audioRef.current.currentTime += 5;
    }
  };
  const rewind = () => {
    if (audioRef.current && audioRef.current.currentTime - 5 > 0) {
      audioRef.current.currentTime -= 5;
    } else if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    const updateCurrentTime = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    };
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener("timeupdate", updateCurrentTime);

      return () => {
        audioElement.removeEventListener("timeupdate", updateCurrentTime);
      };
    }
  }, []);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (debouncedAudioUrl) {
      if (audioElement) {
        audioElement
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Error playing audio", error);
            setIsPlaying(false);
          });
      }
    } else {
      audioElement?.pause();
      setIsPlaying(true);
    }
  }, [debouncedAudioUrl]);

  // Adjust the volume based on slider
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);
  const handleMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };
  const handleAudioEnded = () => {
    setIsPlaying(false);
  };
  return (
    <div
      className={cn(
        "sticky bottom-0 left-0 flex size-full flex-col rounded-xxl",
        {
          hidden: !audio?.audioUrl || audio?.audioUrl === "",
        }
      )}
    >
      <Progress
        value={(currentTime / duration) * 100}
        max={duration}
        className="w-full h-[4px]"
      />
      <section className="flex  h-[112px] items-center gap-4 justify-between  glassmorphism-black max-md:hidden ">
        <audio
          ref={audioRef}
          src={audio?.audioUrl}
          className="hidden"
          onLoadedData={handleMetadata}
          onEnded={handleAudioEnded}
        />
        <div className="flex items-center gap-3">
          <Link href={`podcast/$${audio?.podcastId}`}>
            <Image
              src={audio?.imageUrl!}
              alt="now-playing-image"
              width={64}
              height={64}
              className="aspect-square rounded-xl ml-1"
            />
          </Link>

          <div className="flex flex-col gap-1 w-[160px]">
            <h2 className="text-14 font-semibold text-white-1 truncate ">
              {audio?.title}
            </h2>
            <p className="text-12 font-normal text-gray-1">{audio?.author}</p>
          </div>
        </div>
        <div className="flex gap-3 items-center cursor-pointer">
          <div className="flex-center items-center gap-1.5">
            <Image
              src={`/assets/icons/reverse.svg`}
              alt="shuffle"
              width={24}
              height={24}
              onClick={rewind}
            />
            <span className="text-white-2 text-12 font-normal">-5</span>
          </div>
          <Image
            src={`/assets/icons/${isPlaying ? "pause" : "play"}.svg`}
            alt="shuffle"
            width={24}
            height={24}
            onClick={togglePlayPause}
          />{" "}
          <div className="flex-center items-center gap-1.5">
            <span className="text-white-2 text-12 font-normal">+5</span>
            <Image
              src={`/assets/icons/forward.svg`}
              alt="shuffle"
              width={24}
              height={24}
              onClick={forward}
            />
          </div>
        </div>
        <div className="flex items-center justify-center mr-6 space-x-2">
          <span className="text-12 font-normal text-gray-1">
            {formatTime(audioRef.current?.currentTime!)}/{formatTime(duration)}
          </span>

          <Image
            src={`/assets/icons/${isMuted ? "Unmute" : "mute"}.svg`}
            width={24}
            height={24}
            alt="mute"
            onClick={toggleMute}
            className="cursor-pointer"
          />

          <Slider.Root
            className="relative flex items-center select-none touch-none w-[200px] h-5"
            defaultValue={[volume]}
            max={100}
            step={1}
            onValueChange={(value) => setVolume(value[0])}
          >
            <Slider.Track className="bg-blackA7 relative grow rounded-full h-[3px]">
              <Slider.Range className="absolute bg-white-1 rounded-full h-full" />
            </Slider.Track>
            <Slider.Thumb
              className="block w-5 h-5 bg-white-1 shadow-[0_2px_10px] shadow-blackA4 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA5"
              aria-label="Volume"
            />
          </Slider.Root>
        </div>
      </section>
    </div>
  );
};

export default PodcastPlayer;
