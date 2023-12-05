import Image from "next/image";
import React from "react";

import { type TypesThumbnal } from "@/@Types/TypesThumbnal";

interface ITypes {
  items: TypesThumbnal;
}
export default function MiddleShortCard({ items }: ITypes) {
  return (
    <div className="w-full min-h-56 rounded-lg flex flex-col items-center gap-y-2 bg-secondary text-primary-foreground hover:bg-primary/50">
      <div className="w-full h-[80%]">
        <Image
          src={items.img_poster}
          width={100}
          height={100}
          alt="thumbnal"
          className="object-cover w-full h-full rounded-tr-lg rounded-tl-lg"
        />
      </div>
      <div className="text-xs text-secondary-foreground p-2">
        <h1 className="text-sm text-left font-semibold text-primary-foreground mb-2">
          {items.title1}
        </h1>
        <h5>{items.title3}</h5>
      </div>
    </div>
  );
}
