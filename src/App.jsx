import { useContext } from "react"
import { UserContext } from "./context/UserContext"
import SearchInput from "./components/SearchInput";

function App () {

  const tokenData = useContext(UserContext);

  return (
    <div>
      <h1 className='text-slate-800 font-bold text-xl text-center'>What&apos;s my Vibe</h1>
      {tokenData ? <SearchInput accessToken={tokenData.accessToken} /> : <p>Loading...</p>}
    </div>
  )
}

export default App
