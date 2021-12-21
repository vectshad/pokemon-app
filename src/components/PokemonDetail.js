import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import '../styles/PokemonDetail.css';
import { GET_POKEMON_DETAIL } from '../graphql/pokemon';
import { useQuery } from '@apollo/client';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';
import { PokemonContext } from "../contexts/PokemonContext";

function PokemonDetail () {
    const { name } = useParams();
    const pokemons = useContext(PokemonContext);
    const navigate = useNavigate()

    const gqlDetailVariables = {
        name: name,
    };

    const handleClick = (e) => {
        e.preventDefault();
        var pokemon = {
            name: data.pokemon.name,
            nickname: "",
            image: data.pokemon.sprites.front_default
        }
        var probabilty = (Math.random() < 0.5 ? 0 : 1);
        var nickname = "";
        var check = false;
        if (probabilty === 1) {
            var prom = prompt("Success !!! \nGive the Pokemon a nickname!!!");
            while (nickname === "") {
                check = false;
                for (var i = 0; i < pokemons.pokemons.length; i++) {
                    if (prom === pokemons.pokemons[i].nickname) {
                        prom = prompt("Already used !!! \n Use another nickname!!!");
                        check = true;
                        break;
                    }
                }
                if (!check) {
                    if (prom === null || prom === "") {
                        prom = data.pokemon.name;
                    } else {
                        nickname = prom
                    }
                }
            }
            pokemon.nickname = nickname            
            // console.log(pokemon)
            pokemons.handlePokemon(pokemon)
        } else {
            alert("Failed :(");
        }
        
        
    };

    const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
        variables: gqlDetailVariables,
    });
    
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    // console.log('Response from server', data);
    
    return (
        <div className="PokemonDetail">
            <div className="Back">
                <button onClick={() => (navigate(-1))}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </button>
            </div>
            
            <h2>Pokemon Detail</h2>
            <div className="Detail">
                <h2>{name}</h2>
                <img src={data.pokemon.sprites.front_default}alt="pokemon"/>
                <div>
                    <button onClick={handleClick}>catch pokemon!</button>
                </div>
                <h3>Types</h3>
                <div className="Types">
                    {data.pokemon.types.map((type, index) =>
                        <p key={index}>{type.type.name}</p>
                    )}
                </div>
                <h3>Moves</h3>
                <div className="Moves">
                    {data.pokemon.moves.map((move, index) =>
                        <p key={index}>{move.move.name}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PokemonDetail;