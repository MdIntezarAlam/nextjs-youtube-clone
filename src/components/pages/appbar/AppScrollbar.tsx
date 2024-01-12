import React from "react";

import { scrollablebtn } from "@/data";

export default function AppScrollbar() {
  return (
    <div className="w-full flex gap-x-3 overflow-auto mb-3">
      {scrollablebtn.map((items) => (
        <button
          key={items.id}
          className="px-4 py-2 text-xs font-semibold bg-secondary border border-border rounded-full text-primary-foreground hover:bg-border cursor-pointer"
        >
          {items.title}
        </button>
      ))}
    </div>
  );
}
