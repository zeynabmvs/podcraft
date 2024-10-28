"use client";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import PodcastRowItem from "@/components/PodcastRowItem";
import { MultiplePodcastRowsSkeleton } from "@/components/skeletons";
import { FaPlay } from "react-icons/fa";
const page = () => {
  const clerkData = useUser();

  const user = useQuery(api.users.getUserById, {
    clerkId: clerkData?.user?.id || "",
  });

  const playlistPodcasts = useQuery(api.podcasts.getPodcastsByIds, {
    podcastIds: user?.playlist || [],
  });

  const playAll = () => {};

  return (
    <section className="pt-9">
      <header>
        <h1 className="text-20 font-bold text-white-1">My Playlist</h1>
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

export default page;
