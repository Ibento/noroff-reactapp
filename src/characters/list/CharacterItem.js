import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CharacterList.css";

function CharacterItem({ id, name, image, history }) {
    return (
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Button variant="secondary" block onClick={() => history.push(`/character/${id}`)}>
                    View
                </Button>
            </Card.Body>
        </Card>
    );
}

CharacterItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired
};

export default withRouter(CharacterItem);