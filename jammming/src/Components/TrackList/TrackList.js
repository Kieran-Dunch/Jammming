import Track from '../Track/Track'
import './TrackList.css'

export default function TrackList(props) {
  const tracks = props.tracks
  return (
    <div className="TrackList">
      {console.log(tracks)}
      {tracks.map((track) => {
        return <Track isRemoval={props.isRemoval} key={track.id} track={track} onAdd={props.onAdd} />
      })}
    </div>
  )
}
