const fetchTracks = async (accessToken) => {
  try {
    const response = await fetch("https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl", {
      headers: {
      Authorization: `Bearer ${accessToken}`
      }
    });

    if (!response.ok) throw new Error(`Erreur lors de la récupération des données`)

    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.log(error);
  }
}

export default fetchTracks;
