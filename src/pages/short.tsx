import Image from "next/image";
import React from "react";
import { IoClose } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";

import { type TypesThumbnal } from "@/@Types/TypesThumbnal";
import Searchbar from "@/components/pages/appbar/Searchbar";
import MiddleShortCard from "@/components/pages/Home/short/ShortCard";
import Sidebar from "@/components/pages/sidebar/Sidebar";
import { shortVideoData } from "@/data";

export default function short() {
  return (
    <div className="flex h-screen bg-primary">
      <div className="w-full flex overflow-hidden">
        <Sidebar />
        <div className="w-5/6 bg-primary">
          <Searchbar />
          <div className="overflow-y-auto w-full h-full">
            <main className="flex-1 p-4 bg-primary text-primary-foreground overflow-y-auto">
              {/* short */}

              <div className="w-full grid grid-rows-1 grid-cols-5 gap-x-3 gap-y-3 gri  cursor-pointer bg-red-400">
                <div className="w-full min-h-56 rounded-lg flex flex-col items-center gap-y-2 bg-secondary text-primary-foreground hover:bg-border">
                  <div className="w-full h-[80%]">
                    <Image
                      src="/assets/s1.png"
                      width={100}
                      height={100}
                      alt="thumbnal"
                      className="object-cover w-full h-full rounded-tr-lg rounded-tl-lg"
                    />
                  </div>
                  <div className="text-xs text-secondary-foreground p-2">
                    <h1 className="text-sm text-left font-semibold text-primary-foreground mb-2">
                      title1
                    </h1>
                    <h5>title2</h5>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
