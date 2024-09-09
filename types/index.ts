/* eslint-disable no-unused-vars */
import { Id } from "@/convex/_generated/dataModel";

export interface EmptyStateProps {
  title: string;
  search?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

export interface PodcastCardProps {
    imgUrl: string;
    title: string;
    description: string;
    podcastId: Id<"podcasts">;
}

export interface PodcastDetailsProps {
  id: Id<"podcasts">;
}