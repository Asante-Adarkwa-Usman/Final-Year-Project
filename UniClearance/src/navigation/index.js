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
import AsyncStorage from '@react-native-async-storage/async-storage';
const storage = AsyncStorage;

const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState('');
  //Fetching isLoggedIn data
  React.useEffect(() => {
    loadData();
  });

  // Loading data from async storage
  const loadData = async () => {
    let alreadyLoggedIn = await storage.getItem('isLoggedIn');
    setIsLoggedIn(alreadyLoggedIn);
    console.log(alreadyLoggedIn);
    return alreadyLoggedIn;
  };
  return (
    <AuthenticationStack.Navigator
      headerMode="none"
      initialRouteName={isLoggedIn != true ? 'GetStarted' : 'Main'}>
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
