import PodcastCard from "@/components/PodcastCard";
import Image from "next/image";
import EmptyState from "@/components/EmptyState";
// import { fetchPodcastById, fetchAuthorById } from "@/lib/data";
// import PodcastDetailPlayer from "@/components/PodcastDetailPlayer";
import { Suspense } from "react";
import { DetailPlayerSkeleton } from "@/components/skeletons";
import { PodcastDetailsProps } from "@/types";


export default async function PodcastDetails({ id }: PodcastDetailsProps) {
  // const id = params.id;
  // const podcast = await fetchPodcastById(id);
  // TODO: get from data
  const similarPodcasts = null;

  return (
    <section className="flex w-full flex-col">
      <header className="mt-9 flex items-center justify-between">
        <figure className="flex gap-3">
          <Image
            src="/icons/headphone.svg"
            width={24}
            height={24}
            alt="headphone"
          />
          {/* <h2 className="text-16 font-bold text-white-1">{podcast?.views}</h2> */}
        </figure>
      </header>
      {/*       
      <Suspense fallback={<DetailPlayerSkeleton />}>
        <PodcastDetailPlayer
          img_url={podcast?.img_url}
          title={podcast?.title}
          author_id={podcast?.author_id}
        />
      </Suspense>

      <p className="text-white-2 text-16 pb-8 pt-[45px] font-medium max-md:text-center">
        {podcast?.description}
      </p>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-18 font-bold text-white-1">Transcription</h1>
          <p className="text-16 font-medium text-white-2">
            {podcast?.transcription}
          </p>
        </div>
      </div>
      <section className="mt-8 flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Similar Podcasts</h1>

        {similarPodcasts && similarPodcasts.length > 0 ? (
          <div className="podcast_grid">
            {similarPodcasts?.map((item) => (
              <PodcastCard item={item} key={item.id} />
            ))}
          </div>
        ) : (
          <>
            <EmptyState
              title="No similar podcasts found"
              buttonLink="/explore"
              buttonText="Discover more podcasts"
            />
          </>
        )}
      </section> */}
    </section>
  );
}
