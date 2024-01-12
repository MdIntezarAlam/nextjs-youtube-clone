import Image from "next/image";

import { type TypesThumbnal } from "@/@Types/TypesThumbnal";

interface ITypes {
  items: TypesThumbnal;
}
export default function MiddleCard({ items }: ITypes) {
  return (
    <div className="w-full min-h-44 rounded-lg flex flex-col items-center gap-y-2 bg-secondary text-primary-foreground hover:bg-border">
      <div className="w-full h-[60%]">
        <Image
          src={items.img_poster}
          width={100}
          height={100}
          alt="thumbnal"
          className="w-full h-full rounded-tr-lg rounded-tl-lg"
        />
      </div>
      <div className="w-full flex gap-x-2.5 py-2 px-1">
        <div className="w-10 h-9">
          <Image
            src={items.userImg}
            width={100}
            height={100}
            alt="thumbnal"
            className="object-cover w-full h-full rounded-full"
          />
        </div>

        <div className="w-11/12 px-2 text-xs text-secondary-foreground">
          <h1 className="text-sm text-justify font-semibold text-primary-foreground">
            {items.title1}
          </h1>
          <h5>{items.title2}</h5>
          <h5>{items.title3}</h5>
        </div>
      </div>
    </div>
  );
}
