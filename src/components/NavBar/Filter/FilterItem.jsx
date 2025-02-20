import { useContext } from "react";
import { UserContext } from "../../../context/UserContext"

export default function FilterItem({ name, icon, category }) {

  const { sortCategory, setSortCategory, tracksListRef } = useContext(UserContext);
  const isSelected = sortCategory === category;

  const handleClick = () => {
    setSortCategory(isSelected ? null : category)  // Si le bouton est déjà sélectionné, on désactive le tri (null).

    setTimeout(() => {
      if (tracksListRef?.current) {
        tracksListRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);

  }

  return (
    <button
    onClick={handleClick}
    className={`group flex flex-col items-center justify-center gap-2 w-24 h-24 p-4 rounded border transition-all duration-300 ease-in-out hover:bg-slate-300 ${isSelected ? "bg-slate-300" : "bg-slate-200"}`}>
      <span className={`group-hover:text-orange-500 ${isSelected ? "text-orange-500" : "text-gray-800"} transition-all duration-300 ease-in-out`}>
        {icon}
      </span>
      <p className={`font-sans font-normal text-sm  tracking-wide group-hover:text-orange-500 ${isSelected ? "text-orange-500" : "text-gray-800"} transition-all duration-300 ease-in-out`}>
        {name}
      </p>
    </button>
  )
}
