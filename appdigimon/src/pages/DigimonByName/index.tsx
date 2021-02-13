import React, { useCallback, useState } from 'react';
import { ActivityIndicator, Image, Text } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo2.png';
import filterIcon from '../../assets/filter.png'

import { 
  Container,
  Logo,
  LevelsDescription,
  FilterContainer,
  Input,
  Filter,
  DigimonContainer,
  DigimonImage,
  DigimonData,
  DigimonName,
  DigimonLevel,
} from './styles';

interface Digimon {
  name: string;
  img: string;
  level: string;
}

const DigimonByLevel: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [digimon, setDigimon] = useState<Digimon[]>([]);
  const [loading, setLoading] = useState(false);
  
  const handleFiltersByName = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get(`digimon/name/${name}`);

      setDigimon(response.data);
    } catch (err) {
      console.log('Deu ruim');
    } finally {
      setLoading(false);
    }
  }, [name]);

  return (
    <Container>
      <Logo source={logoImg} resizeMode='contain' />

      <LevelsDescription>Alguns Digimons:</LevelsDescription>
      <LevelsDescription>Gabumon, Garudamon, Leomon...</LevelsDescription>
      <FilterContainer>
        <Input 
          placeholder="Digite o nome do Digimon..." 
          placeholderTextColor="#232129" 
          value={name}
          onChangeText={setName}
        />
        <Filter onPress={handleFiltersByName}>
          <Image source={filterIcon} style={{ width: 26, height: 26 }} />
        </Filter>
      </FilterContainer>

      {loading && <ActivityIndicator size='small' color='#999' />}

      {digimon.map(digimonster => (
        <DigimonContainer key={digimonster.name}>
          <DigimonImage source={{ uri: digimonster.img }} />
          <DigimonData>
            <DigimonName>{digimonster.name}</DigimonName>
            <DigimonLevel>{digimonster.level}</DigimonLevel>
          </DigimonData>
        </DigimonContainer>
      ))}
    </Container>
  );
}

export default DigimonByLevel;