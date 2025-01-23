/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import fetchTracks from "../utils/spotifyApi";

export default function TracksList({ accessToken }) {

  const [apiData, setApiData] = useState(null);

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

  return (
    <div>
      {apiData && <ul>
        <li>
          <p>{apiData.name}</p>
          <img src={apiData.icons[0].url} alt="" />
        </li>
      </ul>}
    </div>
  )
}
