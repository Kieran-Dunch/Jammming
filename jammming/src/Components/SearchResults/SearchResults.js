import TrackList from '../TrackList/TrackList'
import './SearchResults.css'

export default function SearchResults(props) {

  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList isRemoval={false} onAdd={props.onAdd} tracks={props.searchResults} />
    </div>
  )
}
