import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler/dist/src/handlers/gestureHandlerTypesCompat';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  agumon?: boolean;
  guilmon?: boolean;
  veemon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return(
    <Container {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
}

export default Button;