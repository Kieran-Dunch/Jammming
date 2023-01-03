import { Component } from 'react';
import { Spotify } from '../../util/Spotify';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [],
      playlistName: "New Playlist",
      playlistTracks: []
    }
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search = this.search.bind(this)
  };

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    this.setState({ playlistTracks: [...this.state.playlistTracks, track] })
  };

  removeTrack(track) {
    const newTracks = this.state.playlistTracks.filter(savedTrack => savedTrack.id !== track.id)
    this.setState({ playlistTracks: newTracks })
  };

  updatePlaylistName(name) {
    this.setState({ playlistName: name })
  };

  savePlaylist() {
    const trackURIS = this.state.playlistTracks.map(track => track.uri)
    Spotify.savePlaylist(this.state.playlistName, trackURIS).then(() => { this.setState({ playlistName: "New Playlist", playlistTracks: [] }) })
  };

  async search(query) {
    Spotify.search(query).then((results) => {
      this.setState({ searchResults: results })
    })
  };

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults} />
            <Playlist onSave={this.savePlaylist} onNameChange={this.updatePlaylistName} playlistName={this.state.playlistName} onRemove={this.removeTrack} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>);
  }
}
