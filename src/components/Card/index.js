import React, {useContext, useEffect, useState} from 'react';
import {PokemonContext} from '../../contexts/pokemon';

import {
  Carta,
  Name,
  ImagePokemon,
  View,
  ViewType,
  Type,
  AreaType,
  Touch,
} from './styles';

export default function Card({name}) {
  const {completePokemon, getColor, getType} = useContext(PokemonContext);
  const [pokemon, setPokemon] = useState('');
  const [imagePokemon, setImagePokemon] = useState('');
  const [color, setColor] = useState('');
  const [hex, setHex] = useState('');
  const [type1, setType1] = useState('Poison');
  const [type2, setType2] = useState('');

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
      case 'brown':
        setHex('#a78876');
        break;
      case 'grey':
        setHex('#9195b0');
        break;
      case 'pink':
        setHex('##f1c8cc');
        break;
      case 'purple':
        setHex('##ae8eb5');
        break;
      case 'white':
        setHex('#1212');
        break;
      case 'yellow':
        setHex('#e8c250');
        break;
      default:
        setHex('#385fa3');
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
          //let image = pokemon.sprites.versions.generation-v.black-white.animated.front_default
          setImagePokemon(image);
        }
      }

      async function pokemonColor() {
        let index = pokemon.id;
        let color = await getColor(index);
        setColor(color);
      }

      async function type() {
        let index = pokemon.id;
        let type = await getType(index);
        if (type.length === 1) {
          let firstType = type[0].type.name;
          setType1(firstType);
        } else {
          let firstType = type[0].type.name;
          let secondType = type[1].type.name;
          setType1(firstType);
          setType2(secondType);
        }
      }

      getImage();
      pokemonColor();
      type();
    }
  }, [pokemon]);

  return (
    <Touch>
      <Carta color={hex}>
        <Name>{name}</Name>
        <View>
          <ViewType>
            {type2 ? (
              <AreaType>
                <Type>{type1}</Type>
                <Type>{type2}</Type>
              </AreaType>
            ) : (
              <AreaType>
                <Type>{type1}</Type>
              </AreaType>
            )}
          </ViewType>
          <ImagePokemon
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`,
            }}
          />
        </View>
      </Carta>
    </Touch>
  );
}
