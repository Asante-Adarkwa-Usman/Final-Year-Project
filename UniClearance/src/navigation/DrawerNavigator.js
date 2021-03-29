import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  HomeStackNavigator,
  DepartmentStackNavigator,
  AnnouncementStackNavigator,
  SettingStackNavigator,
  TranscriptStackNavigator,
} from './StackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStackNavigator} />
      <Drawer.Screen
        name="Transcript"
        component={TranscriptStackNavigator}
        options={{drawerLabel: 'Transcript'}}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingStackNavigator}
        options={{drawerLabel: 'Settings'}}
      />
      <Drawer.Screen
        name="Departments"
        component={DepartmentStackNavigator}
        options={{drawerLabel: 'Departments'}}
      />
      <Drawer.Screen
        name="Announcements"
        component={AnnouncementStackNavigator}
        options={{drawerLabel: 'Announcements'}}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
