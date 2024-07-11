// Hooks
import React from "react";
import Image from "next/image";

// Styles
import classes from "./Card.module.css";

const Card = ({ pokemon }) => {
    return (
        <div className={classes["card"]}>
            <Image
                src={pokemon.imageUrl}
                alt={pokemon.name}
                width={100}
                height={100}
            />
            {/* <h3>{pokemon.name}</h3> */}
        </div>
    );
};

export default Card;
