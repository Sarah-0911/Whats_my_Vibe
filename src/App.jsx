import { useContext } from "react"
import { UserContext } from "./context/UserContext";
import SearchInput from "./components/SearchInput";
import TracksList from "./components/TracksList";

function App () {

    const { apiData } = useContext(UserContext);

  return (
    <>
    <div className="flex">
      <div className="flex flex-col justify-center w-screen h-screen bg-[url('/images/vinyl-hero.jpg')] bg-cover bg-top z-30 pt-20 pl-6 text-center sm:text-left sm:w-[65%] shadow-[5px_1px_15px_5px_#000000]">
        <h1 className='text-indigo-400 uppercase font-extrabold font-expletus tracking-tight text-6xl sm:text-[80px] drop-shadow-lg'>
          Track Hunt
        </h1>
        <p className="font-italianno font-medium text-4xl sm:text-6xl drop-shadow-lg tracking-wider md:pl-36 text-yellow-100">
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
        <div className="absolute top-60 -left-10 backdrop-blur-sm backdrop-brightness-125 pl-12 pr-8 py-4 rounded">
          <p className="text-slate-50 text-xl font-barlow italic tracking-wide text-center drop-shadow-lg">
            Easily generate tracks<br />inspired by your words.
          </p>
        </div>
      </div>
    </div>
    {apiData && <TracksList apiData={apiData} />}
    </>
  )
}

export default App
