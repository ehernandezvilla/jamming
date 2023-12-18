import TrackList from "./TrackList";
import PropTypes from 'prop-types';

function SearchResults({ data, onAddSong }) {
    return (
        <div className="SearchResults">
        <h2>Results</h2>
        <h3>Search Results component</h3>
        <TrackList data = {data} onAddSong={onAddSong}/>
        </div>
    );
}

SearchResults.propTypes = {
    data: PropTypes.shape({
        songs: PropTypes.array.isRequired
    }).isRequired,
    onAddSong: PropTypes.func.isRequired,
};


export default SearchResults;