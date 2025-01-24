/* eslint-disable react/prop-types */
export default function Track({ itemData }) {

  console.log(itemData);

  return (
    <li className="p-2">
      <img
      className="rounded"
      src={itemData.album.images[1].url}
      alt={`${itemData.album.name} ${itemData.album.type}`} />
      <div className="mt-2">
        <p className="font-manrope font-semibold">{itemData.name}</p>
        <p className="font-barlow">{itemData.artists[0].name}</p>
        <p>Popularité</p>
        <p className="font-barlow">Ecouter sur Spotify</p>
      </div>
    </li>
  )
}
