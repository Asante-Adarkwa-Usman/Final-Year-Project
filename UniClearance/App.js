import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationNavigator from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/state-management/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <AuthenticationNavigator />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
