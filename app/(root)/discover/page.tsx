"use client";

import EmptyState from "@/components/EmptyState";
import PodcastCard from "@/components/PodcastCard";
import Searchbar from "@/components/Searchbar";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { GridSkeleton } from "@/components/skeletons";
import { useEffect } from "react";

const Discover = ({
  searchParams: { search },
}: {
  searchParams: { search: string };
}) => {

  const podcastsData = search
    ? useQuery(api.podcasts.getPodcastBySearch, { search })
    : useQuery(api.podcasts.getTrendingPodcasts);

  return (
    <div className="flex flex-col gap-9">
      <Searchbar />

      <div className="flex flex-col gap-9">
        <h1 className="text-20 font-bold text-white-1">
          {!search ? (
            <span className="text-white-2">Trending now</span>
          ) : (
            <span className="text-white-2">Search results for {search}</span>
          )}
        </h1>
        {podcastsData ? (
          <>
            {podcastsData.length > 0 ? (
              <div className="podcast_grid">
                {podcastsData?.map(
                  ({ _id, podcastTitle, podcastDescription, imageUrl }) => (
                    <PodcastCard
                      key={_id}
                      imgUrl={imageUrl!}
                      title={podcastTitle}
                      description={podcastDescription}
                      podcastId={_id}
                    />
                  )
                )}
              </div>
            ) : (
              <EmptyState title="No results found" />
            )}
          </>
        ) : (
          <GridSkeleton />
        )}
      </div>
    </div>
  );
};

export default Discover;
