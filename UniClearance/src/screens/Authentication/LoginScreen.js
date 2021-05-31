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
import connect from 'react-redux';
import axios from 'axios';
import {axiosConfig} from '../../network/utils/axiosConfig';
import {loginURL} from '../../network/URL';
import {useFormik} from 'formik';

const width = 280;
const height = 150;
const LoginScreen = ({UserDetails, sendUserDetails, navigation}) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      //post login data
      const config = axiosConfig();
      axios
        .post(loginURL, values, config)
        .then(res => {
          //dispatch user data
          sendUserDetails(res.data);
          setTimeout(() => {
            navigation.navigate('Main');
          }, 3000);
        })
        .catch(error => {
          if (error.request) {
            console.log(error.request);
          } else if (error.response) {
            console.log(error.response);
          }
        });
    },
  });

  return (
    <PaperProvider>
      <SafeAreaView>
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
              value={formik.values.email}
              onChangeText={formik.handleChange}
              left={<TextInput.Icon name="account" />}
            />
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
              onChangeText={formik.handleChange}
              left={<TextInput.Icon name="lock" />}
            />
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
              onPress={() => navigation.replace('Main')}
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
});

// const mapStateToProps = state => {
//   return {
//     UserDetails: state.userLogin,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     sendUserDetails: userData => dispatch(postLoginSuccess(userData)),
//   };
// };
export default LoginScreen;
// export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
