import { useContext } from "react"
import { UserContext } from "./context/UserContext";
import SearchInput from "./components/SearchInput";
import TracksList from "./components/TracksList";

function App () {

    const { apiData } = useContext(UserContext);

  return (
    <>
    <div className="flex h-screen w-screen">
      <div className="text-center flex-[2]">
        <h1 className='text-slate-800 uppercase font-manrope font-bold text-4xl tracking-wider'>Track Hunt</h1>
        <p className="font-barlow italic text-4xl font-light">dive into the music.</p>
      <SearchInput />
      </div>
      <div className="flex-[1] basis-0">
        <img
        className="h-full w-full object-cover"
        src="/images/bg-vinyl.jpg"
        alt="vinyl picture"
        />
      </div>
    </div>
    {apiData && <TracksList apiData={apiData} />}
    </>
  )
}

export default App
