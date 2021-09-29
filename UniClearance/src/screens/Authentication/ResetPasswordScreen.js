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
import {resetPasswordURL} from '../../network/URL';
import PrimaryButton from '../../components/button/primary';
import {
  FullScreenLoader,
  ResetPasswordValidationSchema,
} from '../../components';
import {Success, Failure, ConnectionStatus} from '../../components/snackbar';
import AxiosConfig from '../../network/utils/axiosConfig';
import {useFormik} from 'formik';
import axios from 'axios';

// create a component
const width = 280;
const height = 150;
const ResetPasswordScreen = ({navigation}) => {
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [successVisible, setSuccessVisible] = React.useState(false);
  const [errorVisible, setErrorVisible] = React.useState(false);
  const [connectionVisible, setConnectionVisible] = React.useState(false);

  //Form Validation
  const formik = useFormik({
    validationSchema: ResetPasswordValidationSchema,
    initialValues: {
      password: '',
      password_confirmation: '',
    },
    onSubmit: values => {
      setLoading(true);
      const config = AxiosConfig();
      axios
        .post(resetPasswordURL, values, config)
        .then(response => {
          console.log(response.data);
          setLoading(false);
          setSuccessVisible(true);
          setTimeout(() => {
            setSuccessVisible(false);
            navigation.replace('Login');
          }, 4000);
        })
        .catch(error => {
          setLoading(false);
          console.log(error.message);
          if (error.response) {
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
          <Success
            message="Password Successfully Changed"
            visible={successVisible}
          />
          <Failure
            message="Failed, Check Your Credentials and Try Again "
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
              <Text style={styles.resetPasswordStyle}>RESET PASSWORD</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                label="New Password"
                mode="outlined"
                autoCorrect={false}
                // secureTextEntry={true}
                theme={{
                  colors: {
                    primary: theme.colors.primary,
                    underlineColor: 'transparent',
                  },
                }}
                value={formik.values.password}
                onBlur={formik.handleBlur('password')}
                onChangeText={formik.handleChange('password')}
              />
              {formik.errors.password && (
                <Text style={styles.errorStyle}>{formik.errors.password}</Text>
              )}
              <TextInput
                style={[styles.input, {marginTop: theme.spacing.s}]}
                label="Confirm Password"
                mode="outlined"
                autoCorrect={false}
                // secureTextEntry={true}
                theme={{
                  colors: {
                    primary: theme.colors.primary,
                    underlineColor: 'transparent',
                  },
                }}
                value={formik.values.password_confirmation}
                onBlur={formik.handleBlur('password_confirmation')}
                onChangeText={formik.handleChange('password_confirmation')}
              />
              {formik.values.password_confirmation !==
              formik.values.password ? (
                formik.errors.password_confirmation && (
                  <Text style={styles.errorStyle}>
                    {formik.errors.password_confirmation}
                  </Text>
                )
              ) : (
                <Text>''</Text>
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
            <View style={{marginTop: theme.spacing.s, bottom: theme.spacing.s}}>
              <PrimaryButton
                text="Reset"
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
  resetPasswordStyle: {
    fontFamily: 'roboto-regular',
    color: theme.colors.text,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: theme.spacing.m + 2,
    marginBottom: theme.spacing.l,
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
    fontFamily: 'roboto',
    textAlign: 'left',
  },
  errorStyle: {fontSize: theme.spacing.m, color: theme.colors.red},
});

//make this component available to the app
export default ResetPasswordScreen;
