import React from "react";

import AppScrollbar from "./AppScrollbar";
import Searchbar from "./Searchbar";

export default function Appbar() {
  return (
    <header className="w-full bg-card text-primary-foreground flex flex-col items-center justify-center gap-y-2  px-5 z-10">
      <Searchbar />
      <AppScrollbar />
    </header>
  );
}
