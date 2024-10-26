import { PodcastRowItemProps } from "@/types/index";
import Image from "next/image";
import { formatTime } from "@/lib/formatTime";
import { useRouter } from "next/navigation";
import { HiClock } from "react-icons/hi";

const PodcastRowItem = ({
  imgUrl,
  title,
  description,
  podcastId,
  views,
  audioDuration,
  index,
}: PodcastRowItemProps) => {
  const router = useRouter();

  const handleViews = () => {
    // increase views

    router.push(`/podcasts/${podcastId}`, {
      scroll: true,
    });
  };

  return (
    <div className="cursor-pointer border-b border-b-black-4 last-of-type:border-none" onClick={handleViews} >
      <div className="flex items-center justify-between py-5">
        <div className="flex gap-3 items-center w-full">
          {/* {index + 1} */}
          <Image
            src={imgUrl}
            width={50}
            height={54}
            alt={title}
            className="rounded-md"
          />

          <p>{title}</p>
        </div>

        <div className="w-full flex gap-12 justify-end">
          <div className="flex gap-3">
            <Image
              src="/icons/headphone.svg"
              width={24}
              height={24}
              alt="views"
            />
            {views}
          </div>
          <div className="flex gap-3">
            <HiClock size={24} />
            {formatTime(audioDuration)}
          </div>
          <Image src="/icons/dots.svg" width={15} height={2} alt="detail" />
        </div>
      </div>
    </div>
  );
};

export default PodcastRowItem;
