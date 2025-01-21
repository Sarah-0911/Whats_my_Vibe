/* eslint-disable no-unused-vars */
export const getVibeData = async (accessToken) => {

  const response = await fetch("https://api.spotify.com//v1/recommendations?seed_genres=classical%2Ccountry", {
    headers: {
    Authorization: 'Bearer ' + accessToken
    }
  });

  const data = await response.json();
  console.log(data);
}
