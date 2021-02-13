import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import logoImg from '../../assets/logo2.png';
import api from '../../services/api';

import { 
  Container,
  Loading,
  Logo,
  DigimonContainer,
  DigimonImage,
  DigimonData,
  DigimonName,
  DigimonLevel
} from './styles';

interface DigimonProps {
  name: string;
  img: string;
  level: string;
}

const AllDigimons: React.FC = () => {
  const [digimons, setDigimons] = useState<DigimonProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.get('digimon').then(response => {
      setLoading(false);

      setDigimons(response.data);
    })
    setLoading(true);
  }, []);

  return (
    <Container>
      <Logo source={logoImg} resizeMode='contain' />

      <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }} >
        {loading && <ActivityIndicator style={{ marginTop: 140 }} size='large' color='#999' />}
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

export default AllDigimons;