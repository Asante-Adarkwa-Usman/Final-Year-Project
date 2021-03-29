import * as React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import theme from '../../Theme';
import PrimaryButton from '../../components/button/primary';

const GetStarted = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/graduation.png')}
          style={styles.imageStyle}
        />
      </View>
      <View style={{alignSelf: 'center'}}>
        <Text style={styles.mainText}>University Clearance {'\n'}System</Text>
      </View>
      <View style={{marginTop: theme.spacing.s}}>
        <PrimaryButton
          text="Get started"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
  imageStyle: {
    resizeMode: 'contain',
    width: wp('70'),
    height: hp('45'),
    marginTop: theme.spacing.l,
  },
  mainText: {
    fontFamily: 'roboto-regular',
    fontSize: theme.spacing.l + 3,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default GetStarted;
