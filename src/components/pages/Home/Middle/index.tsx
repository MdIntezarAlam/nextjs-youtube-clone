import React from "react";
import { IoClose } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";

import { type TypesThumbnal } from "@/@Types/TypesThumbnal";
import CustomText from "@/components/common/CustomText";
import {
  brekingNewsdData,
  infinityData,
  shortVideoData,
  videoCardData,
} from "@/data";

import ShortCard from "../short/ShortCard";
import MiddleCard from "./MiddleCard1";

export default function Middle() {
  return (
    <main className="flex-1 p-4 bg-primary text-primary-foreground overflow-y-auto flex flex-col gap-y-4 section">
      <div className="w-full grid grid-rows-2 grid-cols-4 gap-x-2 gap-y-5 cursor-pointer">
        {videoCardData.map((items: TypesThumbnal) => (
          <MiddleCard key={items.id} items={items} />
        ))}
      </div>

      {/* short */}
      <CustomText
        Text1={"Short"}
        Text2={""}
        lIcon={<SiYoutubeshorts className="text-destructive text-xl" />}
        RIcon={<IoClose className="text-2xl" />}
      />
      <div className="w-full grid grid-rows-1 grid-cols-5 gap-x-3 gap-y-3  cursor-pointer">
        {shortVideoData.map((items: TypesThumbnal) => (
          <ShortCard key={items.id} items={items} />
        ))}
      </div>
      {/* Breaking news  */}
      <CustomText
        Text1={"Breaking News"}
        Text2={" Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        lIcon={undefined}
        RIcon={<IoClose className="text-2xl" />}
      />
      <div className="w-full grid grid-rows-2 grid-cols-4 gap-x-2 gap-y-5 cursor-pointer">
        {brekingNewsdData.map((items: TypesThumbnal) => (
          <MiddleCard key={items.id} items={items} />
        ))}
      </div>
      {/* infinity data */}
      <div className="w-full flex items-center justify-between py-5">
        <h1 className="text-xl">More</h1>
      </div>
      <div className="w-full grid grid-rows-2 grid-cols-4 gap-x-2 gap-y-5 cursor-pointer">
        {infinityData.map((items: TypesThumbnal) => (
          <MiddleCard key={items.id} items={items} />
        ))}
      </div>
    </main>
  );
}
