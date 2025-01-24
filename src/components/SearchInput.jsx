import { useState, useContext } from "react"
import { UserContext } from "../context/UserContext";
import TracksList from "./TracksList";
import fetchTracks from "../utils/spotifyApi"

export default function SearchInput() {

  const [searchQuery, setSearchQuery] = useState("");

  const { tokenData, apiData, setApiData } = useContext(UserContext);
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
    <>
      <form
      onSubmit={handleSubmit}
      className="flex flex-col m-8 items-center mx-auto">
        <input
        className="border min-[450px]:w-[400px] md:w-[600px] border-slate-900 rounded p-2"
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        type="text" />
        <button
         className="mt-4 rounded text-xl font-semibold bg-slate-600 hover:bg-slate-700 text-slate-100 lowercase font-manrope px-8 py-2"
         style={{fontVariant: "small-caps"}}>
          Explore Now
        </button>
      </form>
      {apiData && <TracksList apiData={apiData} />}
    </>
  )
}
