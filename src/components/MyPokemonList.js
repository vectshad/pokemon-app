import React, { useContext } from "react";
import '../styles/PokemonList.css';
import { Link } from 'react-router-dom';
import { PokemonContext } from "../contexts/PokemonContext";

function MyPokemonList () {
    const pokemons = useContext(PokemonContext);

    // console.log(pokemons);
    return (
        <div className="PokemonList">
            <h2>My Pokemon</h2>
            <div className="Container">
                {pokemons.pokemons.length === 0 &&
                    <h3>No Pokemon !!!</h3>
                }
                {pokemons.pokemons.map((pokemon, index) => 
                    <div key={index} className="Pokemon">
                        <Link to={{pathname: `/detail/${pokemon.name}`}}>
                            <img src={pokemon.sprites.front_default} alt="pokemon"/>
                        </Link>
                        <p>{pokemon.name}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MyPokemonList;