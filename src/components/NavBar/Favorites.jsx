// import fullHeart from "../../assets/fullHeart.svg"
import emptyHeart from "../../assets/emptyHeart.svg"

export default function Favorites() {
  return (
        <div>
          <button className="flex items-center gap-1 cursor-pointer group">
            <img className="w-5 h-4 group-hover:scale-110 duration-200" src={emptyHeart} alt="heart icon" />
            <span className="uppercase text-sm sm:text-base">Favorites</span>
          </button>
        </div>
  )
}
