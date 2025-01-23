import { useState, useContext } from "react"
import { UserContext } from "../context/UserContext";
import TracksList from "./TracksList";
import fetchTracks from "../utils/spotifyApi"

export default function SearchInput() {

  const [searchQuery, setSearchQuery] = useState("");

  const { tokenData, apiData, setApiData } = useContext(UserContext);
  // console.log(tokenData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!tokenData || !tokenData.accessToken) return;

    const data = await fetchTracks(tokenData.accessToken, searchQuery);
    setApiData(data);
    setSearchQuery("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
        className="border border-slate-900"
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        type="text" />
        <button>Envoyer la liste</button>
      </form>
      <ul className="border border-slate-800 w-[600px]">
      {apiData && <TracksList apiData={apiData} />}
      </ul>
    </>
  )
}
