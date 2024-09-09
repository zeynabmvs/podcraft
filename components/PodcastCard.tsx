import Image from "next/image";
import Link from "next/link";
import { PodcastCardProps } from "@/types/index";

const PodcastCard = ({
  podcastId,
  title,
  imgUrl,
  description,
}: PodcastCardProps) => {
  return (
    <Link href={`/podcasts/${podcastId}`}>
      <div className="cursor-pointer">
        <Image
          src={imgUrl}
          width={174}
          height={174}
          alt={title}
          className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"
        />
        <div className="flex flex-col">
          <h1 className="text-16 truncate font-bold text-white-1">{title}</h1>
          <p className="text-12 truncate font-normal capitalize text-white-4">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PodcastCard;
