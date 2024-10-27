"use client";

import PodcastCard from "@/components/PodcastCard";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Header from "@/components/Header";
import PodcastRowItem from "@/components/PodcastRowItem";
import { RowSkeleton , LatestPodcastsSkeleton} from "@/components/skeletons";

export default function Home() {
  const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);
  const latestPodcasts = useQuery(api.podcasts.getLatestPodcasts);

  return (
    <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
      {/* Trending podcasts */}
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>
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

      {/* Latest podcasts */}
      <section>
        <Header
          headerTitle="Latest Podcasts"
          titleClassName="text-20 font-bold text-white-1"
        />

        {
          !latestPodcasts ? <LatestPodcastsSkeleton /> :         <div>
          {latestPodcasts?.map(
            (
              {
                _id,
                podcastTitle,
                podcastDescription,
                imageUrl,
                views,
                audioDuration,
                audioUrl,
                author
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

      {/* popular podcasts */}
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Popular Podcasts</h1>

        {!trendingPodcasts ? (
          <RowSkeleton />
        ) : (
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
        )}
      </section>
    </div>
  );
}
