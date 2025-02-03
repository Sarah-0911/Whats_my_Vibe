const fetchTracks = async (accessToken, userInput, offsetValue = 0) => {
  try {
    const response = await fetch(`https://api.spotify.com/v1/search?q=${userInput}&type=track&limit=10&offset=${offsetValue}&include_external=audio`, {
      headers: {
      Authorization: `Bearer ${accessToken}`
      }
    });

    if (!response.ok) throw new Error(`Erreur lors de la récupération des données`)

    const apiData = await response.json();
    return apiData;

  } catch (error) {
    console.log(error);
  }
}

export default fetchTracks;
