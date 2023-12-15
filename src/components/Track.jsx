import PropTypes from "prop-types";


function Track({ data }) {
    return (
        <div className="Song">
            <div>
                <h3>{data.name}</h3>
                <p>{data.artist} | {data.album}</p>
            </div>
        </div>
    );
}

Track.propTypes = {
    data: PropTypes.object,
};

export default Track;