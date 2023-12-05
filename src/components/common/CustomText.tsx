import React from "react";
import { IoClose } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";

export default function CustomText() {
  return (
    <div className="w-full flex items-center justify-between py-5">
      <div className="flex items-center gap-x-2">
        <SiYoutubeshorts className="text-destructive text-xl" />
        <h1 className="text-xl ">Short</h1>
      </div>
      <IoClose className="text-2xl" />
    </div>
  );
}
