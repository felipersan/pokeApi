import React, {useState, useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../contexts/auth';

import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  Element,
  Button,
  TextBtn,
  ViewBtn,
} from './styles';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const {signUp} = useContext(AuthContext);

  function handleSignUp() {
    signUp(name, email, password);
  }

  return (
    <Background>
      <TouchableOpacity
        style={{marginTop: '10%', marginLeft: '7%'}}
        onPress={() => {
          navigation.navigate('SignIn');
        }}>
        <Feather name="chevron-left" size={30} color="#000" />
      </TouchableOpacity>
      <Container>
        <Logo source={require('../../assets/logo.png')} />
        <AreaInput>
          <Input
            value={name}
            onChangeText={text => {
              setName(text);
            }}
            placeholder="Nome"
            autoCorrect={false}
            autocaptalize={false}
          />
          <Element />
        </AreaInput>
        <AreaInput>
          <Input
            value={email}
            onChangeText={text => {
              setEmail(text);
            }}
            placeholder="Email"
            autoCorrect={false}
            autocaptalize={false}
          />
          <Element />
        </AreaInput>
        <AreaInput>
          <Input
            value={password}
            onChangeText={text => {
              setPassword(text);
            }}
            placeholder="********"
            autoCorrect={false}
            autocaptalize={false}
          />
          <Element />
        </AreaInput>
        <ViewBtn>
          <Button onPress={handleSignUp}>
            <TextBtn>Criar Conta</TextBtn>
          </Button>
        </ViewBtn>
      </Container>
    </Background>
  );
}
