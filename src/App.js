import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from './graphql/pokemon';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import MyPokemonList from './components/MyPokemonList';

import './App.css';

function App() {
  const gqlVariables = {
    limit: 20,
    offset: 0,
  };
  
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log('Response from server', data.pokemons.results);

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
          <Route path='/' element={<PokemonList pokemons={data.pokemons.results}/>}/>
          <Route path='/detail/:name' element={<PokemonDetail/>}/>
          <Route path='/list' element={<MyPokemonList pokemons={data.pokemons.results}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
