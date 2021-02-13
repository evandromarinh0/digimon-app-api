import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar barStyle='light-content' backgroundColor='#232129' />
    </NavigationContainer>
  );
}

export default App;