let accessToken;
const client_id = "36e71b4be2834f3bae7e3479ae67bd0b";
const redirect_URI = "http://localhost:3000/";


export const Spotify = {
  getAccessToken() {

    if (accessToken !== undefined) {
      return accessToken;
    }
    if (window.location.href.match(/access_token=([^&]*)/) && window.location.href.match(/expires_in=([^&]*)/)) {
      // look at tutorial for this one
      const params = window.location.href.split('#')[1].split('&')
      accessToken = params[0].split('=')[1]
      let expiresIn = params[2].split('=')[1]
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
    }
    if (accessToken === undefined && !window.location.href.match(/access_token=([^&]*)/)) {
      window.location.replace(`https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_URI}`)
    }
  },

  async search(searchTerm) {
    this.getAccessToken()
    const tracks = await fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        if (data.tracks.items === undefined) {
          return [];
        }
        return data.tracks.items.map((track) => {
          return {
            id: track.id,
            name: track.name,
            artist: track.artist,
            album: track.album,
            uri: track.uri
          }
        })
      })
    return tracks;
  }
}
