import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationNavigator from './src/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <AuthenticationNavigator />
    </NavigationContainer>
  );
};
export default App;
