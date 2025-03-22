import { useState, useEffect, useRef } from "react";
import { DataContext, UIContext } from "./UserContext";
import getSpotifyToken from "../utils/spotifyAuth"

export default function AppContextProvider(props) {
  // Données API
  const [apiData, setApiData] = useState(null);
  const [tokenData, setTokenData] = useState(null);

  // UI state
  const [searchQuery, setSearchQuery] = useState("");
  const [loader, setLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [sortCategory, setSortCategory] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const mainRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const fetchToken = async () => {
      if (tokenData && tokenData.expiresAt > Date.now()) {
        // console.log("Token valide, pas besoin de le renouveler");
        return;
      }
      const { accessToken, expiresAt } = await getSpotifyToken();
      if (isMounted) setTokenData({ accessToken, expiresAt });
    }
    fetchToken()

    return () => {
      isMounted = false;
    }
  }, [tokenData])

  return (
    <DataContext.Provider value={{ apiData, setApiData, tokenData }}>
      <UIContext.Provider value={{ 
        searchQuery, 
        setSearchQuery, 
        loader, 
        setLoader, 
        errorMsg, 
        setErrorMsg,
        sortCategory,
        setSortCategory,
        mainRef,
        showPopup,
        setShowPopup
      }}>
        {props.children}
      </UIContext.Provider>
    </DataContext.Provider>
  )
}
