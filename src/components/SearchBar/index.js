import React, {useState} from 'react';

import {View, TextInput, Button, TextBtn, AreaInput} from './styles';

export default function SearchBar() {
  const [pokemon, setPokemon] = useState('');
  return (
    <View>
      <AreaInput>
        <TextInput
          placeholder="digite o nome do pokemon"
          value={pokemon}
          onChangeText={value => {
            setPokemon(value);
          }}
        />
      </AreaInput>

      <Button>
        <TextBtn>+</TextBtn>
      </Button>
    </View>
  );
}
