import TracksList from "../components/TracksList/TracksList";
import { forwardRef } from "react";
import NavBar from "./NavBar";

function MainContent(props, ref) {

  return (
    <main ref={ref} className="bg-slate-800 min-h-screen px-8 pb-8">
      <NavBar />
      <TracksList />
    </ main>
  )
}

export default forwardRef(MainContent)
