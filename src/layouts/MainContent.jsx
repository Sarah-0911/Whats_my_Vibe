import { useContext, useEffect, useRef } from "react";
import { UserContext } from "../context/UserContext";
import TracksList from "../components/TracksList/TracksList";

export default function MainContent() {

  const { apiData } = useContext(UserContext);
  const tracksListRef = useRef(null);

  const scrollToTracksList = () => {
    if (tracksListRef.current) tracksListRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    if (apiData?.tracks?.items?.length <= 10) scrollToTracksList();
  }, [apiData])

  return (
    <main className="bg-slate-800 min-h-screen p-8">
      {apiData && <TracksList apiData={apiData} ref={tracksListRef} />}
    </ main>
  )
}
