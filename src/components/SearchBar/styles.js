import styled from 'styled-components';

export const View = styled.View`
  width: 60%;
  flex-direction: row;
  align-items: center;
`;

export const AreaInput = styled.View`
  border-color: #385fa3;
  padding-left: 5px;
  width: 85%;
  border-width: 1px;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  margin-right: 2%;
  height: 45px;
`;
export const TextInput = styled.TextInput``;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #385fa3;
  height: 45px;
  width: 15%;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
`;

export const TextBtn = styled.Text`
  font-size: 22px;
  color: #fff;
`;
