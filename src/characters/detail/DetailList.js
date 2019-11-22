import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";

export default function DetailList({ gender, species, status, episodes, location }) {
    const numberOfEpisodes = episodes.length;

    const { name: locationName } = location;

    return (
        <ListGroup>
            <ListGroup.Item>
                <b>Gender</b>: {gender}
            </ListGroup.Item>
            <ListGroup.Item>
                <b>Species</b>: {species}
            </ListGroup.Item>
            <ListGroup.Item>
                <b>Status</b>: {status}
            </ListGroup.Item>

            <ListGroup.Item>
                <b>Location</b>: {locationName}
            </ListGroup.Item>
   
            <ListGroup.Item>
                <b>Episodes</b>: {numberOfEpisodes}
                <ul>
                {episodes.map((value, index) => {
                   return <li key={index}><a href={value}>{value}</a></li>
                })}
                </ul>
          </ListGroup.Item>
        </ListGroup>
    );
}

DetailList.propTypes = {
    gender: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    episodes: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired
};