import { HiHome, HiMicrophone } from "react-icons/hi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { RiPlayListFill } from "react-icons/ri";

export const sidebarLinks = [
  {
    icon: HiHome,
    route: "/home",
    label: "Home",
  },
  {
    icon: HiMagnifyingGlass,
    route: "/discover",
    label: "Discover",
  },
  {
    icon: HiMicrophone,
    route: "/create-podcast",
    label: "Create Podcast",
  },
  {
    icon: RiPlayListFill,
    route: "/my-playlist",
    label: "My playlist",
  },
];

export const sidebarLinks1 = [
  {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/icons/discover.svg",
    route: "/discover",
    label: "Discover",
  },
  {
    imgURL: "/icons/microphone.svg",
    route: "/create-podcast",
    label: "Create Podcast",
  },
];

export const voiceDetails = [
  {
    id: 1,
    name: "alloy",
  },
  {
    id: 2,
    name: "echo",
  },
  {
    id: 3,
    name: "fable",
  },
  {
    id: 4,
    name: "onyx",
  },
  {
    id: 5,
    name: "nova",
  },
  {
    id: 6,
    name: "shimmer",
  },
];
