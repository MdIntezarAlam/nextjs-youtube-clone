import React from "react";

import Appbar from "@/components/pages/appbar/Appbar";

import Middle from "./Middle";

export default function Home() {
  return (
    <div className="w-5/6 bg-primary">
      <Appbar />
      <div className="overflow-y-auto w-full h-full text-primary-foreground">
        <Middle />
        <div className="mb-40" />
      </div>
    </div>
  );
}
