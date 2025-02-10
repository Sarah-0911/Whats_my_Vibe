import { useState } from "react";
import emptyHeart from "../../assets/emptyHeart.svg";
import fullHeart from "../../assets/fullHeart.svg";

export default function HeartIcon() {

  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <img
    className="w-3 cursor-pointer hover:scale-125 duration-200 ease-in-out"
    onClick={() => setIsFavorite(!isFavorite)}
    src={isFavorite ? fullHeart : emptyHeart}
    alt="heart icon"
    />
  )
}
