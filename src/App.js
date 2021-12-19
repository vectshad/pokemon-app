import { useQuery } from '@apollo/client';
import { GET_POKEMON_DETAIL } from './graphql/pokemon';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import MyPokemonList from './components/MyPokemonList';

import './App.css';


const gqlVariables = {
  name: 'bulbasaur',
  // limit: 20,
  // offset: 0,
};

function App() {
  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: gqlVariables,
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log('Response from server', data.pokemon);

  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {data.pokemon.name} */}
        {/* </p> */}
        {/* <ul>
        // {data.pokemons.results.map((pokemon) => 
        //     <li>
        //       {pokemon.name}
        //     </li>
        //   )}
        // </ul> */}
      {/* </header> */}
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<PokemonList/>}/>
          <Route path='/detail' element={<PokemonDetail/>}/>
          <Route path='/list' element={<MyPokemonList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
