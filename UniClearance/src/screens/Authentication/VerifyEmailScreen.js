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
import AxiosConfig from '../../network/utils/axiosConfig';
import {verifyEmailURL} from '../../network/URL';
import {Success, Failure, ConnectionStatus} from '../../components/snackbar';
import {FullScreenLoader, VerifyEmailValidationSchema} from '../../components';
import {useFormik} from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
const storage = AsyncStorage;

// create a component
const width = 280;
const height = 150;
const VerifyEmailScreen = ({navigation}) => {
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [successVisible, setSuccessVisible] = React.useState(false);
  const [errorVisible, setErrorVisible] = React.useState(false);
  const [connectionVisible, setConnectionVisible] = React.useState(false);

  //Form Validation
  const formik = useFormik({
    validationSchema: VerifyEmailValidationSchema,
    initialValues: {
      username: '',
      email: '',
    },
    onSubmit: values => {
      setLoading(true);
      const config = AxiosConfig();
      axios
        .post(verifyEmailURL, values, config)
        .then(response => {
          console.log(response.data);
          setMessage(response.data.message);
          storage.setItem('otpToken', JSON.stringify(response.data.token));
          setLoading(false);
          setSuccessVisible(true);
          setTimeout(() => {
            setSuccessVisible(false);
            navigation.replace('ConfirmPin');
          }, 4000);
        })
        .catch(error => {
          console.log(error.response.data);
          if (error.response) {
            setLoading(false);
            setErrorVisible(true);
            setTimeout(() => {
              setErrorVisible(false);
            }, 7000);
          } else if (error.request) {
            setLoading(false);
            setConnectionVisible(true);
            setTimeout(() => {
              setConnectionVisible(false);
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
          <FullScreenLoader isFetching={loading} />
          <Success message={message} visible={successVisible} />
          <Failure
            message="Failed, Check details and Try Again "
            visible={errorVisible}
          />
          <ConnectionStatus
            message="No Internet, Check Your Internet Connection "
            visible={connectionVisible}
            backgroundColor={theme.colors.red}
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
                Provide your Student ID and Email
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                label="Student ID"
                mode="outlined"
                autoCorrect={false}
                theme={{
                  colors: {
                    primary: theme.colors.primary,
                    underlineColor: 'transparent',
                  },
                }}
                placeholderTextColor={theme.colors.offWhite}
                value={formik.values.username}
                onBlur={formik.handleBlur('username')}
                onChangeText={formik.handleChange('username')}
                left={<TextInput.Icon name="account" />}
              />
              {formik.errors.username && (
                <Text style={styles.errorStyle}>{formik.errors.username}</Text>
              )}
              <TextInput
                style={styles.input}
                label="Email"
                placeholder="Email"
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
                // onPress={() => navigation.navigate('ConfirmPin')}
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
const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    sendUserEmail: email => dispatch(verifyEmailSuccess(email)),
  };
};
//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmailScreen);
