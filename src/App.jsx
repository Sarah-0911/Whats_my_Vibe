import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import SearchInput from "./components/SearchInput";
import TracksList from "./components/TracksList";
import Doodle from "./components/Doodle";

function App () {

  const { apiData } = useContext(UserContext);

  return (
    <div className="bg-slate-800">
      <div className="flex flex-col justify-center h-screen pt-28 px-6 bg-[#e06b4d] text-center shadow-[0_0_15px_5px_#000000]">
        <h1 className='text-slate-900 font-medium font-limelight uppercase text-5xl md:text-7xl drop-shadow-lg'>
          What&apos;s my vibe
        </h1>
        <p className="mt-1 font-poiret font-semibold text-lg md:text-3xl drop-shadow-sm tracking-wider text-orange-200">
          generate tracks from your words.
        </p>
        <SearchInput />
      <Doodle />
      </div>
    {apiData && <TracksList apiData={apiData} />}
    </div>
  )
}

export default App
