import PropTypes from "react";


function Track({ data }) {
    return (
        <div className="Song">
        <div className="SongInformation">
            <h3>{data.name}</h3>
            <p>artist | album</p>
        </div>
        </div>
    );
}

Track.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Track;