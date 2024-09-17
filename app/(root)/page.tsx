"use client";

import PodcastCard from "@/components/PodcastCard";
import LoaderSpinner from "@/components/LoaderSpinner";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Home() {
  const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);

  if (!trendingPodcasts) return <LoaderSpinner />;

  return (
    <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>
        <div className="podcast_grid">
          {trendingPodcasts?.map(
            ({ _id, podcastTitle, podcastDescription, imageUrl }) => (
              <PodcastCard
                key={_id}
                imgUrl={imageUrl as string}
                title={podcastTitle}
                description={podcastDescription}
                podcastId={_id}
              />
            )
          )}
        </div>
      </section>
    </div>
  );
}
