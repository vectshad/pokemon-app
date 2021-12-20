import React, { Component, createContext} from 'react';

export const PokemonContext = createContext();

class PokemonContextProvider extends Component {
    state = {
        pokemons: []
    }

    handlePokemon = (pokemon) => {
        this.setState((prevState) => ({
            pokemons: [...prevState.pokemons, pokemon]
        }))
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