import React, { Component, createContext} from 'react';

export const PokemonContext = createContext();

class PokemonContextProvider extends Component {
    state = localStorage.getItem("pokemons") ? {pokemons: JSON.parse(localStorage.getItem("pokemons"))} : {
        pokemons: []
    }

    handlePokemon = (pokemon) => {
        this.setState((prevState) => ({
            pokemons: [...prevState.pokemons, pokemon]
        }), () => localStorage.setItem("pokemons", JSON.stringify(this.state.pokemons)))
    }

    render () {
        return (
            <PokemonContext.Provider value={{...this.state, handlePokemon: this.handlePokemon}}>
                {this.props.children}
            </PokemonContext.Provider>
        );
    }
}

export default PokemonContextProvider;