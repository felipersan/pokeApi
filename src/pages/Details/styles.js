import styled from 'styled-components';

export const Background = styled.View`
  background-color: ${props => props.color};
  flex: 1;
`;
export const Container = styled.View`
  height: 52%;
  z-index: 1;
`;

export const Infos = styled.View`
  background-color: #fff;
  height: 80%;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

export const AreaHeader = styled.View``;

export const AreaIcons = styled.View`
  margin: 5.5%;
  margin-top: 5%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Touch = styled.TouchableOpacity``;

export const PokeImage = styled.Image`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  height: 65%;
  bottom: 0;
  resize-mode: contain;
  z-index: 3;
`;
export const Name = styled.Text`
  color: #fff;
  font-size: 40px;

  align-self: center;
`;
export const Index = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const AreaHeaderPokemon = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-left: 5.5%;
  margin-right: 5.5%;
`;

export const AreaType = styled.View`
  flex-direction: row;
  height: 30px;
`;

export const Type = styled.Text`
  background-color: #fff;
  align-items: center;
  justify-content: center;
  height: 25px;
  border-radius: 12.5px;
  opacity: 0.4;
  padding-right: 5%;
  padding-left: 5%;
  margin-left: 5.5%;
  margin-top: 1%;
  text-align: center;
  justify-items: center;
  color: #000;
  font-size: 16px;
`;
