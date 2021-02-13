import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Homepage from '../pages/Homepage';
import AllDigimons from '../pages/AllDigimons';
import DigimonByName from '../pages/DigimonByName';
import DigimonByLevel from '../pages/DigimonByLevel';

const StackRoutes = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <StackRoutes.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#232129' } }}>
      <StackRoutes.Screen name="Homepage" component={Homepage} />
      <StackRoutes.Screen name="AllDigimons" component={AllDigimons} />
      <StackRoutes.Screen name="DigimonByName" component={DigimonByName} />
      <StackRoutes.Screen name="DigimonByLevel" component={DigimonByLevel} />
    </StackRoutes.Navigator>
  );
}

export default Routes;