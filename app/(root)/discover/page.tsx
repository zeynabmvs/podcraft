import PodcastCard from "@/components/PodcastCard";
import Searchbar from "@/components/Searchbar";
import EmptyState from "@/components/EmptyState";
// import { fetchExplorePodcasts } from "@/lib/data";

export default function Discover({ search }: {search: boolean}) {
  // const podcastsData = await fetchExplorePodcasts();

  return (
    <div className="flex flex-col gap-9">
      <Searchbar />
      <div className="flex flex-col gap-9">
        <h1 className="text-20 font-bold text-white-1">
          {!search ? "Discover Trending Podcasts" : "Search results for "}
          {search && <span className="text-white-2">{search}</span>}
        </h1>
        {/* {podcastsData ? (
          <>
            {podcastsData.length > 0 ? (
              <div className="podcast_grid">
                {podcastsData?.map((item) => (
                  <PodcastCard item={item} key={item.id} />
                ))}
              </div>
            ) : (
              <EmptyState title="No results found" />
            )}
          </>
        ) : (
          "loading"
          //   <LoaderSpinner />
        )} */}
      </div>
    </div>
  );
}
