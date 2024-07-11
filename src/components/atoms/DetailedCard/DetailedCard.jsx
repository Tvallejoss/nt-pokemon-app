import React from "react";
import classes from "./DetailedCard.module.css";

const DetailedCard = ({ pokemon }) => {
    const stats = [
        { label: "HP", value: pokemon.hp },
        { label: "Attack", value: pokemon.attack },
        { label: "Defense", value: pokemon.defense },
        { label: "Speed", value: pokemon.speed },
    ];

    return (
        <div className={classes["container"]}>
            <div className={classes["card"]}>
                <div className={classes["photo"]}>
                    <img src={pokemon.imageUrl} alt={pokemon.name} />
                    <p>{pokemon.name}</p>
                </div>
                <div className={classes["stats-container"]}>
                    {stats.map((stat, index) => (
                        <div className={classes["stat"]} key={index}>
                            <p>
                                {stat.label}: {stat.value}
                            </p>
                            <div className={classes["bar-container"]}>
                                <div
                                    className={classes["bar"]}
                                    style={{
                                        width: `${(stat.value / 6) * 100}%`,
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                {/* <p>Type: {pokemon.type}</p> */}
            </div>
        </div>
    );
};

export default DetailedCard;
