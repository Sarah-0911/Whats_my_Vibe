/* eslint-disable react/prop-types */
import { useEffect } from "react"
import fetchTracks from "../utils/spotifyApi";

export default function TracksList({ accessToken }) {

  // useEffect(() => {
  //   const getTracks = async () => {
  //     const data = await fetchTracks(accessToken);
  //     console.log(data);
  //   }
  //   getTracks();
  // }, [accessToken])

  return (
    <div>TracksList</div>
  )
}
