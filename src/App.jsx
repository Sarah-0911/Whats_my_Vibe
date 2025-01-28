import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import SearchInput from "./components/SearchInput";
import TracksList from "./components/TracksList";
import SideBar from "./components/SideBar";
import musicDoodle from "./assets/musicDoodle/musicDoodle.svg"

function App () {

  const { apiData } = useContext(UserContext);

  return (
    <div className="bg-slate-900">
    <div className="flex relative">
      <div className="flex flex-col justify-center w-screen h-screen pt-28  bg-[#ed6044] z-30 sm:pl-6 text-center sm:text-left sm:w-[65%] shadow-[5px_0_15px_5px_#000000]">
        <h1 className='relative text-slate-900 font-medium font-limelight uppercase text-5xl sm:text-[82px] drop-shadow-lg'>
          Track Hunt
        </h1>
        <p className="relative -mt-1 font-poiret font-medium text-3xl sm:text-5xl drop-shadow-sm tracking-wider text-orange-200">
          dive into the music.
        </p>
        <SearchInput />
        <img className="absolute w-80 h-auto" src={musicDoodle} alt="" />
      </div>
    <SideBar />
    </div>
    {apiData && <TracksList apiData={apiData} />}
    </div>
  )
}

export default App

// bg-[url('/images/abstract.jpg')] bg-cover (2e div)
