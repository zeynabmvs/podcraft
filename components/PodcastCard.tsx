import { PodcastCardProps } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

const PodcastCard = ({
  imgUrl,
  title,
  description,
  podcastId,
}: PodcastCardProps) => {
  const router = useRouter();
  const updateView = useMutation(api.podcasts.updatePodcastViews);

  const handleViews = async () => {
    router.push(`/podcasts/${podcastId}`, {
      scroll: true,
    });

    // increase views
    try {
      await updateView({
        podcastId: podcastId,
      });
    } catch (error) {
      console.log("could not update views!");
    }
  };

  return (
    <div className="cursor-pointer">
      <figure className="flex flex-col gap-2" onClick={handleViews}>
        <Image
          src={imgUrl}
          width={174}
          height={174}
          alt={title}
          className="h-auto w-auto max-w-full rounded-lg"
        />
        <div className="flex flex-col">
          <h1 className="text-16 truncate font-bold text-white-1">{title}</h1>
          <h2 className="text-12 truncate font-normal capitalize text-white-4">
            {description}
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
