import FilterBox from "../components/NavBar/Filter/FilterBox";
import Favorites from "../components/NavBar/Favorites";

export default function NavBar() {
  return (
    <div className="flex justify-center sm:justify-end sticky top-0 left-0 bg-[#171717] gap-12 bg-opacity-80 backdrop-blur-md font-limelight tracking-widest text-base mt-5 px-12 py-6 text-amber-100">
      <FilterBox />
      <Favorites />
    </div>
  )
}
