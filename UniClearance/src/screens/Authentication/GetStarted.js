import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import GraduateSVG from '../../assets/svg/graduation.svg';
import theme from '../../Theme';
import PrimaryButton from '../../components/button/primary';

const width = 300;
const height = 250;
const GetStarted = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <GraduateSVG width={width} height={height} />
        </View>
        <View style={{alignSelf: 'center', marginTop: theme.spacing.l}}>
          <Text style={styles.mainText}>University Clearance {'\n'}System</Text>
        </View>
        <View style={{marginTop: theme.spacing.s}}>
          <PrimaryButton
            text="Get started"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: theme.spacing.xl * 2,
  },
  mainText: {
    fontFamily: 'roboto-regular',
    fontSize: theme.spacing.l + 3,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default GetStarted;
