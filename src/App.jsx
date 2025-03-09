import { useContext, useEffect } from "react";
import { DataContext, UIContext } from "./context/UserContext";
import Header from "./layouts/Header";
import MainContent from "./layouts/MainContent";

function App () {
  const { apiData } = useContext(DataContext);
  const { mainRef } = useContext(UIContext);

  const scrollToTracksList = () => {
    if (mainRef.current) mainRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    if (apiData && apiData.tracks && apiData.tracks.items && apiData.tracks.items.length > 0) {
      scrollToTracksList();
    }
  }, [apiData?.tracks?.items])

  return (
    <div className="bg-[#171717] min-h-screen">
      <Header />
      {apiData && <MainContent ref={mainRef} />}
    </div>
  )
}

export default App
