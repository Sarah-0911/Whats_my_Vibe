import { useContext, useEffect, useRef } from "react";
import { UserContext } from "./context/UserContext";
import Header from "./layouts/Header";
import MainContent from "./layouts/MainContent";

function App () {

    const { apiData } = useContext(UserContext);
    const tracksListRef = useRef(null);

    const scrollToTracksList = () => {
      if (tracksListRef.current) tracksListRef.current.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
      if (apiData?.tracks?.items?.length <= 10) scrollToTracksList();
    }, [apiData])


  return (
    <div className="bg-slate-800 min-h-screen">
      <Header />
      {apiData && <MainContent ref={tracksListRef} />}
    </div>
  )
}

export default App
