/* eslint-disable react/prop-types */
export default function Track({ itemData }) {

  console.log(itemData);

  return (
    <li className="p-2 shadow-xl bg-slate-200 rounded">
      <img
      className="rounded"
      src={itemData.album.images[1].url}
      alt={`${itemData.album.name} ${itemData.album.type}`} />
      <div className="mt-2">
        <p className="font-barlow tracking-wide font-semibold text-lg text-slate-900">{itemData.name}</p>
        <p className="font-barlow font-medium text-[#e95d41]">{itemData.artists[0].name}</p>
        <p className="mt-1">Popularité</p>
        <p className="font-barlow">Ecouter sur Spotify</p>
      </div>
    </li>
  )
}
