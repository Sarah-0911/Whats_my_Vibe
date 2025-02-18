import { useState, useContext } from "react";
import { UserContext } from "../../../context/UserContext"

export default function FilterItem({ name, icon, category }) {

  const { sortCategory, setSortCategory } = useContext(UserContext)
  const isSelected = sortCategory === category;

  const handleClick = () => {
    setSortCategory(isSelected ? null : category)  // Si le bouton est déjà sélectionné, on désactive le tri (null).
  }

  return (
    <button
    onClick={handleClick}
    className={`group flex flex-col items-center bg-slate-200 justify-center gap-2 w-24 h-24 p-4 rounded border transition-all duration-300 ease-in-out hover:bg-slate-300 ${isSelected ? "bg-slate-300" : ""}`}>
      <span className={`text-gray-800 group-hover:text-orange-500 ${isSelected ? "text-orange-500" : ""} transition-all duration-300 ease-in-out`}>
        {icon}
      </span>
      <p className={`font-sans font-normal text-sm text-slate-900 tracking-wide group-hover:text-orange-500 ${isSelected ? "text-orange-500" : ""} transition-all duration-300 ease-in-out`}>
        {name}
      </p>
    </button>
  )
}
