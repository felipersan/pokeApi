import styled from 'styled-components';

export const Touch = styled.TouchableOpacity`
  width: 47%;
  border-radius: 10;
`;

export const Carta = styled.View`
  border-color: #909090;
  border-width: 1px;
  border-radius: 19px;
  background-color: ${props => props.color};
  margin-bottom: 3%;
  padding: 3%;
`;

export const Name = styled.Text`
  margin-top: 3%;
  margin-left: 7%;
  font-size: 22px;
  color: #fff;
`;
export const View = styled.View`
  flex-direction: row;
`;

export const ViewType = styled.View``;

export const AreaType = styled.View``;

export const Type = styled.Text`
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  height: 25px;
  border-radius: 12.5px;
  opacity: 0.4;
  padding-right: 5%;
  padding-left: 5%;
  margin: 5%;
  margin-left: 8%;
  text-align: center;
  justify-items: center;
  color: #000;
  font-size: 16px;
`;

export const ImagePokemon = styled.Image`
  margin-left: 7%;
  width: 70px;
  height: 70px;
  resize-mode: contain;
`;
