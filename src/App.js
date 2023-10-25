import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PokemonThumbnail from './components/molecules/PokemonThumbnails';

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadPoke, setLoadPoke] = useState("https://pokeapi.co/api/v2/pokemon?limit=9");

  const getAllPokemons = async() => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next);
    
    function createPokemonObject(result) {
      result.forEach(async(pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await res.json();

        setAllPokemons((currentList) => [...currentList, data]);
      });
    }

    createPokemonObject(data.results);
    console.log(allPokemons);
  };

  
  return (
    <div className="App-container">
      <h1>Poke Base de datos</h1>
      <div className='pokemon-container'>
        <div className='all-container'>
          {
            allPokemons.map((pokemon, index) => {
              <PokemonThumbnail
                id={pokemon.id}
                name = {pokemon.name}
                image = {pokemon.sprites.other.dream_world.front_default}
                type = {pokemon.types[0].type.name}
                height = {pokemon.height}
                weight = {pokemon.weight}
                prop1 = {pokemon.stats[0].base_stat}
                prop2 = {pokemon.stats[1].base_stat}
                prop3 = {pokemon.stats[2].base_stat}
                prop4 = {pokemon.stats[3].base_stat}
                prop5 = {pokemon.stats[4].base_stat}
                prop6 = {pokemon.stats[5].base_stat}
              />
            })
          }
        </div>
        <button 
          className='load-more' 
          onClick={() => getAllPokemons()}
        >
          Cargar más pokemons
        </button>
      </div>
    </div>
  );
}

export default App;
