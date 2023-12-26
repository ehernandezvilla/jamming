import PropTypes from "prop-types";
import Track from "./Track";
import styles from '../assets/styles/TrackList.module.css';

function TrackList({ data, onAddSong }) {

  if (data.songs.length === 0) {
      return (
        <>
          <div>
            <h3 className={styles.NotFound}>No results found</h3>
          </div>
        </>
          );
    } else {
      return (
        <>
          <div>
            {data.songs.map((song) => (
              <Track key={song.id} data={song} onAdd={() => onAddSong(song)} />
            ))}
          </div>
        </>
          );
    }
  
}

TrackList.propTypes = {
  data: PropTypes.shape({
    songs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        album: PropTypes.string,
        artist: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
  onAddSong: PropTypes.func.isRequired,
};

export default TrackList;
