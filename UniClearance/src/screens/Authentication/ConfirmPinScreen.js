//import liraries
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
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
import {otpVerifyURL} from '../../network/URL';
import AxiosConfig from '../../network/utils/axiosConfig';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Success, Failure, ConnectionStatus} from '../../components/snackbar';
import {FullScreenLoader} from '../../components';
import axios from 'axios';

// create a component
const width = 280;
const height = 150;
const ConfirmPinScreen = ({navigation}) => {
  const [code, setCode] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [successVisible, setSuccessVisible] = React.useState(false);
  const [errorVisible, setErrorVisible] = React.useState(false);
  const [connectionVisible, setConnectionVisible] = React.useState(false);

  const confirmPin = () => {
    setLoading(true);
    const config = AxiosConfig();
    // otp
    const otpCode = {
      otp: code,
    };
    axios
      .post(otpVerifyURL, otpCode.otp, config)
      .then(response => {
        setLoading(false);
        console.log(response.data);
        setSuccessVisible(true);
        setTimeout(() => {
          setSuccessVisible(false);
          navigation.navigate('ResetPassword');
        }, 4000);
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
        if (error.response) {
          setErrorVisible(true);
          setTimeout(() => {
            setErrorVisible(false);
          }, 4000);
        } else if (error.message === 'Network Error') {
          setLoading(false);
          setConnectionVisible(true);
          setTimeout(() => {
            setConnectionVisible(false);
          }, 4000);
        }
      });
  };
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <FullScreenLoader isFetching={loading} />
        <Success
          message="Pin Successfully Confirmed"
          visible={successVisible}
        />
        <Failure message="Wrong Pin,Try Again " visible={errorVisible} />
        <ConnectionStatus
          message="No Internet, Check Your Internet Connection "
          visible={connectionVisible}
          backgroundColor={theme.colors.red}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{alignSelf: 'center', marginTop: theme.spacing.xl * 2}}>
            <BookSVG width={width} height={height} />
          </View>
          <View style={{marginTop: theme.spacing.xl, alignSelf: 'center'}}>
            <Text style={styles.verifyEmailStyle}>CONFIRM PIN</Text>
          </View>
          <View
            style={{marginLeft: theme.spacing.xl, marginTop: theme.spacing.l}}>
            <Text style={styles.provideTextStyle}>
              Enter the six digits sent to your Email
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
                console.log(`Code is ${code}`);
              }}
            />
          </View>
          <View
            style={{
              marginLeft: theme.spacing.xl,
              marginTop: theme.spacing.m,
            }}>
            <Text
              style={[styles.provideTextStyle, {color: theme.colors.primary}]}
              onPress={() => navigation.navigate('Login')}>
              Go back to login
            </Text>
          </View>
          <View style={{bottom: theme.spacing.s}}>
            <PrimaryButton
              text="Confirm"
              // onPress={confirmPin}
              onPress={() => navigation.navigate('ResetPassword')}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
