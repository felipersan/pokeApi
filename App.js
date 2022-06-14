import React from 'react';
import {View, Text} from 'react-native';
import firebase from './src/services/firebaseConnection';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}