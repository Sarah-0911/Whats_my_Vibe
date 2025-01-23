/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { getSpotifyToken } from "../utils/spotifyAuth"
import { UserContext } from "./UserContext";

export default function UserContextProvider(props) {

  const [tokenData, setTokenData] = useState(null);

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
    <UserContext.Provider value={tokenData}>
      {props.children}
    </UserContext.Provider>
  )
}
