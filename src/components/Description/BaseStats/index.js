import React, {useContext, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {PokemonContext} from '../../../contexts/pokemon';
import Stats from '../../../components/Stats';

export default function BaseStats() {
  const {pokemonDetails} = useContext(PokemonContext);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    if (pokemonDetails) {
      setStats([]);
    }
  }, [pokemonDetails]);

  useEffect(() => {
    if (pokemonDetails) {
      let pokemonStats = pokemonDetails.stats;
      pokemonStats.map(element => {
        let data = {power: element.base_stat, name: element.stat.name};
        setStats(oldArray => [...oldArray, data]);
      });
    }
  }, [pokemonDetails]);
  console.log(stats);

  return (
    <View>
      {stats.map(item => (
        <Stats name={item.name} power={item.power} />
      ))}
    </View>
  );
}
