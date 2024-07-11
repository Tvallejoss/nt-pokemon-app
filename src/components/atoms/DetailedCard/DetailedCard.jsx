// Hooks
import React from "react";
import Image from "next/image";

// Styles
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
                    <Image
                        src={pokemon.imageUrl}
                        alt={pokemon.name}
                        width={100}
                        height={100}
                    />

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
