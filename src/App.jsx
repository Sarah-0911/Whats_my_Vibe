import { useContext } from "react"
import { UserContext } from "./context/UserContext";
import SearchInput from "./components/SearchInput";
import TracksList from "./components/TracksList";
import vinyl from "./assets/vinyl.svg"

function App () {

    const { apiData } = useContext(UserContext);

  return (
    <>
    <div className="flex">
      <div className="flex flex-col justify-center w-screen h-screen bg-[url('/images/vinyl-hero.jpg')] bg-cover z-30 pl-6 text-center sm:text-left sm:w-[65%] shadow-[5px_1px_15px_5px_#000000]">
        <h1 className='text-indigo-400 uppercase font-extrabold font-expletus tracking-tight text-6xl sm:text-[80px] drop-shadow-lg'>
          Track Hunt
        </h1>
        <p className="font-italianno font-medium text-4xl sm:text-6xl drop-shadow-sm tracking-wider text-yellow-200">
          dive into the music.
        </p>
        <SearchInput />
      </div>
      <div className="w-[35%] relative sm:block hidden">
        <img
        className="h-screen w-full object-cover object-left"
        src="/images/gramophone.jpg"
        alt="vinyl picture"
        />
        <div className="absolute top-60 -left-10 backdrop-blur-sm backdrop-brightness-125 pl-20 pr-8 py-4 rounded-lg">
          <p className="text-slate-50 text-xl font-barlow italic tracking-wider text-center drop-shadow-lg">
            <span className="block">Easily generate tracks</span>
            <span className="block">inspired by your words.</span>
          </p>
        </div>
        <img className="w-14 h-14 absolute top-64 -left-7 z-40 hover:animate-spin" src={vinyl} alt="vinyl icon" />
      </div>
    </div>
    {apiData && <TracksList apiData={apiData} />}
    </>
  )
}

export default App
