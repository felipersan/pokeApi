import React, {useContext, useEffect, useState} from 'react';
import {PokemonContext} from '../../contexts/pokemon';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import Description from '../../components/Description';

import {
  Container,
  Background,
  PokeImage,
  Name,
  Index,
  Infos,
  AreaHeader,
  AreaIcons,
  Touch,
  AreaHeaderPokemon,
  AreaType,
  Type,
} from './styles';

export default function Details() {
  const {pokemonDetails, getColor, getType} = useContext(PokemonContext);
  const [pokemonImage, setPokemonImage] = useState('');
  const [bgColor, setBgColor] = useState('');
  const [like, setLike] = useState(false);
  const [complement, setComplement] = useState('');
  const [type1, setType1] = useState('');
  const [type2, setType2] = useState('');

  const navigation = useNavigation();

  let pokemonName = pokemonDetails.name;
  pokemonName = pokemonName[0].toUpperCase() + pokemonName.substring(1);

  useEffect(() => {
    async function getImage() {
      let image = pokemonDetails.sprites.other.home.front_default;
      setPokemonImage(image);
    }

    async function pokemonColor() {
      const color = await getColor(pokemonDetails.id);

      switch (color) {
        case 'black':
          setBgColor('#303030');
          break;
        case 'blue':
          setBgColor('#76bcfc');
          break;
        case 'green':
          setBgColor('#49d0b2');
          break;
        case 'yellow':
          setBgColor('#fdda6c');
          break;
        case 'red':
          setBgColor('#fd6b6c');
          break;
        case 'brown':
          setBgColor('#a78876');
          break;
        case 'grey':
          setBgColor('#9195b0');
          break;
        case 'pink':
          setBgColor('##f1c8cc');
          break;
        case 'purple':
          setBgColor('##ae8eb5');
          break;
        case 'white':
          setBgColor('#1212');
          break;
        case 'yellow':
          setBgColor('#e8c250');
          break;
        default:
          setBgColor('#385fa3');
          break;
      }
    }

    function complement() {
      if (pokemonDetails.id <= 9) {
        setComplement('000');
      } else if (pokemonDetails.id > 9 && pokemonDetails.id <= 99) {
        setComplement('00');
      } else if (pokemonDetails.id > 99 && pokemonDetails.id <= 999) {
        setComplement('0');
      } else setComplement('');
    }

    async function type() {
      let index = pokemonDetails.id;
      let type = await getType(index);
      console.log(type);
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
    complement();
    type();
  }, [pokemonDetails]);

  function handleLike() {
    if (like) {
      setLike(false);
    } else {
      setLike(true);
    }
  }

  return (
    <Background color={bgColor}>
      <Container>
        <AreaHeader>
          <AreaIcons>
            <Touch
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Feather name="chevron-left" size={30} color="#fff" />
            </Touch>
            <Touch onPress={handleLike}>
              {like ? (
                <FontAwesome name="heart" size={26} color="#F00" />
              ) : (
                <FontAwesome name="heart-o" size={26} color="#fff" />
              )}
            </Touch>
          </AreaIcons>
          <AreaHeaderPokemon>
            <Name>{pokemonName}</Name>
            <Index>{`#${complement}${pokemonDetails.id}`}</Index>
          </AreaHeaderPokemon>
          <AreaType>
            <Type>{type1}</Type>
            <Type>{type2}</Type>
          </AreaType>
        </AreaHeader>

        <PokeImage
          source={{
            uri: pokemonImage,
          }}
        />
      </Container>
      <Infos>
        <Description />
      </Infos>
    </Background>
  );
}
