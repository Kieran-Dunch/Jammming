import { Component } from 'react';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [{ id: 1, name: "You got it", artist: "Hello Artist", album: "Album time" }],
      playlistName: "Kieran's fun tunes",
      playlistTracks: [{ id: 2, name: "TIME TO SHINE it", artist: "The BooBoos", album: "In the dark" }]
    }
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    this.setState({ playlistTracks: [...this.state.playlistTracks, track] })
  }

  removeTrack(track) {
    const newTracks = this.state.playlistTracks.filter(savedTrack => savedTrack.id !== track.id)
    this.setState({ playlistTracks: newTracks })
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name })
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults} />
            <Playlist onNameChange={this.updatePlaylistName} playlistName={this.state.playlistName} onRemove={this.removeTrack} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>);
  }
}
