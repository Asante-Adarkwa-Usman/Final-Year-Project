//import liraries
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import theme from '../../Theme';
import BookSVG from '../../assets/svg/book.svg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PrimaryButton from '../../components/button/primary';
import OTPInputView from '@twotalltotems/react-native-otp-input';

// create a component
const width = 280;
const height = 150;
const ConfirmPinScreen = ({navigation}) => {
  const [code, setCode] = React.useState('');
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignSelf: 'center', marginTop: theme.spacing.xl * 2}}>
          <BookSVG width={width} height={height} />
        </View>
        <View style={{marginTop: theme.spacing.xl, alignSelf: 'center'}}>
          <Text style={styles.verifyEmailStyle}>CONFIRM EMAIL</Text>
        </View>
        <View
          style={{marginLeft: theme.spacing.xl, marginTop: theme.spacing.l}}>
          <Text style={styles.provideTextStyle}>
            Enter the four digits sent to your Email
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <OTPInputView
            style={{width: '85%', height: 200}}
            pinCount={6}
            code={code}
            onCodeChanged={code => setCode(code)}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go`);
            }}
          />
        </View>
        <View style={styles.linkTextStyle}>
          <Text style={styles.provideTextStyle}>Haven't received Email?</Text>
          <Text
            style={[
              styles.provideTextStyle,
              {color: theme.colors.primary, marginLeft: theme.spacing.s},
            ]}
            onPress={() => alert('resend pin')}>
            Resend
          </Text>
        </View>
        <View style={{bottom: theme.spacing.s}}>
          <PrimaryButton
            text="Confirm"
            onPress={() => navigation.navigate('ResetPassword')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  imageStyle: {
    resizeMode: 'contain',
    width: wp('75'),
    height: hp('30'),
  },
  verifyEmailStyle: {
    fontFamily: 'Arimo-Regular',
    color: theme.colors.primaryLight,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: theme.spacing.m + 2,
  },
  provideTextStyle: {
    fontFamily: 'Arimo-Regular',
    color: theme.colors.text,
    fontWeight: '400',
    fontSize: theme.spacing.m,
  },
  linkTextStyle: {
    marginLeft: theme.spacing.xl,
    marginTop: theme.spacing.m,
    flexDirection: 'row',
  },
  underlineStyleBase: {
    width: 40,
    height: 45,
    borderWidth: 1,
    color: theme.colors.text,
    fontSize: theme.spacing.m,
  },
  underlineStyleHighLighted: {
    borderColor: theme.colors.primary,
  },
});

//make this component available to the app
export default ConfirmPinScreen;
