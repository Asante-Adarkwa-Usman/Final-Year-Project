import * as React from 'react';
import {View, SafeAreaView, StyleSheet, Alert} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {SecondaryButton} from '../components/button';
import {Avatar, Title, Caption, Drawer} from 'react-native-paper';
import {deleteUserData} from '../network/utils/localStorage';
import theme from '../Theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import store from '../state-management/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
const storage = AsyncStorage;

export default function DrawerContent({navigation, ...props}) {
  const [userDataFullname, setUserDataFullname] = React.useState('');
  const [userDataUsername, setUserDataUsername] = React.useState('');

  React.useEffect(() => {
    getStoreData();
  });

  // get data from redux store
  const getStoreData = () => {
    const state = store.getState();
    setUserDataFullname(state.userDetails.userDetails.data.user.fullname);
    setUserDataUsername(state.userDetails.userDetails.data.user.username);
  };
  // logout function
  const Logout = () => {
    Alert.alert(
      'Logout Warning',
      'Are you sure you want to logout?',
      [
        {
          text: 'Yes',
          onPress: () => {
            deleteUserData();
            console.log('async storage cleared and logged out');
            navigation.replace('Login');
          },
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={require('../assets/images/profile.png')}
                size={50}
              />
              <View
                style={{
                  marginLeft: 15,
                  flexDirection: 'column',
                  marginBottom: 15,
                }}>
                <Title style={styles.title}>{userDataFullname}</Title>
                <Caption style={styles.caption}>{userDataUsername}</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section />

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color}) => (
                <Icon name="home-outline" color={color} size={35} />
              )}
              label="Home"
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color}) => <Icon name="domain" color={color} size={35} />}
              label="Administrations"
              onPress={() => {
                navigation.navigate('Administrations');
              }}
            />
            <DrawerItem
              icon={({color}) => (
                <Icon name="folder-settings-outline" color={color} size={35} />
              )}
              label="Transcript"
              onPress={() => {
                navigation.navigate('Transcript');
              }}
            />
            <DrawerItem
              icon={({color}) => (
                <Icon name="bullhorn-outline" color={color} size={35} />
              )}
              label="Announcements"
              onPress={() => {
                navigation.navigate('Announcements');
              }}
            />
            <DrawerItem
              icon={({color}) => (
                <Icon name="cog-outline" color={color} size={35} />
              )}
              label="Settings"
              onPress={() => {
                navigation.navigate('Settings');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <SecondaryButton
          text="Logout"
          backgroundColor={theme.colors.primaryButton}
          borderRadius={theme.borderRadii.m}
          onPress={Logout}
        />
      </Drawer.Section>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: 'roboto-regular',
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontFamily: 'roboto-regular',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginTop: 10,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 2,
    bottom: 5,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
