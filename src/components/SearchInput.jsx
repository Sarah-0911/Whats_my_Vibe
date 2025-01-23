/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react"
import fetchTracks from "../utils/spotifyApi";
import TracksList from "./TracksList";

export default function SearchInput({ accessToken }) {

  const [apiData, setApiData] = useState(null);
  const [query, setQuery] = useState("");

  const searchRef = useRef();

  console.log(accessToken);

  useEffect(() => {
    const getTracks = async () => {
      const data = await fetchTracks(accessToken);
      if (data) {
        setApiData(data);
        console.log(data);
      }
    }
    getTracks();
  }, [accessToken])


  const handleSubmit = e => {
    e.preventDefault();
    setQuery(searchRef.target.value)
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
        ref={searchRef}
        type="text" />
        <button>Envoyer la liste</button>
      </form>
      <TracksList />
    </>
  )
}
