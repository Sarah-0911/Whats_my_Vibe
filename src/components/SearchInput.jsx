/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import fetchTracks from "../utils/spotifyApi";
import TracksList from "./TracksList";

export default function SearchInput({ accessToken }) {

  const [searchQuery, setSearchQuery] = useState("");
  const [apiData, setApiData] = useState(null);

  // console.log(accessToken);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await fetchTracks(accessToken, searchQuery);

    if (data) {
      setApiData(data);
      console.log(data);
    }
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
      {apiData && <TracksList tracks={apiData} />}
    </>
  )
}
