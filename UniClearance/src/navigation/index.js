import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  GetStarted,
  LoginScreen,
  ResetPasswordScreen,
  ConfirmPinScreen,
  VerifyEmailScreen,
} from '../screens/Authentication';
import DrawerNavigator from './DrawerNavigator';
import store from '../state-management/store';

const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator = () => {
  const [token, setToken] = React.useState();
  React.useEffect(() => {
    getStoreData();
  });

  // get data from redux store
  const getStoreData = () => {
    const state = store.getState();
    setToken(state.userDetails.userDetails.token);
  };
  return (
    <AuthenticationStack.Navigator
      headerMode="none"
      initialRouteName={token ? 'Main' : 'GetStarted'}>
      <AuthenticationStack.Screen name="GetStarted" component={GetStarted} />
      <AuthenticationStack.Screen name="Login" component={LoginScreen} />
      <AuthenticationStack.Screen
        name="VerifyEmail"
        component={VerifyEmailScreen}
      />
      <AuthenticationStack.Screen
        name="ConfirmPin"
        component={ConfirmPinScreen}
      />
      <AuthenticationStack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
      />
      <AuthenticationStack.Screen name="Main" component={DrawerNavigator} />
    </AuthenticationStack.Navigator>
  );
};
export default AuthenticationNavigator;
