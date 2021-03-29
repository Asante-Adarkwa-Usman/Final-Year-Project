import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const DepartmentScreen = () => {
  return (
    <View style={styles.container}>
      <Text>DepartmentScreen</Text>
    </View>
  );
};

export default DepartmentScreen;
