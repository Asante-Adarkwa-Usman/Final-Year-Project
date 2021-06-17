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
import theme from '../../Theme';
import BookSVG from '../../assets/svg/book.svg';
import {TextInput, Provider as PaperProvider} from 'react-native-paper';
import PrimaryButton from '../../components/button/primary';
import {postLoginSuccess} from '../../state-management/auth/login';
import {connect} from 'react-redux';
import axios from 'axios';
import {axiosConfig} from '../../network/utils/axiosConfig';
import {loginURL} from '../../network/URL';
import {FullScreenLoader, LoginValidationSchema} from '../../components';
import {Success, Failure, ConnectionStatus} from '../../components/snackbar';
import {useFormik} from 'formik';
import * as yup from 'yup';
import NetInfo from '@react-native-community/netinfo';

const width = 280;
const height = 150;
const LoginScreen = ({UserDetails, sendUserDetails, navigation}) => {
  const [loading, setLoading] = React.useState(false);
  const [successVisible, setSuccessVisible] = React.useState(false);
  const [errorVisible, setErrorVisible] = React.useState(false);
  const [connectionVisible, setConnectionVisible] = React.useState(false);

  React.useEffect(() => {
    NetInfo.fetch().then(state => {
      console.log('Connection type is', state.type);
      console.log('Is connected?', state.isConnected);
      state.isConnected == true
        ? ''
        : (setConnectionVisible(true),
          setTimeout(() => {
            setErrorVisible(false);
          }, 3000));
    });
  }, []);

  // Form Validation
  const formik = useFormik({
    validationSchema: LoginValidationSchema,
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
      //post login data
      setLoading(true);
      const config = axiosConfig();
      axios
        .post(loginURL, values, config)
        .then(res => {
          //dispatch user data
          setLoading(false);
          setSuccessVisible(true);
          // sendUserDetails(res.data);
          setTimeout(() => {
            setSuccessVisible(false);
            navigation.replace('Main');
          }, 4000);
        })
        .catch(error => {
          if (error.response) {
            setLoading(false);
            setErrorVisible(true);
            console.log(error.response);
            setTimeout(() => {
              setErrorVisible(false);
            }, 4000);
          } else if (error.request) {
            setLoading(false);
            setConnectionVisible(true);
            console.log(error.request);
            setTimeout(() => {
              setConnectionVisible(false);
            }, 4000);
          }
        });
    },
  });

  return (
    <PaperProvider>
      <SafeAreaView>
        <FullScreenLoader isFetching={loading} text={'Logging in ...'} />
        <Success message="Login Successful" visible={successVisible} />
        <Failure
          message="Failed, Check Your Credentials and Try Again "
          visible={errorVisible}
        />
        <ConnectionStatus
          message="No Internet, Check Your Internet Connection "
          visible={connectionVisible}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <BookSVG width={width} height={height} />
          </View>
          <View style={{marginTop: theme.spacing.xl, alignSelf: 'center'}}>
            <Text style={styles.loginTextStyle}>SIGN IN</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              label="Student ID"
              placeholder="Student ID"
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
              label="password"
              placeholder="password"
              mode="outlined"
              autoCorrect={false}
              minLenght={6}
              secureTextEntry={true}
              theme={{
                colors: {
                  primary: theme.colors.primary,
                  underlineColor: 'transparent',
                },
              }}
              placeholderTextColor={theme.colors.offWhite}
              value={formik.values.password}
              onBlur={formik.handleBlur('password')}
              onChangeText={formik.handleChange('password')}
              left={<TextInput.Icon name="lock" />}
            />
            {formik.errors.password && (
              <Text style={styles.errorStyle}>{formik.errors.password}</Text>
            )}
          </View>
          <View style={{marginTop: theme.spacing.m}}>
            <Text
              onPress={() => navigation.navigate('VerifyEmail')}
              style={styles.resetText}>
              Reset Password
            </Text>
          </View>
          <View>
            <PrimaryButton
              text="Login"
              onPress={formik.handleSubmit}
              disabled={!formik.isValid}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: theme.spacing.xl * 2,
  },
  inputContainer: {
    alignSelf: 'center',
    width: wp('70'),
    margin: 5,
    marginTop: theme.spacing.l,
  },
  input: {
    fontSize: theme.spacing.m,
    fontFamily: 'roboto-regular',
    marginTop: theme.spacing.s,
  },
  imageStyle: {
    resizeMode: 'contain',
    width: wp('60'),
    height: hp('35'),
    marginTop: theme.spacing.l,
  },
  loginTextStyle: {
    fontFamily: 'roboto-regular',
    color: theme.colors.text,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: theme.spacing.m + 2,
  },
  resetText: {
    fontFamily: 'roboto-regular',
    textAlign: 'center',
    fontSize: theme.spacing.m,
    color: theme.colors.primary,
  },
  errorStyle: {fontSize: theme.spacing.m, color: theme.colors.red},
});

const mapStateToProps = state => {
  return {
    UserDetails: state.userLogin,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendUserDetails: userData => dispatch(postLoginSuccess(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
