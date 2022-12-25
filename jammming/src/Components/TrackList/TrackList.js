import Track from '../Track/Track'
import './TrackList.css'

export default function TrackList(props) {
  const tracks = props.tracks
  return (
    <div className="TrackList">
      {tracks.map((track) => {
        return <Track isRemoval={props.isRemoval} key={track.id} track={track} onAdd={props.onAdd} onRemove={props.onRemove} />
      })}
    </div>
  )
}
