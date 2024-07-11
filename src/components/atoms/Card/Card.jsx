import React from "react";

// Styles
import classes from "./Card.module.css";

const Card = ({ pokemon }) => {
    return (
        <div className={classes["card"]}>
            <img src={pokemon.imageUrl} alt={pokemon.name} />
            <h3>{pokemon.name}</h3>
        </div>
    );
};

export default Card;
