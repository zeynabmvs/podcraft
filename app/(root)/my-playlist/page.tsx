"use client";
import { useUser } from "@clerk/nextjs";
import LoaderSpinner from "@/components/LoaderSpinner";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import PodcastRowItem from "@/components/PodcastRowItem";

const page = () => {
  const clerkData = useUser();

  const user = useQuery(api.users.getUserById, {
    clerkId: clerkData?.user?.id || "",
  });

  const playlistPodcasts = useQuery(api.podcasts.getPodcastsByIds, {
    podcastIds: user?.playlist || [],
  });

  if (!user || !user.playlist || !playlistPodcasts) return <LoaderSpinner />;

  return (
    <section className="pt-9">
      <h1 className="text-20 font-bold text-white-1">My Playlist</h1>

      {
        <div>
          {playlistPodcasts?.map(
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
          )}
        </div>
      }
    </section>
  );
};

export default page;
