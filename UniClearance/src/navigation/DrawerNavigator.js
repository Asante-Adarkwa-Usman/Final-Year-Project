import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  HomeStackNavigator,
  DepartmentStackNavigator,
  AnnouncementStackNavigator,
  SettingStackNavigator,
  TranscriptStackNavigator,
} from './StackNavigator';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      initialRouteName="Home"
      drawerType="slide">
      <Drawer.Screen name="Home" component={HomeStackNavigator} />
      <Drawer.Screen name="Transcript" component={TranscriptStackNavigator} />
      <Drawer.Screen name="Settings" component={SettingStackNavigator} />
      <Drawer.Screen name="Departments" component={DepartmentStackNavigator} />
      <Drawer.Screen
        name="Announcements"
        component={AnnouncementStackNavigator}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
