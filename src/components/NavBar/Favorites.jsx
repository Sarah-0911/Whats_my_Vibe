import fullHeart from "../../assets/fullHeart.svg"


export default function Favorites() {
  return (
        <div>
          <button className="flex items-center gap-1 text-orange-200 cursor-pointer">
            <img className="w-4 h-3" src={fullHeart} alt="heart icon" />
            <span>Favorites</span>
          </button>
        </div>
  )
}
