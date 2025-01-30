import Track from "./Track"

export default function TracksList({ apiData }) {

  // apiData && console.log(apiData.tracks.items);

  return (
    <ul
    className="p-8 grid min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
      {apiData && apiData.tracks.items.map(item => (
        <Track key={item.id} itemData={item} />
      ))}
    </ul>
  )
}
