import { PodcastCardProps } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { RiPlayListAddFill } from "react-icons/ri";
import { useUser } from "@clerk/nextjs";
import { useToast } from "@/hooks/use-toast";

const PodcastCard = ({
  imgUrl,
  title,
  description,
  podcastId,
}: PodcastCardProps) => {
  const router = useRouter();
  const updateView = useMutation(api.podcasts.updatePodcastViews);
  const updatePlaylist = useMutation(api.users.updateUserPlaylist);
  const clerkData = useUser();
  const { toast } = useToast();

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

  const addToPlaylist = async () => {
    console.log(clerkData);

    if (clerkData.isSignedIn) {
      try {
        const result = await updatePlaylist({
          clerkId: clerkData?.user?.id,
          podcastId: podcastId,
        });
        toast({ title: result.message });
      } catch (error) {
        console.log("could not update playlist!");
      }
    } else {
      toast({
        title: "First sign in",
      });
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
          className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"
        />
        <div className="flex flex-col">
          <h1 className="text-16 truncate font-bold text-white-1">{title}</h1>
          <h2 className="text-12 truncate font-normal capitalize text-white-4">
            {description}
          </h2>
        </div>
      </figure>
      <RiPlayListAddFill onClick={addToPlaylist} />
    </div>
  );
};

export default PodcastCard;
