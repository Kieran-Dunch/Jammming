import Track from '../Track/Track'
import './TrackList.css'

export default function TrackList(props) {
  const tracks = props.tracks
  return (
    <div className="TrackList">
      {tracks.map((track) => {
        return <Track key={track.id} track={track} />
      })}
    </div>
  )
}
