import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const TranscriptScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>TranscriptScreen</Text>
    </SafeAreaView>
  );
};

export default TranscriptScreen;
