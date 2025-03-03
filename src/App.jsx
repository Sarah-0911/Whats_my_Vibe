import { useContext, useEffect, useRef } from "react";
import { UserContext } from "./context/UserContext";
import Header from "./layouts/Header";
import MainContent from "./layouts/MainContent";

function App () {

  const { apiData, mainRef } = useContext(UserContext);

  const scrollToTracksList = () => {
    if (mainRef.current) mainRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    if (apiData?.tracks?.items) scrollToTracksList();
  }, [apiData])


  return (
    <div className="bg-[#171717] min-h-screen">
      <Header />
      {apiData && <MainContent ref={mainRef} />}
    </div>
  )
}

export default App
