import React from "react";

import RightSidebar from "@/components/pages/rightsidebar/RightSidebar";
import Sidebar from "@/components/pages/sidebar/Sidebar";

export default function index() {
  return (
    <div className="flex h-screen bg-primary">
      <div className="w-full flex overflow-hidden">
        <Sidebar />
        <RightSidebar />
      </div>
    </div>
  );
}
