import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {PokemonContext} from '../../contexts/pokemon';

export default function Card({name}) {
  const {completePokemon} = useContext(PokemonContext);
  const [pokemon, setPokemon] = useState('');

  useEffect(() => {
    async function getPokemon() {
      let pokemon = await completePokemon(name);
      setPokemon(pokemon);
    }
    getPokemon();
  }, []);

  let image = pokemon.sprites.front_default;
  console.log(image);

  return (
    <View>
      <Image
        style={{width: 100, height: 100}}
        source={{
          uri: image,
        }}
      />
      <Text>{name}</Text>
    </View>
  );
}
