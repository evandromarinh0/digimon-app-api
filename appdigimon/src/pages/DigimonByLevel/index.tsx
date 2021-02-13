import React, { useCallback, useState } from 'react';
import { ActivityIndicator, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

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
  const [level, setLevel] = useState<string>('');
  const [digimons, setDigimons] = useState<Digimon[]>([]);
  const [loading, setLoading] = useState(false);
  
  const handleFiltersByLevel = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get(`digimon/level/${level}`);

      setDigimons(response.data);
    } catch (err) {
      console.log('Deu ruim')
    } finally {
      setLoading(false);
    }
  }, [level]);

  return (
    <Container>
      <Logo source={logoImg} resizeMode='contain' />

      <LevelsDescription>Níveis:</LevelsDescription>
      <LevelsDescription>Intraining, Fresh, Rookie, Champion, Ultimate, Mega</LevelsDescription>
      <FilterContainer>
        <Input 
          placeholder="Digite o nível dos Digimons..." 
          placeholderTextColor="#232129" 
          value={level}
          onChangeText={setLevel}
        />
        <Filter onPress={handleFiltersByLevel}>
          <Image source={filterIcon} style={{ width: 26, height: 26 }} />
        </Filter>
      </FilterContainer>

      <ScrollView contentContainerStyle={{ padding: 8 }}  showsVerticalScrollIndicator={false}>
        {loading && <ActivityIndicator size='small' color='#999' />}

        {digimons.map(digimon => (
          <DigimonContainer key={digimon.name}>
            <DigimonImage source={{ uri: digimon.img }} />
            <DigimonData>
              <DigimonName>{digimon.name}</DigimonName>
              <DigimonLevel>{digimon.level}</DigimonLevel>
            </DigimonData>
          </DigimonContainer>
        ))}
      </ScrollView>
    
    </Container>
  );
}

export default DigimonByLevel;