import { useContext } from "react"
import { UserContext } from "../context/UserContext";
import fetchTracks from "../utils/spotifyApi";

export default function SearchInput() {

  const { tokenData, setApiData, setLoader, setErrorMsg, searchQuery, setSearchQuery } = useContext(UserContext);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiData(null)
    setLoader(true)
    setErrorMsg(false);
    
    if (!tokenData || !tokenData.accessToken) return;

    const data = await fetchTracks(tokenData?.accessToken, searchQuery);

    if(data) {
      setApiData(data);
    } else {
      setErrorMsg(true);
    }

    setLoader(false)
  }

  return (
    <form
    onSubmit={handleSubmit}
    className="flex flex-col mt-8 ml-2 items-center">
      <input
      className="z-50 border md:w-[440px] border-slate-900 focus:outline-slate-600 rounded p-2 text-slate-900"
      onChange={(e) => setSearchQuery(e.target.value)}
      value={searchQuery}
      type="text" />
      <button
        className="relative mt-4 rounded-full z-50 text-xl font-semibold lowercase font-manrope px-8 py-2 bg-slate-900 text-amber-100 overflow-hidden
        before:absolute before:inset-0 before:bg-orange-200
        before:w-0 before:duration-500 before:ease-in-out
        hover:before:w-full hover:text-slate-900"
        style={{fontVariant: "small-caps"}}>
          <span className="relative z-10">Explore Now</span>
      </button>
    </form>
  )
}
