import PodcastCard from "@/components/PodcastCard";
// import { fetchTrendingPodcasts, fetchPopularePodcasts } from "@/lib/data";

export default async function PodcastGrid() {
  // let items = [];

  // if (type === "trendingPodcasts") {
  //   items = await fetchTrendingPodcasts();
  // } else if (type === "popularePodcasts") {
  //   items = await fetchPopularePodcasts();
  // }

  return (
    <div className="podcast_grid">
      {/* {items?.map((item) => (
        <PodcastCard item={item} key={item.id} />
      ))} */}
    </div>
  );
}
