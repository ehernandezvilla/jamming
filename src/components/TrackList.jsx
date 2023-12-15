import PropTypes from "prop-types";
import Track from "./Track";

function TrackList({ data }) {
  return (
    <>
        <div>
        {data.songs.map((song) => (
           <Track key={song.id} data={song} />
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
                artist: PropTypes.string
            })
        )
    }).isRequired,
};

export default TrackList;
