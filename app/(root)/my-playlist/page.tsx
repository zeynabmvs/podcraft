"use client";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import PodcastRowItem from "@/components/podcast/PodcastRowItem";
import { MultiplePodcastRowsSkeleton } from "@/components/skeleton/index";
import { FaPlay } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useAudio } from "@/providers/AudioProvider";

const Page = () => {
  const clerkData = useUser();
  const [currentIndex, setCurrentIndex] = useState(-1); // Track the current playing podcast
  const { setAudio, status } = useAudio(); // Access audio context

  const user = useQuery(api.users.getUserById, {
    clerkId: clerkData?.user?.id || "",
  });

  const playlistPodcasts = useQuery(api.podcasts.getPodcastsByIds, {
    podcastIds: user?.playlist || [],
  });

  const handlePlayAll = () => {
    setCurrentIndex(0); // Start from the first podcast
  };

  useEffect(() => {
    if (status === "ended") {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [status]);

  useEffect(() => {
    if (playlistPodcasts && playlistPodcasts?.length >= currentIndex) {
      const currentPodcast = playlistPodcasts[currentIndex];

      if (currentPodcast) {
        setAudio({
          title: currentPodcast.podcastTitle!,
          audioUrl: currentPodcast.audioUrl!,
          author: currentPodcast.author!,
          imageUrl: currentPodcast.imageUrl!,
          podcastId: currentPodcast._id!,
        });
      }
    }
  }, [currentIndex, playlistPodcasts, setAudio]);

  return (
    <section className="pt-9">
      <header className="flex gap-2 items-center">
        <h1 className="text-20 font-bold text-white-1 mr-2">My Playlist</h1>
        {playlistPodcasts && playlistPodcasts?.length > 0 && (
          <FaPlay
            className="cursor-pointer"
            size={18}
            onClick={handlePlayAll}
          />
        )}
      </header>

      {
        <div>
          {user && user.playlist && playlistPodcasts ? (
            playlistPodcasts?.map(
              (
                {
                  _id,
                  podcastTitle,
                  podcastDescription,
                  imageUrl,
                  views,
                  audioDuration,
                  audioUrl,
                  author,
                },
                index
              ) => (
                <PodcastRowItem
                  key={_id}
                  imgUrl={imageUrl as string}
                  title={podcastTitle}
                  description={podcastDescription}
                  podcastId={_id}
                  views={views}
                  audioDuration={audioDuration}
                  index={index}
                  audioUrl={audioUrl as string}
                  author={author}
                />
              )
            )
          ) : (
            <MultiplePodcastRowsSkeleton count={5} />
          )}
        </div>
      }
    </section>
  );
};

export default Page;
