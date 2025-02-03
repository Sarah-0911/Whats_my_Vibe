import ProgressBar from "./ProgressBar";

export default function Track({ itemData }) {

  // console.log(itemData);

  return (
    <li className="p-2 shadow-xl bg-slate-200 rounded overflow-hidden">
      <img
      className="rounded mx-auto"
      src={itemData.album.images[1].url}
      alt={`${itemData.album.name} ${itemData.album.type}`} />
      <div className="mt-2">
        <p className="font-barlow tracking-wide font-semibold text-lg text-slate-900">{itemData.name}</p>
        <p className="font-barlow font-medium text-[#e95d41]">{itemData.artists[0].name}</p>
        <ProgressBar popularity={itemData.popularity} />
        <a
        href={itemData.external_urls.spotify}
        target="_blank"
        className="flex max-w-24 items-center justify-center gap-2 mt-4 mb-1 font-barlow uppercase text-sm font-semibold border rounded-full px-3 py-2 bg-slate-800 text-orange-200 hover:bg-slate-900 hover:-translate-y-0.5 duration-300"
        rel="noopener noreferrer">
          play on
          <img className="w-5 h-5" src="images/spotify.png" alt="spotify icon" />
        </a>
      </div>
    </li>
  )
}
