import styled from 'styled-components/native';
import {Pressable} from 'react-native';

export const Background = styled.View`
  background-color: #f7f7f7;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.KeyboardAvoidingView``;
export const Logo = styled.Image`
  resize-mode: contain;
  height: 24%;
`;
export const AreaInput = styled.View`
  background-color: transparent;
  margin-top: 6%;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#505050',
})``;
export const Element = styled.View`
  height: 1px;
  width: 100%;
  background-color: #385fa3;
`;
export const ViewBtn = styled.View`
  margin-top: 7%;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  border-color: #385fa3;
  border-width: 1.5px;
  margin-bottom: 0%;
  padding: 5%;
  border-radius: 10px;
`;
export const TextBtn = styled.Text`
  padding-left: 3%;
  font-size: 16px;
  color: #303030;
`;
export const SignUp = styled.Pressable`
  align-items: center;
`;
export const TextSignUp = styled.Text`
  color: #404040;
  margin-top: -2%;
`;
