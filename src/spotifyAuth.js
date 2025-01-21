const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

export const getSpotifyToken = async () => {
  const url = "https://accounts.spotify.com/api/token";

  const authOptions = {
    method: "POST",
    headers: {
      "Authorization": "Basic " + (btoa(`${clientId}:${clientSecret}`)),
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials'
    })
  }

  try {
    const response = await fetch(url, authOptions);
    if (!response.ok) throw new Error(`Erreur lors de la récupération du token`)
    const data = await response.json();
    return data;

  } catch (error) {
    console.log(error);
  }
}
