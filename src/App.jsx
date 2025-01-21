/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import { getSpotifyToken } from "./utils/spotifyAuth"
import TracksList from "./components/TracksList";

function App() {

  const [tokenData, setTokenData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (tokenData && tokenData.expiresAt > Date.now()) {
        console.log("Token valide, pas besoin de le renouveler");
        return;
      }
      const newTokenData = await getSpotifyToken();
      setTokenData(newTokenData);
    }
    fetchData()

  }, [tokenData])

  return (
    <div>
      <h1 className='text-slate-800 font-bold text-xl text-center'>What&apos;s my Vibe</h1>
      {tokenData && <TracksList accessToken={tokenData.accessToken} />}
    </div>
  )
}

export default App
