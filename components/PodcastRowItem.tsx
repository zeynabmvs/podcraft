import { PodcastRowItemProps } from "@/types/index";
import Image from "next/image";
import { formatTime } from "@/lib/formatTime";
import { useRouter } from "next/navigation";
import { HiClock, HiPlay } from "react-icons/hi";
import { useAudio } from "@/providers/AudioProvider";
import { HiMiniPlay } from "react-icons/hi2";

const PodcastRowItem = ({
  imgUrl,
  title,
  description,
  podcastId,
  views,
  audioDuration,
  index,
  audioUrl,
  author,
}: PodcastRowItemProps) => {
  const router = useRouter();
  const { audio, setAudio } = useAudio();

  const handleViews = () => {
    // increase views

    router.push(`/podcasts/${podcastId}`, {
      scroll: true,
    });
  };

  return (
    <div className="cursor-pointer border-b border-b-black-4 last-of-type:border-none">
      <div className="flex items-center justify-between py-5 -pl-4">
        <div className="flex gap-3 items-center w-full" onClick={handleViews}>
          <Image
            src={imgUrl}
            width={50}
            height={54}
            alt={title}
            className="rounded-md"
          />

          <div className="flex flex-col justify-between">
            <p>{title}</p>

            <div className="flex gap-3 text-sm text-gray-400">
              <div className="flex gap-1 items-center">
                <Image
                  src="/icons/headphone.svg"
                  width={14}
                  height={14}
                  alt="views"
                />
                {views}
              </div>
              <div className="flex gap-1 items-center">
                <HiClock size={14} />
                {formatTime(audioDuration)}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex gap-12 justify-end">
          <HiPlay
            size={28}
            onClick={() =>
              setAudio({
                title: title,
                audioUrl: audioUrl,
                author: author,
                imageUrl: imgUrl,
                podcastId: podcastId,
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PodcastRowItem;
