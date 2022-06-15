import React, {createContext, useState, useEffect} from 'react';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

export const PokemonContext = createContext({});

export default function PokemonProvider({children}) {
  const [pokemon, setPokemon] = useState('');

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

  return (
    <PokemonContext.Provider
      value={{pokemon, completePokemon, getColor, getType}}>
      {children}
    </PokemonContext.Provider>
  );
}
