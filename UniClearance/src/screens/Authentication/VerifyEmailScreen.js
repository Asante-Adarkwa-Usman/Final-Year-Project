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
import {TextInput, Provider as PaperProvider} from 'react-native-paper';
import PrimaryButton from '../../components/button/primary';
import {verifyEmailSuccess} from '../../state-management/main/verifyEmail';
import {connect} from 'react-redux';
import axios from 'axios';
import {axiosConfig} from '../../network/utils/axiosConfig';
import {verifyEmailURL} from '../../network/URL';
import {Success, Failure, ConnectionStatus} from '../../components/snackbar';
import {FullScreenLoader, VerifyEmailValidationSchema} from '../../components';
import {useFormik} from 'formik';
import NetInfo from '@react-native-community/netinfo';

// create a component
const width = 280;
const height = 150;
const VerifyEmailScreen = ({sendUserEmail, navigation}) => {
  const [loading, setLoading] = React.useState(false);
  const [successVisible, setSuccessVisible] = React.useState(false);
  const [errorVisible, setErrorVisible] = React.useState(false);
  const [connectionVisible, setConnectionVisible] = React.useState(false);
  React.useEffect(() => {
    NetInfo.fetch().then(state => {
      state.isConnected == true
        ? ''
        : (setConnectionVisible(true),
          setTimeout(() => {
            setConnectionVisible(false);
          }, 7000));
    });
  }, []);

  //Form Validation
  const formik = useFormik({
    validationSchema: VerifyEmailValidationSchema,
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      //post user email
      setLoading(true);
      const config = axiosConfig();
      axios
        .post(verifyEmailURL, values, config)
        .then(res => {
          //dispatch user data
          sendUserEmail(res.data);
          setLoading(false);
          setSuccessVisible(true);
          setTimeout(() => {
            setSuccessVisible(false);
            navigation.replace('ComfirmPin');
          }, 4000);
        })
        .catch(error => {
          if (error.response) {
            setLoading(false);
            setErrorVisible(true);
            console.log(error.response);
            setTimeout(() => {
              setErrorVisible(false);
            }, 7000);
          } else if (error.request) {
            setLoading(false);
            setErrorVisible(true);
            console.log(error.request);
            setTimeout(() => {
              setErrorVisible(false);
            }, 7000);
          }
        });
    },
  });

  return (
    <PaperProvider>
      <SafeAreaView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <FullScreenLoader isFetching={loading} text={'Verifying Email...'} />
          <Success
            message="Check your Email for the auth pin"
            visible={successVisible}
          />
          <Failure
            message="Failed, Check Email and Try Again "
            visible={errorVisible}
          />
          <ConnectionStatus
            message="No Internet, Check Your Internet Connection "
            visible={connectionVisible}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{alignSelf: 'center', marginTop: theme.spacing.xl * 2}}>
              <BookSVG width={width} height={height} />
            </View>
            <View style={{marginTop: theme.spacing.xl, alignSelf: 'center'}}>
              <Text style={styles.verifyEmailStyle}>VERIFY EMAIL</Text>
            </View>
            <View
              style={{
                marginLeft: theme.spacing.xl,
                marginTop: theme.spacing.l,
              }}>
              <Text style={styles.provideTextStyle}>
                Provide email for the Account
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                label="email"
                placeholder="email"
                mode="outlined"
                autoCorrect={false}
                theme={{
                  colors: {
                    primary: theme.colors.primary,
                    underlineColor: 'transparent',
                  },
                }}
                placeholderTextColor={theme.colors.primaryLight}
                keyboardType="email-address"
                value={formik.values.email}
                onBlur={formik.handleBlur('email')}
                onChangeText={formik.handleChange('email')}
                left={<TextInput.Icon name="email" />}
              />
              {formik.errors.email && (
                <Text style={styles.errorStyle}>{formik.errors.email}</Text>
              )}
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
                text="Verify"
                onPress={formik.handleSubmit}
                disabled={!formik.isValid}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </PaperProvider>
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
    fontFamily: 'roboto-regular',
    color: theme.colors.text,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: theme.spacing.m + 2,
  },
  provideTextStyle: {
    fontFamily: 'roboto-regular',
    color: theme.colors.text,
    fontWeight: '400',
    fontSize: theme.spacing.m,
  },
  inputContainer: {
    width: wp('80'),
    alignSelf: 'center',
  },
  input: {
    fontSize: theme.spacing.m,
    fontFamily: 'Arimo-Regular',
  },
  errorStyle: {fontSize: theme.spacing.m, color: theme.colors.red},
});
const mapStateToProps = state => {
  return {
    UserEmail: state.verifyEmail,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendUserEmail: email => dispatch(verifyEmailSuccess(email)),
  };
};
//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmailScreen);
