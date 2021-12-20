import React from "react";
import '../styles/PokemonList.css';
import { Link } from 'react-router-dom';

function PokemonList (props) {
    console.log(props.pokemons[0])
    return(
        <div className="PokemonList">
            <h2>Pokemon List</h2>
            <div className="Container">
                {props.pokemons.map((pokemon) => 
                    <div className="Pokemon">
                        <Link to={{pathname: `/detail/${pokemon.name}`}}>
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