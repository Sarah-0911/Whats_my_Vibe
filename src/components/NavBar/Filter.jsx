import filter from "../../assets/filter.svg"

export default function Filter() {
  return (
    <button className="flex items-center cursor-pointer transition-all duration-300 ease-in-out group">
      <img
      className="w-6 h-5 group-hover:scale-110 duration-200"
      src={filter}
      alt="filter icon" />
      <span className="ml-1">Filter</span>
    </button>

  )
}
