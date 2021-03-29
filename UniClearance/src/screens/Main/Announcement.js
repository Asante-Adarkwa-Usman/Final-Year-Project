import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const AnnouncementScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AnnouncementScreen</Text>
    </View>
  );
};

export default AnnouncementScreen;
