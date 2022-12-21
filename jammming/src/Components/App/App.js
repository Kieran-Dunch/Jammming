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
    this.addTrack.bind(this)
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    this.setState({ playlistTracks: [...track] })
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>);
  }
}
