const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

const getSpotifyToken = async () => {
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

    return {
      accessToken: data.access_token,
      expiresAt: Date.now() + data.expires_in * 1000
    }

  } catch (error) {
    console.log(error);
    return null;
  }
}

export default getSpotifyToken;
