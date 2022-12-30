let accessToken;
const client_id = "36e71b4be2834f3bae7e3479ae67bd0b";
const redirect_URI = "http://localhost:3000/";


export const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1]
      const expiresIn = Number(expiresInMatch[1])
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken
    } else {
      window.location.replace(`https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_URI}`)
    };
  },

  search(searchTerm) {
    const accessToken = this.getAccessToken()
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        if (!data.tracks) {
          return [];
        }
        return data.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album,
          uri: track.uri
        }));
      });
  },

  async savePlaylist(playlistName, trackURIs) {
    if (!playlistName || !trackURIs.length) { return; }

    const accessToken = this.getAccessToken()
    const headers = { Authorization: `Bearer ${accessToken}` }
    let userId;
    let playlistId;

    await fetch('https://api.spotify.com/v1/me', { headers: headers })
      .then((response) => {
        return response.json()
      }).then((data) => {
        userId = data.id
      })

    await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`,
      {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({ name: playlistName })
      }
    ).then((response) => {
      return response.json()
    }).then((data) => {
      console.log(data);
      data.id = playlistId
    })
    console.log(playlistId);

    await fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
      {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({ uris: trackURIs })
      }
    )
  }
}
