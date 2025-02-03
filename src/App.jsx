import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import SearchInput from "./components/SearchInput";
import TracksList from "./components/TracksList";
import Doodle from "./components/Doodle";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function App () {

  const { apiData, loader, errorMsg } = useContext(UserContext);

  return (
    <div className="bg-slate-800 min-h-screen">
      <div className="flex flex-col justify-center relative h-screen pt-28 px-6 bg-[#e06b4d] text-center shadow-[0_0_15px_5px_#000000]">
        <h1 className='text-slate-900 font-medium font-limelight uppercase text-5xl md:text-7xl drop-shadow-lg'>
          What&apos;s my vibe
        </h1>
        <p className="mt-1 font-poiret font-semibold text-lg md:text-3xl drop-shadow-sm tracking-wider text-orange-200">
          generate tracks from your words.
        </p>
        <SearchInput />
        <Doodle />
        {loader && <div className="absolute inset-0 bg-orange-200/45 flex justify-center items-end transition-duration-200">
          <div className="w-14 h-14 mb-24 md:mb-6">
            <DotLottieReact
            src="https://lottie.host/593cfd5d-abe7-41cd-9690-959b0c86eae6/bfjcuW1s4G.lottie"
            loop
            autoplay />
          </div>
        </div>}
        {errorMsg && <p className="mt-4 text-xl text-slate-900 font-medium font-barlow tracking-wide">
          Oops! No matches. Try a different search!
        </p>}
      </div>
    {apiData && <TracksList apiData={apiData} />}
    </div>
  )
}

export default App
