import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  GetStarted,
  LoginScreen,
  ResetPasswordScreen,
} from '../screens/Authentication';
import DrawerNavigator from './DrawerNavigator';

const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="GetStarted" component={GetStarted} />
      <AuthenticationStack.Screen name="Login" component={LoginScreen} />
      <AuthenticationStack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
      />
      <AuthenticationStack.Screen name="Main" component={DrawerNavigator} />
    </AuthenticationStack.Navigator>
  );
};
export default AuthenticationNavigator;
