import './SearchBar.css'
import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.search = this.search.bind(this)
    this.handleQueryChange = this.handleQueryChange.bind(this)
    this.state = { query: localStorage.getItem('query') }
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
        <input onChange={this.handleQueryChange} placeholder="Enter A Song, Album, or Artist" value={this.state.query} />
        <button onClick={this.search} className="SearchButton">SEARCH</button>
      </div>
    )
  }
}
