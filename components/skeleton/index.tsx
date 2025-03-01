import { Skeleton } from "@/components/ui/skeleton";

export function CardSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      {/* TODO: width of image skeleton should be auto to parent's width */}
      <Skeleton className="size-[157px] 2xl:size-[200px] rounded-lg" />
      <div className="flex flex-col">
        <Skeleton className=" h-4 rounded w-3/4 mb-2" />
        <Skeleton className=" h-4 rounded w-5/6" />
      </div>
    </div>
  );
}

export const RowSkeleton = () => {
  return (
    <div className="podcast_grid">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
};

export const GridSkeleton = () => {
  return (
    <div className="podcast_grid">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
};

export const DetailPlayerSkeleton = () => {
  return (
    <div className="mt-6 flex w-full justify-between max-md:justify-center">
      <div className="flex flex-col gap-8 max-md:items-center md:flex-row">
        {/* TODO: width is not accurate */}
        <Skeleton className="size-[250px] rounded-lg" />
        <div className="flex w-full flex-col gap-5 max-md:items-center md:gap-9">
          <div className="flex flex-col gap-2 max-md:items-center">
            <Skeleton className=" w-[250px] h-8" />
            <div className="flex items-center gap-2">
              <Skeleton className="size-[30px] rounded-full " />
              <Skeleton className=" h-4 w-[120px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PodcastRowItemSkeleton = () => {
  return (
    <div className="cursor-pointer border-b border-b-black-4 last-of-type:border-none">
      <div className="flex items-center justify-between py-5">
        {/* Left Section */}
        <div className="flex gap-3 items-center w-full">
          <Skeleton className="h-[50px] w-[54px] rounded-md" />{" "}
          {/* Placeholder for image */}
          <Skeleton className="h-6 w-48" /> {/* Placeholder for title */}
        </div>

        {/* Right Section */}
        <div className="w-full flex gap-12 justify-end">
          <Skeleton className="h-6 w-6 rounded-full" />{" "}
          {/* Placeholder for play */}
        </div>
      </div>
    </div>
  );
};

export const MultiplePodcastRowsSkeleton = ({ count }: { count: number }) => {
  const skeletons = [];

  for (let i = 0; i < count; i++) {
    skeletons.push(<PodcastRowItemSkeleton key={i} />);
  }
  return <>{skeletons}</>;
};
