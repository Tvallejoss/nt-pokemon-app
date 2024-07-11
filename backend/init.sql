-- init.sql

USE pokemon_app;

-- Crear la tabla 'pokemon' si no existe
CREATE TABLE IF NOT EXISTS pokemon (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    attack INT NOT NULL,
    defense INT NOT NULL,
    hp INT NOT NULL,
    speed INT NOT NULL,
    type VARCHAR(255) NOT NULL,
    imageUrl VARCHAR(255) NOT NULL
);


INSERT INTO pokemon (name, attack, defense, hp, speed, type, imageUrl)
VALUES
    ('Pikachu', 4, 3, 3, 6, 'Type', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png'),
    ('Charmander', 4, 3, 3, 4, 'Type', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png'),
    ('Squirtle', 3, 4, 3, 3, 'Type', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png'),
    ('Bulbasur', 4, 3, 3, 3, 'Type', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png'),
    ('Eevee', 4, 3, 4, 5, 'Type', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png');
