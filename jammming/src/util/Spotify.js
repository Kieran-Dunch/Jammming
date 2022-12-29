let accessToken;
const client_id = "36e71b4be2834f3bae7e3479ae67bd0b";
const redirect_URI = "http://localhost:3000/";
let url = "https://accounts.spotify.com/authorize";



export const Spotify = {
  getAccessToken() {
    if (accessToken !== undefined) {
      return accessToken;
    }
    if (window.location.href.match(/access_token=([^&]*)/) && window.location.href.match(/expires_in=([^&]*)/)) {
      const params = URLSearchParams(window.location.search)
      accessToken = params.get('access_token')
      let expiresIn = params.get('expires_in')
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
    }
    // redirect to url if token not present
    window.location(`https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_URI}`)
  },

  search(searchTerm) {
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((response) => {
        return response.json
      })
      .then((data) => {
        console.log(data);
        if (data.items === undefined) {
          return [];
        }
        return data.items.map((track) => {
          return {
            id: track.id,
            name: track.name,
            artist: track.artist,
            album: track.album,
            uri: track.uri
          }
        })
      })
  }
}
