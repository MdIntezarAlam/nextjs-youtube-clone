import Image from "next/image";
import React from "react";
import { BiLike, BiSolidMoviePlay } from "react-icons/bi";
import { CiFlag1 } from "react-icons/ci";
import { FaShieldAlt, FaYoutube } from "react-icons/fa";
import { FaMusic } from "react-icons/fa6";
import { GoLightBulb, GoVideo } from "react-icons/go";
import { GrShop } from "react-icons/gr";
import { HiOutlineTrendingUp } from "react-icons/hi";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { IoIosSettings, IoMdHome, IoMdMusicalNote } from "react-icons/io";
import {
  IoGameControllerSharp,
  IoHelpCircleOutline,
  IoLogoYoutube,
  IoMenu,
} from "react-icons/io5";
import {
  MdExplore,
  MdHistory,
  MdOutlineCellTower,
  MdOutlineFeedback,
  MdOutlineOndemandVideo,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
  MdPodcasts,
  MdSubscriptions,
} from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { TfiCup } from "react-icons/tfi";

import { Separator } from "@/components/ui/separator";

const TopCard = () => {
  return (
    <div className="flex items-center gap-x-4 p-2 mb-5 cursor-pointer z-10">
      <IoMenu className="text-2xl" />
      <div className="flex items-center gap-x-1">
        <IoLogoYoutube className="text-destructive text-2xl " />
        <h1>YouTube</h1>
      </div>
    </div>
  );
};
const CardOne = () => {
  return (
    <>
      {cardData1.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-x-5 px-3 mx-2 py-2 hover:bg-border rounded-lg hover:bg-opacity-100 cursor-pointer"
        >
          {item.icons}
          <h1 className="text-sm font-normal">{item.title}</h1>
        </div>
      ))}
    </>
  );
};
const CardTwo = () => {
  return (
    <>
      {cardData2.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-x-5 px-3 py-2 mx-2 hover:bg-border rounded-lg hover:bg-opacity-100 cursor-pointer"
        >
          {item.icons}
          <h1 className="text-sm font-normal">{item.title}</h1>
        </div>
      ))}
    </>
  );
};

const CardThree = ({ Title }: any) => {
  return (
    <div>
      <h1 className="text-base text-primary-foreground my-2 px-3 mx-2">
        {Title}
      </h1>
      {cardData3.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-x-5 px-3 py-2 mx-2 hover:bg-border rounded-lg hover:bg-opacity-100 cursor-pointer"
        >
          <Image
            src={item.icons}
            width={30}
            height={30}
            alt="user"
            className="object-cover rounded-full w-7 h-7"
          />
          <h1 className="text-sm font-normal">{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

const CardFour = ({ Title }: any) => {
  return (
    <div>
      <h1 className="text-base text-primary-foreground my-2 px-3 mx-2">
        {Title}
      </h1>
      {cardData4.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-x-5 px-3 py-2 mx-2 hover:bg-border rounded-lg hover:bg-opacity-100 cursor-pointer"
        >
          {item.icons}
          <h1 className="text-sm font-normal">{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

const CardFive = ({ Title }: any) => {
  return (
    <div>
      <h1 className="text-base text-primary-foreground my-2 px-3 mx-2">
        {Title}
      </h1>
      {cardData5.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-x-5 px-3 py-2 mx-2 hover:bg-border rounded-lg hover:bg-opacity-100 cursor-pointer"
        >
          {item.icons}
          <h1 className="text-sm font-normal">{item.title}</h1>
        </div>
      ))}
    </div>
  );
};
const CardSix = ({ Title }: any) => {
  return (
    <div>
      <h1 className="text-base text-primary-foreground my-2 px-3 mx-2">
        {Title}
      </h1>
      {cardData6.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-x-5 px-3 py-2 mx-2 hover:bg-border rounded-lg hover:bg-opacity-100 cursor-pointer"
        >
          {item.icons}
          <h1 className="text-sm font-normal">{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

const CopyRightCard = ({ Title1, Title2, Title3 }: any) => {
  return (
    <div className="flex flex-col gap-y-2 text-primary-foreground opacity-80 text-xs px-4 mx-2 leading-1 tracking-wide mt-2">
      <h1>{Title1}</h1>
      <h1>{Title2}</h1>
      <h3 className="text-[11px] font-normal">{Title3}</h3>
      <div className="mb-2"></div>
    </div>
  );
};

export default function Sidebar() {
  return (
    <aside className="w-[18%] bg-secondary text-primary-foreground flex flex-col  py-2">
      <TopCard />
      <div className="flex  flex-col gap-y-2 overflow-y-auto">
        <CardOne />
        <Separator />
        <CardTwo />
        <Separator />
        <CardThree Title="Subscription" />
        <Separator />
        <CardFour Title="Explore" />
        <Separator />
        <CardFive Title="More From YouTube" />
        <Separator />
        <CardSix Title="Setting" />
        <Separator />
        <CopyRightCard
          Title1="About Press Copyright Contact us Creators Advertise Developers"
          Title2="Terms Privacy Policy & Safety How YouTube works Test new features"
          Title3="@Copyright 2023 YouTube"
        />
      </div>
    </aside>
  );
}

const cardData1 = [
  { id: 0, icons: <IoMdHome className="text-xl" />, title: "Home" },
  { id: 1, icons: <MdExplore className="text-xl" />, title: "Explore" },
  { id: 2, icons: <SiYoutubeshorts className="text-xl" />, title: "Shorts" },
  {
    id: 3,
    icons: <MdSubscriptions className="text-xl" />,
    title: "Subscriptions",
  },
];
const cardData2 = [
  {
    id: 0,
    icons: <MdOutlineVideoLibrary className="text-xl" />,
    title: "Library",
  },
  { id: 1, icons: <MdHistory className="text-xl" />, title: "History" },
  { id: 2, icons: <GoVideo className="text-xl" />, title: "Your videos" },
  {
    id: 3,
    icons: <MdOutlineWatchLater className="text-xl" />,
    title: "Watch later",
  },
  { id: 4, icons: <BiLike className="text-xl" />, title: "Liked video" },
];
const cardData3 = [
  {
    id: 0,
    icons: "/assets/u1.png",
    title: "Code with hurry",
  },
  { id: 1, icons: "/assets/u2.png", title: "Intezar" },
  { id: 2, icons: "/assets/u1.png", title: "Rahul Kumar" },
  {
    id: 3,
    icons: "/assets/u2.png",
    title: "Narendra Modi",
  },
  { id: 4, icons: "/assets/u1.png", title: "Kabeer Singh" },
];
const cardData4 = [
  {
    id: 0,
    icons: <HiOutlineTrendingUp className="text-xl" />,
    title: "Tranding",
  },
  { id: 1, icons: <GrShop className="text-xl" />, title: "Shoping" },
  { id: 2, icons: <IoMdMusicalNote className="text-xl" />, title: "Music" },
  {
    id: 3,
    icons: <BiSolidMoviePlay className="text-xl" />,
    title: "Movies",
  },
  { id: 4, icons: <MdOutlineCellTower className="text-xl" />, title: "Live" },
  {
    id: 4,
    icons: <IoGameControllerSharp className="text-xl" />,
    title: "Gaming",
  },
  { id: 4, icons: <HiOutlineNewspaper className="text-xl" />, title: "News" },
  { id: 4, icons: <TfiCup className="text-xl" />, title: "Sports" },
  { id: 4, icons: <GoLightBulb className="text-xl" />, title: "Learning" },
  {
    id: 4,
    icons: <FaShieldAlt className="text-xl" />,
    title: "Fashion & Beauty",
  },
  { id: 4, icons: <MdPodcasts className="text-xl" />, title: "Podcasts" },
];
const cardData5 = [
  {
    id: 0,
    icons: <FaYoutube className="text-xl text-destructive" />,
    title: "YouTube Premium",
  },
  {
    id: 1,
    icons: <MdOutlineOndemandVideo className="text-xl text-destructive" />,
    title: "YouTube Studio",
  },
  {
    id: 2,
    icons: <FaMusic className="text-xl text-destructive" />,
    title: "YouTube Music",
  },
  {
    id: 3,
    icons: <TbBrandYoutubeKids className="text-xl text-destructive" />,
    title: "YouTube Kids",
  },
];
const cardData6 = [
  {
    id: 0,
    icons: <IoIosSettings className="text-xl " />,
    title: "Settings",
  },
  {
    id: 1,
    icons: <CiFlag1 className="text-xl " />,
    title: "Report History",
  },
  {
    id: 2,
    icons: <IoHelpCircleOutline className="text-xl " />,
    title: "Help",
  },
  {
    id: 3,
    icons: <MdOutlineFeedback className="text-xl " />,
    title: "Send Feedback",
  },
];
