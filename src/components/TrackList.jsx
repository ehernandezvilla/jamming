import PropTypes from "prop-types";
import Track from "./Track";

function TrackList({ data, onAddSong }) {
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
