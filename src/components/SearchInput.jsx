import { useState, useContext } from "react"
import { UserContext } from "../context/UserContext";
import fetchTracks from "../utils/spotifyApi"

export default function SearchInput() {

  const [searchQuery, setSearchQuery] = useState("");

  const { tokenData, setApiData } = useContext(UserContext);
  // console.log(tokenData);

  const handleSubmit = async (e) => {
    setApiData(null)
    e.preventDefault();

    if (!tokenData || !tokenData.accessToken) return;

    const data = await fetchTracks(tokenData.accessToken, searchQuery);
    setApiData(data);
    setSearchQuery("");
  }

  return (
    <form
    onSubmit={handleSubmit}
    className="flex flex-col mt-8 ml-2 items-center">
      <input
      className="z-50 border md:w-[440px] border-slate-900 rounded p-2"
      onChange={(e) => setSearchQuery(e.target.value)}
      value={searchQuery}
      type="text" />
      <button
        className="mt-4 rounded-full z-50 text-xl font-semibold  lowercase font-manrope px-8 py-2 bg-slate-900 text-orange-200 hover:bg-orange-200 hover:text-slate-900 hover:outline hover:outline-[1px] hover:outline-orange-200 hover:duration-200"
        style={{fontVariant: "small-caps"}}>
        Explore Now
      </button>
    </form>
  )
}
