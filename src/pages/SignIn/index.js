import React, {useState} from 'react';

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
        <SignUp>
          <TextSignUp>Criar uma conta !</TextSignUp>
        </SignUp>
      </Container>
    </Background>
  );
}
