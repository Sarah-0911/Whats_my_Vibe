import TracksList from "../components/TracksList/TracksList";
import Filter from "../components/NavBar/Filter";
import Favorites from "../components/NavBar/Favorites";
import { forwardRef } from "react";

function MainContent(props, ref) {

  return (
    <main ref={ref} className="bg-slate-800 min-h-screen p-8">
      <div className="flex justify-end gap-6 text-slate-200 font-dot text-sm">
        <Filter />
        <Favorites />
      </div>
      <TracksList />
    </ main>
  )
}

export default forwardRef(MainContent)
