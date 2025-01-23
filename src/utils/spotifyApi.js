const fetchTracks = async (accessToken, userInput) => {
  try {
    const response = await fetch(`https://api.spotify.com/v1/search?q=${userInput}&type=track&market=FR&limit=5&include_external=audio`, {
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
