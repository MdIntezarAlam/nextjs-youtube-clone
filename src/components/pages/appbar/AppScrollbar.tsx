import React from "react";

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

const scrollablebtn = [
  { id: 0, title: "All" },
  { id: 0, title: "Mixes" },
  { id: 0, title: "React.Js" },
  { id: 0, title: "Mern" },
  { id: 0, title: "Music" },
  { id: 0, title: "BPraak" },
  { id: 0, title: "Bollywood" },
  { id: 0, title: "Adhan" },
  { id: 0, title: "Tranding" },
  { id: 0, title: "Live" },
  { id: 0, title: "Song" },
  { id: 0, title: "Comedy" },
  { id: 0, title: "Javascript" },
  { id: 0, title: "Electroni" },
  { id: 0, title: "Watched" },
  { id: 0, title: "Not" },
  { id: 0, title: "Recently" },
  { id: 0, title: "Case" },
  { id: 0, title: "Study" },
  { id: 0, title: "Cook" },
  { id: 0, title: "Studio" },
  { id: 0, title: "Lofi" },
  { id: 0, title: "Tour" },
  { id: 0, title: "Saintmartin" },
  { id: 0, title: "Tech" },
  { id: 0, title: "iPhone" },
  { id: 0, title: "UI" },
  { id: 0, title: "UX" },
  { id: 0, title: "Computer" },
];
