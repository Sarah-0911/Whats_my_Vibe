import { useState, useContext } from "react";
import { UserContext } from "../../../context/UserContext"

export default function FilterItem({ name, icon }) {

  const { apiData, setSortCategory } = useContext(UserContext)

  if (apiData) {
    console.log(apiData);
  }

  const [ selectItem, setSelectItem ] = useState(false);

  const handleClick = () => {
    setSelectItem(!selectItem)

    switch (icon.type.name) {
      case "PopularityIcon":
        setSortCategory("popularity")
        break;
      case "ArtistIcon":
        setSortCategory("artist")
        break;
      case "TrackIcon":
        setSortCategory("track")
        break;
      case "AlbumIcon":
        setSortCategory("album")
        break;
      default:
        console.log("No matches");
        break;
    }
  }

  return (
    <button
    onClick={handleClick}
    className={`group flex flex-col items-center bg-slate-200 justify-center gap-2 w-24 h-24 p-4 rounded border transition-all duration-300 ease-in-out hover:bg-slate-300 ${selectItem ? "bg-slate-300" : ""}`}>
      <span className="text-gray-800 group-hover:text-orange-500 transition-all duration-300 ease-in-out">
        {icon}
      </span>
      <p className="font-sans font-normal text-sm text-slate-900 tracking-wide group-hover:text-orange-500 transition-all duration-300 ease-in-out">
        {name}
      </p>
    </button>
  )
}
