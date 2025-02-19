import ProgressBar from "./ProgressBar";
import HeartIcon from "./HeartIcon"

export default function Track({ itemData }) {

  // console.log(itemData);

  return (
    <li className="flex flex-col p-4 pb-2 overflow-hidden bg-gradient-to-b from-slate-600 to-black rounded-lg transition-all duration-300">
      <img
      className="rounded-sm mx-auto shadow-md shadow-slate-900"
      src={itemData.album.images[1].url}
      alt={`${itemData.album.name} ${itemData.album.type}`}
      />
      <div className="mt-4 flex flex-col grow justify-between">
        <div>
          <div className="flex justify-between items-baseline">
          <p className="font-dot text-sm font-medium text-orange-200">{itemData.name}</p>
          <HeartIcon />
          </div>
          <p className="font-barlow tracking-wide font-medium text-sm text-slate-200 mt-1">{itemData.artists[0].name}</p>
          <ProgressBar popularity={itemData.popularity} />
        </div>
        <div>
          <a
          href={itemData.external_urls.spotify}
          target="_blank"
          className="flex items-center gap-2 mt-4 mb-1 font-poiret tracking-wider text-sm font-semibold pb-2 text-orange-200 hover:-translate-y-0.5 duration-300"
          rel="noopener noreferrer">
            Play on
            <img className="w-5 h-5" src="images/spotify.png" alt="spotify icon" />
          </a>
        </div>
      </div>
    </li>
  )
}
