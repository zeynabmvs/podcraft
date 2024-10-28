import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useToast } from "@/hooks/use-toast";
import { Id } from "@/convex/_generated/dataModel";

export const usePlaylist = () => {
  const updatePlaylist = useMutation(api.users.updateUserPlaylist);
  const clerkData = useUser();
  const { toast } = useToast();

  const addToPlaylist = async (podcastId: Id<"podcasts">) => {
    if (clerkData.isSignedIn) {
      try {
        const result = await updatePlaylist({
          clerkId: clerkData?.user?.id,
          podcastId,
        });
        toast({
          title: result.message,
        });
      } catch (error) {
        console.error("Could not update playlist!");
      }
    } else {
      toast({
        title: "You sould sign in first",
      });
    }
  };

  // Placeholder for remove function you will add later
  const removeFromPlaylist = async (podcastId: string) => {
    //TODO: Logic for removing from the playlist (if needed)
  };

  return { addToPlaylist, removeFromPlaylist };
};
