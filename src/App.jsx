/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import { getSpotifyToken } from "./spotifyAuth"
import RecommendationsList from "./components/RecommendationsList";
import { data } from "autoprefixer";

function App() {

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSpotifyToken();
      console.log(data);
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1 className='text-slate-800 font-bold text-xl text-center'>What&apos;s my Vibe</h1>
      <RecommendationsList accessToken={data.access_token} />
    </div>
  )
}

export default App
