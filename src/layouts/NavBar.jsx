import FilterBox from "../components/NavBar/Filter/FilterBox";
import Favorites from "../components/NavBar/Favorites";

export default function NavBar() {
  return (
    <div className="flex justify-center sm:justify-end sticky top-0 left-0 bg-slate-800 gap-10 sm:gap-8 bg-opacity-80 backdrop-blur-md font-poiret tracking-widest font-extrabold text-base mt-5 px-12 py-6 text-orange-200">
      <FilterBox />
      <Favorites />
    </div>
  )
}
