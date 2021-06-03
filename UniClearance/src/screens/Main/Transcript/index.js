import * as React from 'react';
import theme from '../../../Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {HeaderComponent} from '../../../components';
import TranscriptSVG from '../../../assets/svg/reportCard.svg';
import {PrimaryButton} from '../../../components/button';

import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const width = 200;
const height = 130;

const TranscriptScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent
        title="Transcript"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <View style={styles.imageContainer}>
        <TranscriptSVG width={width} height={height} />
        <Text style={styles.textStyle}>No Records</Text>
      </View>
      <View style={{marginVertical: theme.spacing.xl}}>
        <PrimaryButton
          text="Request Transcript"
          onPress={() => alert('request transcript')}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: theme.spacing.xl,
  },
  textStyle: {
    marginTop: theme.spacing.s,
    fontFamily: 'roboto-regular',
    color: theme.colors.grey,
  },
});

export default TranscriptScreen;
