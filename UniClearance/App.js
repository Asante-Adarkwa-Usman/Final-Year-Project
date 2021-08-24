import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationNavigator from './src/navigation';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/state-management/store';
import NetInfo from '@react-native-community/netinfo';
import {ConnectionStatus} from './src/components/snackbar';

const App = () => {
  const [connectionVisible, setConnectionVisible] = React.useState(false);

  React.useEffect(() => {
    NetInfo.fetch().then(state => {
      console.log('Connection type is', state.type);
      console.log('Is connected?', state.isConnected);
      state.isConnected == true
        ? ''
        : (setConnectionVisible(true),
          setTimeout(() => {
            setConnectionVisible(false);
          }, 4000));
    });
  }, []);
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <ConnectionStatus
          message="No Internet, Check Your Internet Connection "
          visible={connectionVisible}
        />
        <AuthenticationNavigator />
      </NavigationContainer>
    </StoreProvider>
  );
};
export default App;
