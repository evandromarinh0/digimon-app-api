import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 80%;
`;

export const LevelsDescription = styled.Text`
  color: #fff;
  font-family: 'Nunito-Regular';
  font-size: 15px;
  margin-bottom: 4px;
`;

export const FilterContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  margin-bottom: 8px;
`;


export const Input = styled.TextInput`
  background: #fcb002;
  height: 56px;
  width: 82%;
  border-radius: 8px;
  padding: 0 12px;
  font-size: 16px;
  color: #232129;
  margin-right: 8px;
`;

export const Filter = styled(RectButton)`
  height: 56px;
  width: 16%;
  border-radius: 8px;
  background: #c75741;

  justify-content: center;
  align-items: center;
`;

export const DigimonContainer = styled.View`
  margin-top: 32px;
  align-items: center;
  margin-left: 16px;
`;

export const DigimonImage = styled.Image`
  height: 200px;
  width: 200px;
  border-radius: 100px;
`;

export const DigimonData = styled.View`
  margin-top: 8px;
`;

export const DigimonName = styled.Text`
  font-family: 'Nunito-SemiBold';
  color: #fff;
  font-size: 32px;
`;

export const DigimonLevel = styled.Text`
  font-family: 'Nunito-Regular';
  color: #fcb002;
  font-size: 24px;
  align-self: center;
`;