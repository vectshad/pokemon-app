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

    handleRelease = (nickname) => {
        var index = -1;
        for (var i = 0; i < this.state.pokemons.length; i++) {
            if (this.state.pokemons[i].nickname === nickname) {
                index = i;
            }
        }
        if (index !== -1) {
            const array = this.state.pokemons
            array.splice(index, 1)
            this.setState({
                pokemons: array
            })
        }
    }
    render () {
        return (
            <PokemonContext.Provider value={{...this.state, handlePokemon: this.handlePokemon, handleRelease: this.handleRelease}}>
                {this.props.children}
            </PokemonContext.Provider>
        );
    }
}

export default PokemonContextProvider;