import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
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
import axios from 'axios';
import AxiosConfig from '../../network/utils/axiosConfig';
import {connect} from 'react-redux';
import {getUserDataSuccess} from '../../state-management/main/userData';
import {loginURL} from '../../network/URL';
import {Root, Popup, Toast} from 'popup-ui';
import {FullScreenLoader, LoginValidationSchema} from '../../components';
import {Success, Failure, ConnectionStatus} from '../../components/snackbar';
import {useFormik} from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
const storage = AsyncStorage;

const width = 280;
const height = 150;

const LoginScreen = ({getUserData, navigation}) => {
  const [loading, setLoading] = React.useState(false);
  const [successVisible, setSuccessVisible] = React.useState(false);
  const [errorVisible, setErrorVisible] = React.useState(false);
  const [connectionVisible, setConnectionVisible] = React.useState(false);

  React.useEffect(() => {
    //Show notice upon rendering
    Popup.show({
      type: 'Danger',
      title: 'Notice',
      textBody:
        'Please change the default password to a desired one before login',
      buttonText: 'Continue',
      callback: () => {
        Popup.hide();
      },
    });
  }, []);

  // Form Validation
  const formik = useFormik({
    validationSchema: LoginValidationSchema,
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async values => {
      setLoading(true);
      const config = AxiosConfig();
      axios
        .post(loginURL, values, config)
        .then(response => {
          //save user details if success
          console.log(response.data);
          getUserData(response.data);
          storage.setItem('userLoginData', JSON.stringify(response.data.data));
          storage.setItem(
            'deptId',
            JSON.stringify(response.data.data.student.department.uuid),
          );
          storage.setItem('userToken', JSON.stringify(response.data.token));
          setLoading(false);
          setSuccessVisible(true);
          setTimeout(() => {
            setSuccessVisible(false);
            navigation.replace('Main');
          }, 4000);
          storage.setItem('isLoggedIn', 'true');
        })
        .catch(error => {
          console.log(error.message);
          if (error.response) {
            setLoading(false);
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
    },
  });

  return (
    <Root>
      <PaperProvider>
        <SafeAreaView>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <FullScreenLoader isFetching={loading} />
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
                  <Text style={styles.errorStyle}>
                    {formik.errors.username}
                  </Text>
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
                  <Text style={styles.errorStyle}>
                    {formik.errors.password}
                  </Text>
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
                  // onPress={() => navigation.navigate('Main')}
                  onPress={formik.handleSubmit}
                  disabled={!formik.isValid}
                />
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </PaperProvider>
    </Root>
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

//mapStateToProps and mapDispatchToProps
const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => {
  return {
    getUserData: userData => dispatch(getUserDataSuccess(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
