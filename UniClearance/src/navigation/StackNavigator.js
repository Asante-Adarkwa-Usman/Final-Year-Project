import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import theme from '../Theme';
import {
  HomeScreen,
  AdministrationScreen,
  AnnouncementScreen,
  SettingScreen,
  TranscriptScreen,
} from '../screens/Main';
import {
  DepartmentScreen,
  AccountScreen,
  HostelScreen,
  LibraryScreen,
} from '../screens/Main/Administration';
import NotificationScreen from '../screens/Main/HomeScreen/notificaton';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Department"
        component={DepartmentScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Hostel"
        component={HostelScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Library"
        component={LibraryScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AdministrationStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Administrations"
        component={AdministrationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Department"
        component={DepartmentScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Hostel"
        component={HostelScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Library"
        component={LibraryScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AnnouncementStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Announcement"
        component={AnnouncementScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const SettingStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Settings"
        component={SettingScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const TranscriptStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Transcript"
        component={TranscriptScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export {
  HomeStackNavigator,
  AdministrationStackNavigator,
  AnnouncementStackNavigator,
  SettingStackNavigator,
  TranscriptStackNavigator,
};
