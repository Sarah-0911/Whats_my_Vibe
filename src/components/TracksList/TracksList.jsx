import Track from "./Track"
import { useState, useEffect, useContext, useRef } from "react"
import { UserContext } from "../../context/UserContext";

export default function TracksList () {

  const [hasMoreTracks, setHasMoreTracks] = useState(true);
  const { apiData, sortCategory } = useContext(UserContext);

  console.log(apiData);
  

  const tracksListRef = useRef(null);
  const newTracksRef = useRef(null);

  const sortFunctions = {
    popularity: (a, b) => (b?.popularity || 0) - (a?.popularity || 0),
    artist: (a, b) => (a?.artists?.[0]?.name || '').localeCompare(b?.artists?.[0]?.name || ''),
    track: (a, b) => (a?.name || '').localeCompare(b?.name || ''),
    album: (a, b) => (a?.album?.name || '').localeCompare(b?.album?.name || '')
  };

  const sortedTracks = apiData?.tracks?.items 
  ? [...apiData.tracks.items].sort(sortFunctions[sortCategory] || (() => 0))
  : [];

  useEffect(() => {
    if (sortCategory && tracksListRef?.current) {
      requestAnimationFrame(() => {
        const yOffset = -100;
        const element = tracksListRef.current;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      });
    }
  }, [sortCategory, sortedTracks]);

  return (
    <div ref={tracksListRef}>
      <ul
      className="px-8 pt-2 pb-8 grid grid-cols-2 min-[450px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {sortedTracks.map(item => (
          <Track key={item.id} itemData={item} />
        ))}
      </ul>
      <div ref={newTracksRef} className="pt-4">
      {!hasMoreTracks &&
      <p className="text-orange-200 font-manrope text-center font-semibold text-lg animate-fadeIn animate-bounce">
        No more tracks to show !
      </p>}
      </div>
    </ div>
  )
}
