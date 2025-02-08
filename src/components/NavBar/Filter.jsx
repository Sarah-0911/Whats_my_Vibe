import filter from "../../assets/filter.svg"

export default function Filter() {
  return (
    <div>
      <button className="flex items-center text-orange-200 cursor-pointer">
        <img className="w-5 h-4" src={filter} alt="filter icon" />
        <span>Filter</span>
      </button>
    </div>
  )
}
