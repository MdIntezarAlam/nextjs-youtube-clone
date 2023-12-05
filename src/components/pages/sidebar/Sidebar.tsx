import Image from "next/image";
import React from "react";
import { BiLike } from "react-icons/bi";
import { GoVideo } from "react-icons/go";
import { IoMdHome } from "react-icons/io";
import { IoLogoYoutube, IoMenu } from "react-icons/io5";
import {
  MdExplore,
  MdHistory,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
  MdSubscriptions,
} from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";

import { Separator } from "@/components/ui/separator";

interface CardItem {
  id: number;
  icons?: any;
  title: string;
}

interface CardProps {
  items: CardItem[];
}

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
const CardOne = ({ items }: CardProps) => {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-x-5  px-3 py-2 hover:bg-border rounded-lg hover:bg-opacity-100 cursor-pointer"
        >
          {item.icons}
          <h1 className="text-sm font-normal">{item.title}</h1>
        </div>
      ))}
    </>
  );
};

const CardTwo = ({ items }: CardProps) => {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-x-5 px-3 py-2 hover:bg-border rounded-lg hover:bg-opacity-100 cursor-pointer"
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
    </>
  );
};

const CardThree = ({ Title }: any) => {
  return (
    <div>
      <h1 className="text-base text-primary-foreground my-2 px-3">{Title}</h1>
      {cardData4.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-x-5 px-3 py-2 hover:bg-border rounded-lg hover:bg-opacity-100 cursor-pointer"
        >
          {item.icons}
          <h1 className="text-sm font-normal">{item.title}</h1>
        </div>
      ))}
    </div>
  );
};
const CardFour = ({ Title }: any) => {
  return (
    <div>
      <h1 className="text-base text-primary-foreground my-2 px-3">{Title}</h1>
      {cardData4.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-x-5 px-3 py-2  hover:bg-border rounded-lg hover:bg-opacity-100 cursor-pointer"
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
      <h1 className="text-base text-primary-foreground my-2 px-3">{Title}</h1>
      {cardData5.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-x-5 px-3 py-2  hover:bg-border rounded-lg hover:bg-opacity-100 cursor-pointer"
        >
          {item.icons}
          <h1 className="text-sm font-normal">{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default function Sidebar() {
  const renderCards1 = (data: CardItem[][]) => {
    return data.map((cardData, index) => (
      <React.Fragment key={index}>
        <CardOne items={cardData} />
        <Separator />
      </React.Fragment>
    ));
  };

  const renderCards2 = (data: CardItem[][]) => {
    return data.map((cardData, index) => (
      <React.Fragment key={index}>
        <h1 className="text-base text-primary-foreground px-3 mt-2">
          Subscription
        </h1>
        <CardTwo items={cardData} />
        <Separator />
      </React.Fragment>
    ));
  };

  return (
    <aside className="w-[18%] bg-secondary text-primary-foreground flex flex-col  py-2">
      <TopCard />
      <div className="flex  flex-col gap-y-2 overflow-y-auto">
        {renderCards1(RenderData1)}
        {renderCards2(RenderData2)}
        <CardThree Title="Explore" />
        <Separator />
        <CardFour Title="More From YouTube" />
        <Separator />
        <CardFive Title="Settings" />
        <Separator />
      </div>
    </aside>
  );
}

const cardData1: CardItem[] = [
  { id: 0, icons: <IoMdHome className="text-xl" />, title: "Home" },
  { id: 1, icons: <MdExplore className="text-xl" />, title: "Explore" },
  { id: 2, icons: <SiYoutubeshorts className="text-xl" />, title: "Shorts" },
  {
    id: 3,
    icons: <MdSubscriptions className="text-xl" />,
    title: "Subscriptions",
  },
];

const cardData2: CardItem[] = [
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
const cardData3: CardItem[] = [
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

const cardData4: CardItem[] = [
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

const cardData5: CardItem[] = [
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
const RenderData1: CardItem[][] = [cardData1, cardData2];
const RenderData2: CardItem[][] = [cardData3];
