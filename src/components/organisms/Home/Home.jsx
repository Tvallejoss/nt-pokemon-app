"use client";

// Hooks
import React, { useState, useEffect } from "react";
import axios from "axios";

// Config
import { API_URL, API_PORT } from "@/config/env.js";
const baseURL = `${API_URL}:${API_PORT}/pokemons`;

// Components
import Card from "@/components/atoms/Card";
import DetailedCard from "@/components/atoms/DetailedCard";

// Styles
import classes from "./Home.module.css";

const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [randomPokemon, setRandomPokemon] = useState(null);
    const [battleResult, setBattleResult] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(baseURL);
                setPokemons(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    const handleCardClick = (pokemon) => {
        setSelectedPokemon(pokemon);
        const randomIndex = Math.floor(Math.random() * pokemons.length);
        const randomPoke = pokemons[randomIndex];
        setRandomPokemon(randomPoke);
        setBattleResult(""); // Reset battle result
    };

    const handleBattle = () => {
        if (!selectedPokemon || !randomPokemon) return;

        setBattleResult("You win!");
    };

    return (
        <div className={classes["container"]}>
            <div className={classes["title"]}>
                <h3>Battle of Pokemon</h3>
            </div>
            <div className={classes["pokemon-select"]}>
                <h6>Select your Pokemon</h6>
                <div className={classes["pokemons"]}>
                    {pokemons.length > 0 ? (
                        pokemons.map((pokemon) => {
                            return (
                                <div
                                    key={pokemon.id}
                                    className={classes["pokemon-card"]}
                                    onClick={() => handleCardClick(pokemon)}
                                >
                                    <Card pokemon={pokemon} />
                                </div>
                            );
                        })
                    ) : (
                        <p>No pokemons found.</p>
                    )}
                </div>
            </div>
            {selectedPokemon && randomPokemon && (
                <>
                    {battleResult && (
                        <p className={classes["battle-result"]}>
                            {battleResult}
                        </p>
                    )}
                </>
            )}

            <div className={classes["pokemon-battle-container"]}>
                {selectedPokemon && (
                    <div className={classes["pokemon-battle-card"]}>
                        <DetailedCard pokemon={selectedPokemon} />
                    </div>
                )}

                <div className={classes["battle-section"]}>
                    {selectedPokemon && randomPokemon && (
                        <button onClick={handleBattle}>Start Battle</button>
                    )}
                </div>
                {randomPokemon && (
                    <div className={classes["pokemon-battle-card"]}>
                        <DetailedCard pokemon={randomPokemon} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
