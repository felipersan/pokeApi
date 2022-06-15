import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {PokemonContext} from '../../contexts/pokemon';

export default function Details() {
  const {pokemonDetails} = useContext(PokemonContext);
  console.log(pokemonDetails.weight);

  return (
    <View>
      <Text>Details</Text>
    </View>
  );
}
