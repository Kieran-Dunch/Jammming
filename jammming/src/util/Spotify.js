let accessToken;
const client_id = "36e71b4be2834f3bae7e3479ae67bd0b";
const redirect_URI = "http://localhost:3000/";
let url = 'https://accounts.spotify.com/authorize'


export const Spotify = {
  getAccessToken() {
    if (accessToken !== undefined) {
      return accessToken;
    }
    if (window.location.href.match(/access_token=([^&]*)/) && window.location.href.match(/expires_in=([^&]*)/)) {
      accessToken = "lol"
      let expiresIn;
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
    }
  }
}
