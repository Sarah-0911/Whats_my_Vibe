import Track from "./Track"
import { useState, useContext } from "react"
import { UserContext } from "../context/UserContext";
import fetchTracks from "../utils/spotifyApi"

export default function TracksList({ apiData }) {

  const [offsetData, setOffsetData] = useState(0);
  const { tokenData, setApiData, searchQuery } = useContext(UserContext);

  const handleShowMore = async() => {
    console.log({searchQuery});
    const newOffset = offsetData + 10;

    setOffsetData(newOffset);
    if (searchQuery){
      const data = await fetchTracks(tokenData.accessToken, searchQuery, newOffset);

      console.log(data);

      setApiData(prevState => ({
        ...prevState,
        tracks: {
          ...prevState.tracks,
          items: [...prevState.tracks.items, ...data.tracks.items]
        }
      }))
    }
    console.log(newOffset);
  }

  const noMoreMatches = offsetData >= apiData.tracks.total;

  return (
    <div className="bg-slate-800 min-h-screen p-8">
      <ul
      className="p-8 grid min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {apiData && [...apiData.tracks.items]
        .sort((a, b) => b.popularity - a.popularity)
        .map(item => (
          <Track key={item.id} itemData={item} />
        ))}
      </ul>
      <button
      onClick={handleShowMore}
      className={`block mx-auto rounded-full text-xl font-semibold lowercase font-manrope px-8 py-2 bg-slate-900 text-orange-200 hover:bg-orange-200 hover:text-slate-900 hover:outline hover:outline-[1px] hover:outline-orange-200 duration-300 ${noMoreMatches ? "hidden" : ""}`}
      style={{fontVariant: "small-caps"}}>
        Show More
    </button>
    {noMoreMatches && <p className="text-orange-200 font-manrope text-center font-semibold text-lg animate-fadeIn animate-bounce">
      No more tracks to show !
      </p>}
    </ div>
  )
}
