import React from 'react';
import {View, Text} from 'react-native';
import firebase from './src/services/firebaseConnection';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AuthContexts from './src/contexts/auth';
import PokemonContext from './src/contexts/pokemon';

import Routes from './src/routes';

console.disableYellowBox = true;

export default function App() {
  return (
    <NavigationContainer>
      <AuthContexts>
        <PokemonContext>
          <Routes />
        </PokemonContext>
      </AuthContexts>
    </NavigationContainer>
  );
}
