import React from "react";
import { useState } from "react"
import filter from "../../../assets/filter/filter.svg"
import FilterItem from "./FilterItem";
import PopularityIcon from "./PopularityIcon";
import TrackIcon from "./TrackIcon";
import ArtistIcon from "./ArtistIcon";
import AlbumIcon from "./AlbumIcon";

export default function FilterBox() {

  const [showPopup, setShowPopup] = useState(false);
  const [items] = useState([
    {
      name: "Popularity",
      icon: PopularityIcon
    },
    {
      name: "Artist",
      icon: ArtistIcon
    },
    {
      name: "Track",
      icon: TrackIcon
    },
    {
      name: "Album",
      icon: AlbumIcon
    },
  ])

  return (
    <div className="relative">
      <button
      className="flex items-center cursor-pointer transition-all duration-300 ease-in-out group"
      onClick={() => setShowPopup(!showPopup)}>
        <img
        className="w-6 h-5 group-hover:scale-110 duration-200"
        src={filter}
        alt="filter icon" />
        <span className="ml-1">Sort by</span>
      </button>

      {showPopup && <div className="absolute top-10 -left-10 bg-slate-100 rounded p-2 min-w-[220px]">
        <div className="grid grid-cols-2 gap-2">
          {items.map((item, index) => {
            return <FilterItem key={index} name={item.name} icon={React.createElement(item.icon)} />
          })
          }
        </div>
      </div>}
    </div>

  )
}
