import React, { useContext } from "react";
import '../styles/PokemonList.css';
import { Link } from 'react-router-dom';
import { PokemonContext } from "../contexts/PokemonContext";

function MyPokemonList () {
    const pokemons = useContext(PokemonContext);
    const { handleRelease } = useContext(PokemonContext);
    
    const handleClick = (e) => {
        e.preventDefault();
        handleRelease(e.target.value)
    }

    return (
        <div className="PokemonList">
            <h2>My Pokemon</h2>
            <div>
                <p>Owned Total: {pokemons.pokemons.length}</p>
            </div>
            <div className="Container">
                {pokemons.pokemons.length === 0 &&
                    <h3>No Pokemon !!!</h3>
                }
                {pokemons.pokemons.map((pokemon, index) => 
                    <div key={index} className="Pokemon">
                        <Link className="Image" to={{pathname: `/detail/${pokemon.name}`}}>
                            <img src={pokemon.image} alt="pokemon"/>
                        </Link>
                        <button onClick={handleClick} value={pokemon.nickname}>release</button>
                        <p>{pokemon.nickname}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MyPokemonList;