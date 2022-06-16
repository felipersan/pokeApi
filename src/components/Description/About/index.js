import React, {useEffect, useContext, useState} from 'react';
import {StyleSheet} from 'react-native';
import {PokemonContext} from '../../../contexts/pokemon';
import DropShadow from 'react-native-drop-shadow';

import {
  Description,
  Container,
  AreaFeatures,
  Features,
  TitleFeatures,
  ViewFeature,
} from './styles';

export default function About() {
  const {flavorText, pokemonDetails} = useContext(PokemonContext);
  const [flavor, setFlavor] = useState('');
  const [height, setHeigth] = useState('');
  const [weight, setWeight] = useState('');

  useEffect(() => {
    async function getFlavor() {
      let flavor = await flavorText(pokemonDetails.id);
      setFlavor(flavor);
    }

    function getHeight() {
      let height = pokemonDetails.height;
      height = parseFloat(height) / 10;
      setHeigth(height);
    }

    function getWeight() {
      let weight = pokemonDetails.weight;
      weight = parseFloat(weight) / 10;
      setWeight(weight);
    }

    getFlavor();
    getHeight();
    getWeight();
  }, [pokemonDetails]);

  return (
    <Container>
      <Description>{flavor}</Description>

      <AreaFeatures>
        <ViewFeature>
          <TitleFeatures>Height</TitleFeatures>
          <Features>{height} m</Features>
        </ViewFeature>
        <ViewFeature>
          <TitleFeatures>Weight</TitleFeatures>
          <Features>{weight} kg</Features>
        </ViewFeature>
      </AreaFeatures>
    </Container>
  );
}
