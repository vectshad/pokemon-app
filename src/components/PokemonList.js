import React, { useContext } from "react";
import '../styles/PokemonList.css';
import { Link } from 'react-router-dom';
import { PokemonContext } from "../contexts/PokemonContext";

function PokemonList (props) {
    const pokemons = useContext(PokemonContext);

    return(
        <div className="PokemonList">
            <h2>Pokemon List</h2>
            <div>
                <p>Owned Total: {pokemons.pokemons.length}</p>
            </div>
            <div className="Container">
                {props.pokemons.map((pokemon, index) => 
                    <div key={index} className="Pokemon">
                        <Link className="Image" to={{pathname: `/detail/${pokemon.name}`}}>
                            <img src={pokemon.image} alt="pokemon"/>
                        </Link>
                        <p>{pokemon.name}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default PokemonList;