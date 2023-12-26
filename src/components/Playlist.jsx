import PropTypes from 'prop-types';
import styles from '../assets/styles/Playlist.module.css';


function Playlist({ selectedSongs }) {
        return (
            <>
            <h2>Playlist</h2>
            <input placeholder="New Playlist"></input>
            {selectedSongs.map((song) => (
                <div key={song.id}>
                    <p>{song.name} | {song.artist} | {song.album}</p><button className="RemoveButton">-</button>
                    <hr></hr>
                </div>
            )
            )}
            <button className={styles.SaveButton}>Save to Spotify</button>
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