/* eslint-disable react/prop-types */
import { useContext } from "react"
import { UserContext } from "../context/UserContext";
import TracksList from "./TracksList";

export default function SearchInput() {

  const { apiData, searchQuery, setSearchQuery } = useContext(UserContext);
  // console.log(tokenData.accessToken);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(apiData);
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
