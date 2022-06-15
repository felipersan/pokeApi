import React, {useContext, useEffect, useState} from 'react';

import {PokemonContext} from '../../contexts/pokemon';

import {Carta, Name, ImagePokemon, View} from './styles';

export default function Card({name}) {
  const {completePokemon, getColor} = useContext(PokemonContext);
  const [pokemon, setPokemon] = useState('');
  const [imagePokemon, setImagePokemon] = useState('');
  const [color, setColor] = useState('');
  const [hex, setHex] = useState('');

  useEffect(() => {
    switch (color) {
      case 'black':
        setHex('#303030');
        break;
      case 'blue':
        setHex('#76bcfc');
        break;
      case 'green':
        setHex('#49d0b2');
        break;
      case 'yellow':
        setHex('#fdda6c');
        break;
      case 'red':
        setHex('#fd6b6c');
        break;
      default:
        setHex('#49d0b2');
        break;
    }
  }, [color]);

  useEffect(() => {
    async function getPokemon() {
      let pokemon = await completePokemon(name);
      setPokemon(pokemon);
    }

    getPokemon();
  }, []);

  useEffect(() => {
    if (pokemon) {
      function getImage() {
        if (pokemon) {
          let image = pokemon.sprites.front_default;
          setImagePokemon(image);
        }
      }

      async function pokemonColor() {
        let index = pokemon.id;
        let color = await getColor(index);
        setColor(color);
      }

      getImage();
      pokemonColor();
    }
  }, [pokemon]);

  return (
    <Carta color={hex}>
      <Name>{name}</Name>
      <View>
        <ImagePokemon source={{uri: imagePokemon}} />
      </View>
    </Carta>
  );
}
