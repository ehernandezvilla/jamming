import PropTypes from 'prop-types';


function Playlist({ selectedSongs }) {
    return (
        <>
        <h3>Playlist</h3>
        {selectedSongs.map((song) => (
            <div key={song.id}>
                <p>{song.name} | {song.artist} | {song.album}</p>
                <hr></hr>
            </div>
        )
        )}
        <button className="SaveButton">Save to Spotify</button>
        </>
    );
}

Playlist.propTypes = {
    selectedSongs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            album: PropTypes.string,
            artist: PropTypes.string
        })
    ).isRequired
};

export default Playlist;