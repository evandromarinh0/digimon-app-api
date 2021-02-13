import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Loading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 80%;
`;

export const DigimonContainer = styled.View`
  height: 160px;
  width: 80%;
  flex-direction: row;
  align-items: center;
  margin-left: 16px;
`;

export const DigimonImage = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 60px;
`;

export const DigimonData = styled.View`
  margin-left: 18px;
`;

export const DigimonName = styled.Text`
  font-family: 'Nunito-SemiBold';
  color: #fff;
  font-size: 24px;
`;

export const DigimonLevel = styled.Text`
  font-family: 'Nunito-Regular';
  color: #fcb002;
  font-size: 18px;
`;