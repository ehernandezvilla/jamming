import PropTypes from "prop-types";
import styles from '../assets/styles/Track.module.css';


function Track({ data, onAdd }) {
    return (
        <div className={styles.SongsContainer}>
            <div className={styles.SongCard}>
                <h3>{data.name}</h3>
                <p>{data.artist} | {data.album}</p>
                </div>
            <div className={styles.AddContainer}>
                <button onClick={onAdd}>+</button>
            </div>
        </div>
    );
}

Track.propTypes = {
    data: PropTypes.object,
    onAdd: PropTypes.func.isRequired,
};

export default Track;