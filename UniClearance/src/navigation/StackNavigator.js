import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import theme from '../Theme';
import {
  HomeScreen,
  DepartmentScreen,
  AnnouncementScreen,
  SettingScreen,
  TranscriptScreen,
} from '../screens/Main';
import {
  SchoolDepartmentScreen,
  AccountDepartmentScreen,
  HostelDepartmentScreen,
  LibraryDepartmentScreen,
} from '../screens/Main/Department';
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
        name="School"
        component={SchoolDepartmentScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Hostel"
        component={HostelDepartmentScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Account"
        component={AccountDepartmentScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Library"
        component={LibraryDepartmentScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const DepartmentStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Departments"
        component={DepartmentScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="School"
        component={SchoolDepartmentScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Hostel"
        component={HostelDepartmentScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Account"
        component={AccountDepartmentScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Library"
        component={LibraryDepartmentScreen}
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
  DepartmentStackNavigator,
  AnnouncementStackNavigator,
  SettingStackNavigator,
  TranscriptStackNavigator,
};
