import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {SecondaryButton} from '../components/button';
import {Avatar, Title, Caption, Drawer} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={require('../assets/images/cat.jpg')}
                size={50}
              />
              <View
                style={{
                  marginLeft: 15,
                  flexDirection: 'column',
                  marginBottom: 15,
                }}>
                <Title style={styles.title}>Prince Angels</Title>
                <Caption style={styles.caption}>example@gmail.com</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section />

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="folder-settings-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Transcript"
              onPress={() => {
                props.navigation.navigate('Transcript');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="cog-outline" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate('Settings');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="domain" color={color} size={size} />
              )}
              label="Department"
              onPress={() => {
                props.navigation.navigate('Departments');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="bullhorn-outline" color={color} size={size} />
              )}
              label="Announcement"
              onPress={() => {
                props.navigation.navigate('Announcements');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <SecondaryButton
          text="Logout"
          onPress={() => props.navigation.navigate('Login')}
        />
      </Drawer.Section>
    </View>
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
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
