import { useState } from "react";
import ProgressBar from "./ProgressBar";
import HeartIcon from "./HeartIcon"
import neutralVinyl from "../../assets/neutralVinyl.jpg"
import spotifyIcon from "../../assets/spotify.png"
// import vinyl from "../../assets/vinyl.svg"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export default function Track({ itemData }) {
  
  const [isLoading, setIsLoading] = useState(true);

  const dotLottie = <DotLottieReact 
    src="https://lottie.host/593cfd5d-abe7-41cd-9690-959b0c86eae6/bfjcuW1s4G.lottie" 
    loop 
    autoplay />
  
  const imageUrl = itemData?.album?.images?.[1]?.url || neutralVinyl;
  const albumName = itemData?.album?.name || 'Album';
  const albumType = itemData?.album?.type || 'album';


  return (
    <li className="flex flex-col p-4 pb-2 overflow-hidden rounded bg-[hsl(0,0%,12%)] transition-all duration-300">
      <div className="w-full flex items-center justify-center aspect-square bg-[hsl(0,0%,15%)] rounded-sm">
        <img
          className={`w-full h-full object-cover rounded-sm mx-auto shadow-lg shadow-slate-950 transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
          src={imageUrl}
          alt={`${albumName} ${albumType}`}
          onLoad={() => setIsLoading(false)}
        />
      </div>

      <div className="mt-4 flex flex-col grow justify-between">
        <div>
          <div className="flex justify-between items-baseline">
            <p className="font-dot text-sm font-medium text-orange-200">{itemData?.name || 'Unknown Track'}</p>
            <HeartIcon />
          </div>
          <p className="font-barlow tracking-wide font-medium text-sm text-slate-200 mt-1">{itemData?.artists?.[0]?.name || 'Unknown Artist'}</p>
          <ProgressBar popularity={itemData?.popularity} />
        </div>
        <div>
          <a
            href={itemData?.external_urls?.spotify || '#'}
            target="_blank"
            className="flex items-center gap-2 mt-4 mb-1 font-poiret tracking-wider text-sm font-semibold pb-2 text-orange-200 hover:-translate-y-0.5 duration-300"
            rel="noopener noreferrer">
            Play on
            <img className="w-5 h-5" src={spotifyIcon} alt="spotify icon" />
          </a>
        </div>
      </div>
    </li>
  )
}


// #6F988A (vert wtsa)
