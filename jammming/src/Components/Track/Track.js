import './Track.css'
import React, { Component } from 'react'

export default class Track extends Component {

  constructor(props) {
    super(props)
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
  }

  addTrack() {
    this.props.onAdd(this.props.track)
  };

  removeTrack() {
    this.props.onRemove(this.props.track)
  }

  render() {

    const track = this.props.track

    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{track.name}</h3>
          <p>{track.artist} | {track.album}</p>
        </div>
        {!this.props.isRemoval && <button className="Track-action" onClick={this.addTrack}>+</button>}
        {this.props.isRemoval && <button className="Track-action" onClick={this.removeTrack}>-</button>}
      </div>
    )
  }
}
