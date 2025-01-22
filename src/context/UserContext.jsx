/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { getSpotifyToken } from "../utils/spotifyAuth"

export const UserContext = createContext();

export default function UserContextProvider(props) {

  const [tokenData, setTokenData] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      if (tokenData && tokenData.expiresAt > Date.now()) {
        // console.log("Token valide, pas besoin de le renouveler");
        return;
      }
      const { accessToken, expiresAt } = await getSpotifyToken();
      if (isMounted) setTokenData({ accessToken, expiresAt });
    }

    fetchData()

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
