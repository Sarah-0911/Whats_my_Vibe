import AlbumIcon from "./AlbumIcon";

export default function FilterItem({ name, Icon }) {


  return (
    <button
    className="group flex flex-col items-center bg-slate-200 hover:bg-slate-300 justify-center gap-2 w-24 h-24 p-4 rounded border transition-all duration-300 ease-in-out">
      <span className="text-gray-800 group-hover:text-orange-500 transition-all duration-300 ease-in-out">
        <Icon />
      </span>
      <p className="font-sans font-normal text-sm text-slate-900 tracking-wide group-hover:text-orange-500 transition-all duration-300 ease-in-out">
        {name}
      </p>
    </button>
  )
}
