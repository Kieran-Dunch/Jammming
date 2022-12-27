import './SearchBar.css'
import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.search = this.search.bind(this)
    this.handleQueryChange = this.handleQueryChange.bind(this)
    this.state = { query: "testing" }
  }

  handleQueryChange(e) {
    this.setState({ query: e.target.value })
  }

  search() {
    this.props.onSearch(this.state.query)
  }

  render() {
    return (
      <div className="SearchBar">
        <input onChange={this.handleQueryChange} placeholder="Enter A Song, Album, or Artist" />
        <button onClick={this.search} className="SearchButton">SEARCH</button>
      </div>
    )
  }
}
