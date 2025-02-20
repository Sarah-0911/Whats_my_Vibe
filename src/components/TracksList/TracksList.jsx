import Track from "./Track"
import { useState, useContext } from "react"
import { UserContext } from "../../context/UserContext";
import fetchTracks from "../../utils/spotifyApi"

export default function TracksList () {

  const [offsetData, setOffsetData] = useState(0);
  const { tokenData, searchQuery, apiData, setApiData, sortCategory } = useContext(UserContext);

  const sortedTracks = apiData ? [...apiData.tracks.items].sort((a, b) => {
    switch(sortCategory) {
      case "popularity":
        return b.popularity - a.popularity;
      case "artist":
        return a.artists[0].name.localeCompare(b.artists[0].name);
      case "track":
        return a.name.localeCompare(b.name);
      case "album":
        return a.album.name.localeCompare(b.album.name);
      default:
        return 0;
    }
  }) : [];

  const handleShowMore = async() => {
    console.log({searchQuery});
    const newOffset = offsetData + 10;
    setOffsetData(newOffset);

    if (searchQuery){
      const data = await fetchTracks(tokenData.accessToken, searchQuery, newOffset);

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
    <div>
      <ul
      className="px-12 pt-2 pb-8 grid min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {sortedTracks.map(item => (
          <Track key={item.id} itemData={item} />
        ))}
      </ul>
      <button
      onClick={handleShowMore}
      className={`block mx-auto relative mt-4 rounded-full z-50 text-xl font-semibold lowercase font-manrope px-8   py-2 bg-slate-900 text-orange-200 overflow-hidden
      before:absolute before:inset-0 before:bg-orange-200
      before:w-0 before:duration-500 before:ease-in-out
      hover:before:w-full hover:text-slate-900 ${noMoreMatches ? "hidden" : ""}`}
      style={{fontVariant: "small-caps"}}>
        <span className="relative z-10">Show More</span>
      </button>
      {noMoreMatches &&
      <p className="text-orange-200 font-manrope text-center font-semibold text-lg animate-fadeIn animate-bounce">
        No more tracks to show !
      </p>}
    </ div>
  )
}
