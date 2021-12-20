import React from "react";
import { useParams } from "react-router-dom";
import '../styles/PokemonDetail.css';
import { GET_POKEMON_DETAIL } from '../graphql/pokemon';
import { useQuery } from '@apollo/client';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

function PokemonDetail () {
    const { name } = useParams();

    const gqlDetailVariables = {
        name: name,
      };

    const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
        variables: gqlDetailVariables,
    });
    
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    console.log('Response from server', data);
    
    return (
        <div className="PokemonDetail">
            <div className="Back">
                <Link to="/">
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </Link>
            </div>
            
            <h2>Pokemon Detail</h2>
            <div className="Detail">
                <h2>{name}</h2>
                <img src={data.pokemon.sprites.front_default}alt="pokemon"/>
                <h3>Types</h3>
                <div className="Types">
                    {data.pokemon.types.map((type, index) =>
                        <p key={index}>{type.type.name}</p>
                    )}
                </div>
                <h3>Moves</h3>
                <div>
                    {data.pokemon.moves.map((move, index) =>
                        <p key={index}>{move.move.name}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PokemonDetail;