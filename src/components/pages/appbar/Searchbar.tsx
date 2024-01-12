import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosNotificationsOutline, IoMdMic } from "react-icons/io";
import { MdCreateNewFolder } from "react-icons/md";

export default function Searchbar() {
  return (
    <header className="w-full flex items-center justify-center top-0 py-2 px-5">
      <div className="flex flex-1 items-center justify-center gap-x-2 ml-5">
        <div className="w-3/4 flex items-center rounded-full pl-5 bg-secondary border border-border">
          <input
            type="search"
            placeholder="Search here....."
            className="w-full text-sm bg-transparent outline-none border-0 cursor-pointer"
          />
          <div className="pl-3 bg-border rounded-tr-full rounded-br-full pr-5 cursor-pointer">
            <CiSearch className="text-xl h-9" />
          </div>
        </div>
        <div className="bg-border h-9 w-9 flex items-center justify-center rounded-full cursor-pointer">
          <IoMdMic className="text-xl " />
        </div>
      </div>

      <div className="w-[10%] flex items-center justify-between cursor-pointer text-xl">
        <MdCreateNewFolder />
        <IoIosNotificationsOutline />
        <FaCircleUser />
      </div>
    </header>
  );
}
