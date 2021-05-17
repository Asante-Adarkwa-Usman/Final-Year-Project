//import liraries
import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const AccountDepartmentScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AccountDepartmentScreen</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default AccountDepartmentScreen;
