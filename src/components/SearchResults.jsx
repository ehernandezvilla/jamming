import TrackList from "./TrackList";
import PropTypes from 'prop-types';

function SearchResults({ data }) {
    return (
        <div className="SearchResults">
        <h2>Results</h2>
        <h3>Search Results component</h3>
        <TrackList data = {data} />
        </div>
    );
}

SearchResults.propTypes = {
    data: PropTypes.object.isRequired
}


export default SearchResults;