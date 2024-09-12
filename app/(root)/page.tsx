"use client";

import { Suspense } from "react";
import { GridSkeleton } from "@/components/skeletons";
import PodcastGrid from "@/components/PodcastGrid";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Home() {
  // const tasks = useQuery(api.tasks.get);

  return (
    <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
      <section className="flex flex-col gap-5">
        <div className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
          {/* {tasks?.map(({ _id, text }) => (
            <div key={_id}>{text}</div>
          ))} */}
        </div>

        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>

        {/* <Suspense fallback={<GridSkeleton />}>
          <PodcastGrid type="trendingPodcasts" />
        </Suspense> */}
      </section>

      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Populare Podcasts</h1>
        {/* 
        <Suspense fallback={<GridSkeleton />}>
          <PodcastGrid type="popularePodcasts" />
        </Suspense> */}
      </section>
    </div>
  );
}
