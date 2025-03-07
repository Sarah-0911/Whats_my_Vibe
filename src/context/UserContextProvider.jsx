import { useState, useEffect, useRef } from "react";
import { UserContext } from "./UserContext";
import getSpotifyToken from "../utils/spotifyAuth"

export default function UserContextProvider(props) {

  const [apiData, setApiData] = useState(null);
  const [tokenData, setTokenData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [loader, setLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [sortCategory, setSortCategory] = useState(null);
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
    <UserContext.Provider value={{ tokenData, apiData, setApiData, loader, setLoader, errorMsg, setErrorMsg, searchQuery, setSearchQuery, sortCategory, setSortCategory, mainRef }}>
      {props.children}
    </UserContext.Provider>
  )
}
