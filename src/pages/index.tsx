import React from "react";

import Home from "@/components/pages/Home";
import Sidebar from "@/components/pages/sidebar/Sidebar";

export default function MainPage() {
  return (
    <div className="flex h-screen bg-primary">
      <main className="w-full flex overflow-hidden">
        <Sidebar />
        <Home />
      </main>
    </div>
  );
}
