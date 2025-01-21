/* eslint-disable react/prop-types */
import { useEffect } from "react"
import fetchTracks from "../utils/spotifyApi";

export default function TracksList({ accessToken }) {

  console.log(accessToken);

  useEffect(() => {
    const getTracks = async () => {
      await fetchTracks(accessToken);
    }
    getTracks();
  }, [accessToken])

  return (
    <div>TracksList</div>
  )
}
