import './Track.css'

export default function Track(props) {

  const isRemoval = false
  const track = props.track
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      <button className="Track-action">{isRemoval ? "+" : "-"}</button>
    </div>
  )
}
