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
      <div className="absolute top-10 border border-amber-100 opacity-15 sm:h-[500px] sm:w-[500px] rounded-full"></div>
        {/* <p
        className='absolute text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500 opacity-5 font-medium font-roboto uppercase left-16 top-10 text-6xl sm:text-[200px] drop-shadow-lg overflow-hidden'>
          Track Hunt
        </p> */}
        <h1
        className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500 font-medium font-roboto uppercase text-6xl sm:text-[82px] drop-shadow-lg'>
          Track Hunt
        </h1>
        <p className="-mt-1 font-italianno font-medium text-4xl sm:text-7xl drop-shadow-sm tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200">
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
