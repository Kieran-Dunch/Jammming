import TrackList from '../TrackList/TrackList'
import './Playlist.css'

export default function Playlist(props) {
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      <TrackList tracks={props.playlistTracks} isRemoval={true} onRemove={props.onRemove} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  )
}
