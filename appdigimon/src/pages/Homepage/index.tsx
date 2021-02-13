import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo2.png';
import Button from '../../components/Button';

import { 
  Container,
  Logo
} from './styles';

const Homepage: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateToAllDigimons = useCallback(() => {
    navigation.navigate('AllDigimons');
  }, [navigation]);

  const handleNavigateToDigimonByLevel = useCallback(() => {
    navigation.navigate('DigimonByLevel');
  }, [navigation]);

  const handleNavigateToDigimonByName = useCallback(() => {
    navigation.navigate('DigimonByName');
  }, [navigation]);

  return (
    <Container>
      <Logo source={logoImg} resizeMode='contain' />

      <Button onPress={handleNavigateToAllDigimons} agumon>Ver todos os Digimons</Button>
      <Button onPress={handleNavigateToDigimonByName} veemon>Ver os Digimons por nome</Button>
      <Button onPress={handleNavigateToDigimonByLevel} guilmon>Ver os Digimons por nível</Button>
    </Container>
  );
}

export default Homepage;