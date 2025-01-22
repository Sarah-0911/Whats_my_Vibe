import { useContext } from "react"
import { UserContext } from "./context/UserContext";
import TracksList from "./components/TracksList";

function App () {

  const tokenData = useContext(UserContext);
  console.log(tokenData);

  return (
    <div>
      <h1 className='text-slate-800 font-bold text-xl text-center'>What&apos;s my Vibe</h1>
      {tokenData ? <TracksList accessToken={tokenData.accessToken} /> : <p>Problème de token</p>}
    </div>
  )
}

export default App
