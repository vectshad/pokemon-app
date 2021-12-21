import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from './graphql/pokemon';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import MyPokemonList from './components/MyPokemonList';

import './App.css';
import PokemonContextProvider from './contexts/PokemonContext';

function App() {
  const gqlVariables = {
    limit: 40,
    offset: 0,
  };
  
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  // console.log('Response from server', data.pokemons.results);

  return (
    <div className="App">
      <PokemonContextProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<PokemonList pokemons={data.pokemons.results}/>}/>
          <Route path='/detail/:name' element={<PokemonDetail/>}/>
          <Route path='/list' element={<MyPokemonList/>}/>
        </Routes>
      </BrowserRouter>
      </PokemonContextProvider>
    </div>
  );
}

export default App;
