import { useContext } from "react";
import { UIContext } from "../../../context/UserContext"

export default function FilterItem({ name, icon, category }) {

  const { sortCategory, setSortCategory } = useContext(UIContext);

  const isSelected = sortCategory === category;

  const handleClick = () => {
    setSortCategory(isSelected ? null : category); // Si le bouton est déjà sélectionné, on désactive le tri (null).
  }

  return (
    <button
    onClick={handleClick}
    className={`relative group flex flex-col border-[hsl(0,0%,20%)] items-center justify-center gap-2 w-24 h-24 p-4 rounded border transition-all duration-300 ease-in-out hover:bg-[#e06b4d] ${isSelected ? "bg-[#e06b4d]" : "bg-[hsl(0,0%,12%)]"}`}>
      <span className={`group-hover:text-amber-100 ${isSelected ? "text-amber-100" : "text-slate-200"} transition-all duration-300 ease-in-out`}>
        {icon}
      </span>
      <p className={`font-sans font-normal text-sm tracking-wide group-hover:text-amber-100 ${isSelected ? "text-amber-100" : "text-slate-200"} transition-all duration-300 ease-in-out`}>
        {name}
      </p>
    </button>
  )
}
