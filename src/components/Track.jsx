/* eslint-disable react/prop-types */
export default function Track({ itemData }) {

  console.log(itemData);

  return (
    <li>
      <img src={itemData.album.images[0].url} alt="" />
      <p>{itemData.album.album_type}</p>
    </li>
  )
}
