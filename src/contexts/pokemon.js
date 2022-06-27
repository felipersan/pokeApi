import {getTabBarHeight} from '@react-navigation/bottom-tabs/lib/typescript/src/views/BottomTabBar';
import React, {createContext, useState, useEffect} from 'react';
import api from '../services/api';

export const PokemonContext = createContext({});

export default function PokemonProvider({children}) {
  const [pokemon, setPokemon] = useState('');
  const [pokemonDetails, setPokemonDetails] = useState('');
  const [gabi, setGabi] = useState('Gabrielle');

  useEffect(() => {
    async function getPokemon() {
      let response = await api.get('pokemon');
      let poke = response.data.results;
      setPokemon(poke);
    }
    getPokemon();
  }, []);

  async function completePokemon(name) {
    let response = await api.get(`pokemon/${name}`);
    return response.data;
  }

  async function getColor(index) {
    let response = await api.get(`pokemon-species/${index}/`);
    return response.data.color.name;
  }

  async function getType(index) {
    let response = await api.get(`pokemon/${index}`);
    return response.data.types;
  }

  async function flavorText(index) {
    let response = await api.get(`pokemon-species/${index}/`);
    response = response.data.flavor_text_entries[0].flavor_text;
    response = response.replace(/\n/g, ' ');
    return response;
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        completePokemon,
        getColor,
        getType,
        setPokemonDetails,
        pokemonDetails,
        flavorText,
        setGabi,
        gabi,
      }}>
      {children}
    </PokemonContext.Provider>
  );
}
