import './Track.css'

export default function Track(props) {

  const track = props.track

  const addTrack = () => {
    props.onAdd(track)
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      <button className="Track-action" onClick={addTrack}>{props.isRemoval ? "-" : "+"}</button>
    </div>
  )
}
