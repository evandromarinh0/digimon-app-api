import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
  agumon?: boolean;
  guilmon?: boolean;
  veemon?: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 80%;
  height: 58px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 16px;

  ${props => props.agumon && css`
    background: #fcb002;
  `}

  ${props => props.veemon && css`
    background: #238dbd;
  `}

  ${props => props.guilmon && css`
    background: #c75741;
  `}
`;

export const ButtonText = styled.Text`
  font-size: 19px;
  font-family: 'Nunito-SemiBold';
  color: #312e38;
`;