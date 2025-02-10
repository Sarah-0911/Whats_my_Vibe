import Filter from "../components/NavBar/Filter";
import Favorites from "../components/NavBar/Favorites";

export default function NavBar() {
  return (
    <div className="flex justify-end sticky top-0 left-0 bg-slate-800 gap-8 bg-opacity-80 backdrop-blur-md font-dot text-base mt-5 p-4 pb-6  text-orange-200">
      <Filter />
      <Favorites />
    </div>
  )
}
