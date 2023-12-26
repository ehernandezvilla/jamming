import {useState} from 'react';
import Proptypes from 'prop-types';


function SearchBar( { onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
        // if (searchTerm === '') {
        //     setSearchTerm('')
        // }
    }

    return (
        <div className="SearchBar">
            <input 
                placeholder="Enter A Song, Album, or Artist" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="SearchButton" onClick={handleSearch}>Search</button>
        </div>
    );
}


SearchBar.propTypes = {
    onSearch: Proptypes.func.isRequired,
}

export default SearchBar;