import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import SearchInput from "./components/SearchInput";
import TracksList from "./components/TracksList";
import SideBar from "./components/SideBar";

function App () {

  const { apiData } = useContext(UserContext);

  return (
    <div className="bg-gradient-to-br from-slate-600 to-slate-950">
    <div className="flex relative">
      <div className="flex flex-col justify-center w-screen h-screen pt-28  bg-[#ed6044] z-30 sm:pl-6 text-center sm:text-left sm:w-[65%] shadow-[5px_0_15px_5px_#000000]">
        <h1 className='relative text-slate-900 font-medium font-limelight uppercase text-6xl sm:text-[82px] drop-shadow-lg'>
          Track Hunt
          {/* <span
            className='absolute text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-300 to-yellow-300 left-6 top-0 sm:-left-1 sm:-top-1 font-medium font-roboto uppercase text-6xl sm:text-[82px] drop-shadow-lg'>
              Track Hunt
          </span> */}
        </h1>
        <p className="relative -mt-1 font-poiret font-medium text-4xl sm:text-6xl drop-shadow-sm tracking-wider text-orange-200">
          dive into the music.
        </p>
        <SearchInput />
      </div>
    <SideBar />
    </div>
    {apiData && <TracksList apiData={apiData} />}
    </div>
  )
}

export default App

// bg-[url('/images/abstract.jpg')] bg-cover (2e div)
