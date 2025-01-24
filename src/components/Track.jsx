/* eslint-disable react/prop-types */
export default function Track({ itemData }) {

  console.log(itemData);

  return (
    <li>
      <img
      className="rounded w-60"
      src={itemData.album.images[1].url}
      alt={`${itemData.album.name} ${itemData.album.type}`} />
      <p>{itemData.name}</p>
      <p>{itemData.artists[0].name}</p>
    </li>
  )
}
