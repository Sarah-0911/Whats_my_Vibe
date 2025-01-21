/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import { getSpotifyToken } from "./spotifyAuth"

function App() {

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSpotifyToken();
      console.log(data);
      const response = fetch()
      
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1 className='text-slate-800 font-bold text-xl text-center'>What&apos;s my Vibe</h1>
    </div>
  )
}

export default App
