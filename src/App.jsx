import SearchInput from "./components/SearchInput";

function App () {

  return (
    <div className="m-4">
      <div className="text-center">
        <h1 className='text-slate-800 uppercase font-manrope font-bold text-4xl tracking-wider'>Track Hunt</h1>
        <p className="font-barlow italic text-4xl font-light">dive into the music</p>
      </div>
      <SearchInput />
    </div>
  )
}

export default App
