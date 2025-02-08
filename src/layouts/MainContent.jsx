import TracksList from "../components/TracksList/TracksList";
import FilterBy from "../components/FilterBy";
import Favorites from "../components/Favorites";
import { forwardRef } from "react";

function MainContent(props, ref) {

  return (
    <main ref={ref} className="bg-slate-800 min-h-screen p-8">
      <div className="flex justify-end gap-6 text-slate-200 font-dot">
        <FilterBy />
        <Favorites />
      </div>
      <TracksList />
    </ main>
  )
}

export default forwardRef(MainContent)
