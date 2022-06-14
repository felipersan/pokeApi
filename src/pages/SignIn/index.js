import React, {useState, useContext} from 'react';

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
  SignUp,
  TextSignUp,
} from './styles';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const {user, setUser} = useContext(AuthContext);

  return (
    <Background>
      <Container>
        <Logo source={require('../../assets/logo.png')} />
        <AreaInput>
          <Input
            value={email}
            onChangeText={text => {
              setEmail(text);
            }}
            placeholder="email"
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
          <Button>
            <TextBtn>Fazer Login</TextBtn>
          </Button>
        </ViewBtn>
        <SignUp
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <TextSignUp>Criar uma conta !</TextSignUp>
        </SignUp>
      </Container>
    </Background>
  );
}
