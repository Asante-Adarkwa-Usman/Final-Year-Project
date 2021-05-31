import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const SettingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SettingScreen</Text>
    </SafeAreaView>
  );
};

export default SettingScreen;
