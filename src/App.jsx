import { useContext } from "react"
import { UserContext } from "./context/UserContext";
import SearchInput from "./components/SearchInput";
import TracksList from "./components/TracksList";

function App () {

    const { apiData } = useContext(UserContext);

  return (
    <>
    <div className="flex h-screen w-screen items-center bg-[url('/images/vinyl-hero.jpg')] bg-cover bg-top">
      <div className="w-[65%] mx-12 pt-40">
        <h1 className='text-indigo-400 uppercase font-bungee tracking-tight text-7xl'>Track Hunt</h1>
        <p className="font-barlow italic text-4xl tracking-wider pl-56 text-slate-100">dive into the music.</p>
      <SearchInput />
      </div>
      <div className="w-[35%] relative">
        <img
        className="h-screen w-full object-cover object-left"
        src="/images/gramophone.jpg"
        alt="vinyl picture"
        />
        <div className="absolute top-1/2">
          <p className="text-slate-100 text-lg font-barlow italic">Easily generate tracks inspired by your words.</p>
        </div>
      </div>
    </div>
    {apiData && <TracksList apiData={apiData} />}
    </>
  )
}

export default App
