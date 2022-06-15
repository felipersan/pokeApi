import React, {useContext} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {AuthContext} from '../../contexts/auth';
import {PokemonContext} from '../../contexts/pokemon';
import {View, ContainerHeader} from './styles';
import Logo from '../../components/Logo';
import SearchBar from '../../components/SearchBar';
import Card from '../../components/Card';

export default function Home() {
  const {signOut} = useContext(AuthContext);
  const {pokemon} = useContext(PokemonContext);

  function handleSignOut() {
    signOut();
  }
  return (
    <View>
      <ContainerHeader>
        <Logo />
        <SearchBar />
      </ContainerHeader>

      <FlatList
        numColumns={2}
        columnWrapperStyle={style.row}
        data={pokemon}
        keyExtractor={item => item.name}
        renderItem={({item}) => <Card name={item.name} />}
      />
    </View>
  );
}

const style = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
