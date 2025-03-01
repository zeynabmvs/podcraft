"use client";

import PodcastCard from "@/components/podcast/PodcastCard";
import { usePaginatedQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { RowSkeleton } from "@/components/skeleton/index";
import { Button } from "@/components/ui/button";

const PER_PAGE = 4;

// gets all podcasts with pagination, order based on latest
function AllPodcasts() {
  const {
    results: latestPodcasts,
    status,
    isLoading,
    loadMore,
  } = usePaginatedQuery(
    api.podcasts.getAllPodcastsPaginated,
    {},
    { initialNumItems: 4 }
  );

  return (
    <>
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Latest Podcasts</h1>
        {
          <div className="podcast_grid">
            {latestPodcasts?.map(
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
        }
        {(!latestPodcasts || isLoading) && <RowSkeleton />}

        {status !== "Exhausted" && (
          <Button
            className="bg-white-4 hover:bg-white-3 transition-colors"
            onClick={() => loadMore(PER_PAGE)}
            disabled={status !== "CanLoadMore"}
          >
            Load More
          </Button>
        )}
      </section>
    </>
  );
}

export default AllPodcasts;
