import Filter from "../components/NavBar/Filter";
import Favorites from "../components/NavBar/Favorites";

export default function NavBar() {
  return (
    <div className="flex justify-end gap-6 text-slate-200 font-dot text-sm">
      <Filter />
      <Favorites />
    </div>
  )
}
