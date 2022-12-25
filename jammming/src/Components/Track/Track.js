import './Track.css'
import React, { Component } from 'react'

export default class Track extends Component {

  constructor(props) {
    super(props)
    this.addTrack = this.addTrack.bind(this)
  }

  addTrack() {
    this.props.onAdd(this.props.track)
  };

  render() {

    const track = this.props.track

    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{track.name}</h3>
          <p>{track.artist} | {track.album}</p>
        </div>
        <button className="Track-action" onClick={this.addTrack}>{this.props.isRemoval ? "-" : "+"}</button>
      </div>
    )
  }
}
