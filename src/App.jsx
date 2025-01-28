import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import SearchInput from "./components/SearchInput";
import TracksList from "./components/TracksList";
import SideBar from "./components/SideBar";

function App () {

  const { apiData } = useContext(UserContext);

  return (
    <>
    <div className="flex relative">
      <div className="flex flex-col justify-center w-screen h-screen pt-28 bg-[url('/images/abstract.jpg')] bg-cover z-30 sm:pl-6 text-center sm:text-left sm:w-[65%] shadow-[5px_1px_15px_5px_#000000]">
        <h1 className='relative text-slate-900 font-medium font-roboto uppercase text-6xl sm:text-[82px] drop-shadow-lg'>
          Track Hunt
          <span
            className='absolute text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-slate-100 left-6 top-0 sm:-left-1 sm:-top-1 font-medium font-roboto uppercase text-6xl sm:text-[82px] drop-shadow-lg'>
              Track Hunt
          </span>
        </h1>
        <p className="-mt-1 font-italianno font-medium text-5xl sm:text-7xl drop-shadow-sm tracking-wider text-amber-300">
          dive into the music.
        </p>
        <SearchInput />
      </div>
    <SideBar />
    </div>
    {apiData && <TracksList apiData={apiData} />}
    </>
  )
}

export default App

// bg-[url('/images/abstract.jpg')] bg-cover (2e div)
