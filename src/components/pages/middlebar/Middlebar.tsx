import React from "react";
import { IoClose } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";

import { type TypesThumbnal } from "@/@Types/TypesThumbnal";
import {
  brekingNewsdData,
  infinityData,
  shortVideoData,
  videoCardData,
} from "@/data";

import MiddleCard1 from "./MiddleCard1";
import MiddleShortCard from "./MiddleShortCard";

export default function Middlebar() {
  return (
    <main className="flex-1 p-4 bg-primary text-primary-foreground overflow-y-auto flex flex-col gap-y-4">
      <div className="w-full grid grid-rows-2 grid-cols-4 gap-x-2 gap-y-5 cursor-pointer">
        {videoCardData.map((items: TypesThumbnal) => (
          <MiddleCard1 key={items.id} items={items} />
        ))}
      </div>

      {/* short */}
      <div className="w-full flex items-center justify-between py-5">
        <div className="flex items-center gap-x-2">
          <SiYoutubeshorts className="text-destructive text-xl" />
          <h1 className="text-xl">Short</h1>
        </div>
        <IoClose className="text-2xl" />
      </div>

      <div className="w-full grid grid-rows-1 grid-cols-5 gap-x-3 gap-y-3  cursor-pointer">
        {shortVideoData.map((items: TypesThumbnal) => (
          <MiddleShortCard key={items.id} items={items} />
        ))}
      </div>

      {/* Breaking news  */}
      <div className="w-full flex items-center justify-between py-5">
        <div className="flex flex-col">
          <h1 className="text-xl">Breaking News</h1>
          <p className="text-secondary-foreground text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <IoClose className="text-2xl" />
      </div>
      <div className="w-full grid grid-rows-2 grid-cols-4 gap-x-2 gap-y-5 cursor-pointer">
        {brekingNewsdData.map((items: TypesThumbnal) => (
          <MiddleCard1 key={items.id} items={items} />
        ))}
      </div>
      {/* infinity data */}
      <div className="w-full flex items-center justify-between py-5">
        <h1 className="text-xl">More</h1>
      </div>
      <div className="w-full grid grid-rows-2 grid-cols-4 gap-x-2 gap-y-5 cursor-pointer">
        {infinityData.map((items: TypesThumbnal) => (
          <MiddleCard1 key={items.id} items={items} />
        ))}
      </div>
    </main>
  );
}
