import { forwardRef, useContext } from "react";
import TracksList from "../components/TracksList/TracksList";
import NavBar from "./NavBar";
import { UIContext } from "../context/UserContext";

function MainContent(props, ref) {
  const { showPopup, setShowPopup } = useContext(UIContext);

  return (
    <main
    ref={ref} 
    className="bg-[#171717] min-h-screen pb-8"
    onClick={() => showPopup && setShowPopup(false)}>
      <NavBar />
      <TracksList />
    </ main>
  )
}

export default forwardRef(MainContent)
