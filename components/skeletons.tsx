import { Skeleton } from "@/components/ui/skeleton";

export function CardSkeleton() {
  return (
    <div>
      <Skeleton className=" size-[174px] 2xl:size-[200px] rounded-xl" />
      <div className="flex flex-col mt-2">
        <Skeleton className=" h-4 rounded w-3/4 mb-2" />
        <Skeleton className=" h-4 rounded w-5/6" />
      </div>
    </div>
  );
}

export const GridSkeleton = () => {
  return (
    <div className="podcast_grid">
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
