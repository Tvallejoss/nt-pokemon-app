// Hooks
import React from "react";

// Styles
import classes from "./DetailedCard.module.css";

const DetailedCard = ({ pokemon }) => {
    return (
        <div className={classes["card"]}>
            <img src={pokemon.imageUrl} alt={pokemon.name} />
            <p>{pokemon.name}</p>
            <p>Attack: {pokemon.attack}</p>
            <p>Defense: {pokemon.defense}</p>
            <p>HP: {pokemon.hp}</p>
            <p>Speed: {pokemon.speed}</p>
            <p>Type: {pokemon.type}</p>
        </div>
    );
};

export default DetailedCard;
