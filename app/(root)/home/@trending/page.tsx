"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { RowSkeleton } from "@/components/skeleton/index";
import PodcastCard from "@/components/podcast/PodcastCard";

function TrendingPodcasts() {
  const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);

  return (
    <section className="flex flex-col gap-5">
      <h1 className="text-20 font-bold text-white-1">Trending Now</h1>
      {!trendingPodcasts ? (
        <RowSkeleton />
      ) : (
        <div className="podcast_grid">
          {trendingPodcasts
            ?.slice(0, 4)
            .map(({ _id, podcastTitle, podcastDescription, imageUrl }) => (
              <PodcastCard
                key={_id}
                imgUrl={imageUrl as string}
                title={podcastTitle}
                description={podcastDescription}
                podcastId={_id}
              />
            ))}
        </div>
      )}
    </section>
  );
}

export default TrendingPodcasts;
