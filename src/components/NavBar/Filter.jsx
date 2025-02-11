import { useState } from "react"
import filter from "../../assets/filter/filter.svg"
import star from "../../assets/filter/star.svg"

export default function Filter() {

  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="relative">
      <button
      className="flex items-center cursor-pointer transition-all duration-300 ease-in-out group"
      onClick={() => setShowPopup(!showPopup)}>
        <img
        className="w-6 h-5 group-hover:scale-110 duration-200"
        src={filter}
        alt="filter icon" />
        <span className="ml-1">Filter</span>
      </button>

      {showPopup && <div className="absolute top-10 -left-10 border border-orange-200 bg-slate-200 rounded p-2 min-w-[220px]">
        <p className="font-sans font-semibold text-sm tracking-wide text-slate-900 mb-2">Add filter</p>
        <div className="grid grid-cols-2 gap-2">
          <button
          className="flex flex-col items-center gap-2 w-24 h-24 p-4 rounded border border-slate-400">
            <img className="w-7" src={star} alt="star icon" />
            <span className="font-sans font-normal text-sm text-slate-900 tracking-wide">Popularity</span>
          </button>
          <button
          className="flex flex-col items-center gap-2 w-24 h-24 p-4 rounded border border-slate-400">
            <img className="w-7" src={star} alt="star icon" />
            <span className="font-sans font-normal text-sm text-slate-900 tracking-wide">Popularity</span>
          </button>
          <button
          className="flex flex-col items-center gap-2 w-24 h-24 p-4 rounded border border-slate-400">
            <img className="w-7" src={star} alt="star icon" />
            <span className="font-sans font-normal text-sm text-slate-900 tracking-wide">Popularity</span>
          </button>
          <button
          className="flex flex-col items-center gap-2 w-24 h-24 p-4 rounded border border-slate-400">
            <img className="w-7" src={star} alt="star icon" />
            <span className="font-sans font-normal text-sm text-slate-900 tracking-wide">Popularity</span>
          </button>
        </div>
      </div>}
    </div>

  )
}
