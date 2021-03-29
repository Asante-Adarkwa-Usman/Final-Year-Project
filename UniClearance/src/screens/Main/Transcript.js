import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const TranscriptScreen = () => {
  return (
    <View style={styles.container}>
      <Text>TranscriptScreen</Text>
    </View>
  );
};

export default TranscriptScreen;
