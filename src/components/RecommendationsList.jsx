/* eslint-disable react/prop-types */
import { useEffect } from "react"
import fetchRecommendationsData from "../spotifyApi";

export default function RecommendationsList({ accessToken }) {

  useEffect(() => {
    const getRecommendations = async () => {
      const data = await fetchRecommendationsData(accessToken);
      console.log(data);
    }
    getRecommendations();
  }, [accessToken])

  return (
    <div>RecommendationsList</div>
  )
}
