import TrackList from '../TrackList/TrackList'
import './Playlist.css'

export default function Playlist(props) {

  const handleNameChange = (e) => {
    props.onNameChange(e.target.value)
  };

  return (
    <div className="Playlist">
      <input onChange={handleNameChange} defaultValue={"New Playlist"} />
      <TrackList tracks={props.playlistTracks} isRemoval={true} onRemove={props.onRemove} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  )
}
