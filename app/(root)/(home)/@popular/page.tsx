"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Header from "@/components/Header";
import PodcastRowItem from "@/components/PodcastRowItem";
import { MultiplePodcastRowsSkeleton } from "@/components/skeletons";

function PopularPodcasts() {
  const podcasts = useQuery(api.podcasts.getTrendingPodcasts);
  return (
    <section>
      <Header
        headerTitle="Popular Podcasts"
        titleClassName="text-20 font-bold text-white-1"
      />

      {!podcasts ? (
        <MultiplePodcastRowsSkeleton count={4} />
      ) : (
        <div>
          {podcasts?.slice(0, 4).map(
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
      )}
    </section>
  );
}

export default PopularPodcasts;
