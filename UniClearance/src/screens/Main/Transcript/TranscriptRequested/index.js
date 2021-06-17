import * as React from 'react';
import theme from '../../../../Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {HeaderComponent} from '../../../../components';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const TranscriptRequestedScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent
        title="Transcript Requested"
        onPress={() => {
          navigation.navigate('Transcript');
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TranscriptRequestedScreen;
