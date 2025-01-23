const fetchTracks = async (accessToken) => {
  try {
    const response = await fetch("https://api.spotify.com/v1/browse/categories/dinner", {
      headers: {
      Authorization: `Bearer ${accessToken}`
      }
    });

    if (!response.ok) throw new Error(`Erreur lors de la récupération des données`)

    const ApiData = await response.json();
    return ApiData;

  } catch (error) {
    console.log(error);
  }
}

export default fetchTracks;
