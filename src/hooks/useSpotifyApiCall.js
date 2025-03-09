// import { useState, useEffect } from "react";

// const useSpotifyApiCall = (accessToken, userInput, offsetValue = 0) => {

//     const [tracks, setTracks] = useState([]);
//     const [totalTracks, setTotalTracks] = useState(0);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [hasMore, setHasMore] = useState(true);

//     useEffect(() => {
//         const fetchTracks = async() => {
//             if (!userInput || !accessToken) return;

//             setLoading(true);
//             try {
//                 const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(userInput)}&type=track&offset=${offsetValue}&include_external=audio`, {
//                     headers: {
//                         Authorization: `Bearer ${accessToken}`
//                     }
//                 });

//                 if (!response.ok) throw new Error(`Erreur lors de la récupération des données`);

//                 const data = await response.json();
                
//                 setTracks(prevTracks => [...prevTracks, ...data.tracks.items]);
//                 setTotalTracks(data.tracks.total);
//                 setHasMore(data.tracks.items.length === 20);
//                 setLoading(false);

//             } catch (error) {
//                 setError(error);
//                 setLoading(false);
//             }
//         }

//         fetchTracks();

//     }, [accessToken, userInput, offsetValue]);

//     return { tracks, totalTracks, loading, error, hasMore };
// }

// export default useSpotifyApiCall;