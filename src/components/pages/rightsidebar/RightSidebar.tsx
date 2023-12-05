import React from "react";

import Appbar from "@/components/pages/appbar/Appbar";
import Middlebar from "@/components/pages/middlebar/Middlebar";

export default function RightSidebar() {
  return (
    <div className="w-5/6 bg-primary">
      <Appbar />
      <div className="overflow-y-auto w-full h-full text-primary-foreground ">
        <Middlebar />
        <div className="mb-40"></div>
      </div>
    </div>
  );
}
