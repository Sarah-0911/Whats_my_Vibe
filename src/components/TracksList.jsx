import Track from "./Track"

export default function TracksList({ apiData }) {

  apiData && console.log(apiData.tracks.items);

  return (
    <>
      {apiData && apiData.tracks.items.map(item => (
        <Track key={item.id} itemData={item} />
      ))}
    </>
  )
}
