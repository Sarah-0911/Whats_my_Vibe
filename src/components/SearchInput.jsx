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
    className="flex flex-col mt-8 ml-2 items-center sm:items-start">
      <input
      className="z-50 border sm:w-[440px] border-slate-900 rounded p-2"
      onChange={(e) => setSearchQuery(e.target.value)}
      value={searchQuery}
      type="text" />
      <button
        className="mt-4 rounded z-50 text-xl font-semibold bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-slate-100 lowercase font-manrope px-8 py-2"
        style={{fontVariant: "small-caps"}}>
        Explore Now
      </button>
    </form>
  )
}
