"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { formatTime } from "@/lib/formatTime";
import { cn } from "@/lib/utils";
import { useAudio } from "@/providers/AudioProvider";
import { HiOutlineXMark, HiPauseCircle, HiPlayCircle } from "react-icons/hi2";
import { Progress } from "@/components/ui/progress";
import { FaBackward, FaForward } from "react-icons/fa";

const SKIP_TIME = 5;

const PodcastPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const { audio, setAudio, setStatus } = useAudio();

  const togglePlayPause = () => {
    const audioElement = audioRef.current;

    if (audioElement) {
      if (audioElement.paused) {
        audioElement.play();
        setIsPlaying(true);
      } else {
        audioElement.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted((prev) => !prev);
    }
  };

  // useEffect to keep track of audio's current time
  useEffect(() => {
    const audioElement = audioRef.current;

    const updateCurrentTime = () =>
      setCurrentTime(audioElement?.currentTime || 0);

    if (audioElement) {
      audioElement.addEventListener("timeupdate", updateCurrentTime);

      return () => {
        audioElement.removeEventListener("timeupdate", updateCurrentTime);
      };
    }
  }, []);

  // Automatically play the audio when a new `audio` object is provided
  useEffect(() => {
    const audioElement = audioRef.current;
    if (audio?.audioUrl) {
      if (audioElement) {
        audioElement.pause(); // Ensure it's paused before loading new audio
        audioElement.load(); // Reload the element to reset state

        audioElement.play().then(() => {
          setIsPlaying(true);
        });
      }
    } else {
      audioElement?.pause();
      setIsPlaying(true);
    }
  }, [audio]);

  useEffect(() => {
    if (isPlaying) {
      setStatus("playing");
    }
  }, [isPlaying]);

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setStatus("ended");
  };

  const closePodcastPlayer = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
    setAudio(undefined);
  };

  const skipTime = (seconds: number) => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    const newTime = audioElement.currentTime + seconds;
    audioElement.currentTime = Math.max(0, Math.min(newTime, duration));
  };

  return (
    <div
      className={cn("sticky bottom-0 left-0 flex size-full flex-col", {
        hidden: !audio?.audioUrl || audio?.audioUrl === "",
      })}
    >
      <section className="glassmorphism-black flex h-[85px] w-full items-center justify-between px-4 max-md:justify-center max-md:gap-5 md:px-12">
        <audio
          ref={audioRef}
          src={audio?.audioUrl}
          className="hidden"
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleAudioEnded}
        />
        <div className="flex items-center gap-4 max-md:hidden">
          <Link href={`/podcasts/${audio?.podcastId}`}>
            <Image
              src={audio?.imageUrl! || "/images/player1.png"}
              width={64}
              height={64}
              alt="player1"
              className="aspect-square rounded-xl"
            />
          </Link>
          <div className="flex w-[160px] flex-col">
            <h2 className="text-14 truncate font-semibold text-white-1">
              {audio?.title}
            </h2>
            <p className="text-12 font-normal text-white-2">{audio?.author}</p>
          </div>
        </div>
        <div className="flex-center cursor-pointer gap-3 md:gap-6">
          <div className="flex items-center gap-1.5">
            <FaBackward size={20} onClick={() => skipTime(-SKIP_TIME)} />
            <h2 className="text-12 font-bold text-white-4">-5</h2>
          </div>
          {isPlaying ? (
            <HiPauseCircle size="2.5rem" onClick={togglePlayPause} />
          ) : (
            <HiPlayCircle size="2.5rem" onClick={togglePlayPause} />
          )}
          <div className="flex items-center gap-1.5">
            <h2 className="text-12 font-bold text-white-4">+5</h2>
            <FaForward size={20} onClick={() => skipTime(SKIP_TIME)} />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-[250px]">
            <Progress
              value={(currentTime / duration) * 100}
              className="w-full"
              max={duration || 100}
            />
          </div>

          <h2 className="text-16 font-normal text-white-2 max-md:hidden">
            {formatTime(duration)}
          </h2>
          {/* <div className="flex"> */}
          <Image
            src={isMuted ? "/icons/unmute.svg" : "/icons/mute.svg"}
            width={24}
            height={24}
            alt="mute unmute"
            onClick={toggleMute}
            className="cursor-pointer"
          />
          {/* </div> */}
        </div>

        <HiOutlineXMark onClick={closePodcastPlayer} size="1.5rem" />
      </section>
    </div>
  );
};

export default PodcastPlayer;
