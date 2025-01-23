/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import getSpotifyToken from "../utils/spotifyAuth"
import fetchTracks from "../utils/spotifyApi";

export default function UserContextProvider(props) {

  const [tokenData, setTokenData] = useState(null);
  const [apiData, setApiData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

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

  useEffect(() => {
    const fetchApiData = async() => {
      if (!tokenData || !tokenData.accessToken || !searchQuery) return;

      const data = await fetchTracks(tokenData.accessToken, searchQuery);
      setApiData(data);
    }
    fetchApiData()
  }, [tokenData, searchQuery])


  return (
    <UserContext.Provider value={{ tokenData, apiData, searchQuery, setSearchQuery }}>
      {props.children}
    </UserContext.Provider>
  )
}
