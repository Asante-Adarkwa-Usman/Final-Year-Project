import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import theme from '../../Theme';
import {TextInput, Provider as PaperProvider} from 'react-native-paper';
import PrimaryButton from '../../components/button/primary';
import {postLoginSuccess} from '../../redux/actions/login_actions';
import connect from 'react-redux';
import axios from 'axios';
import {axiosConfig} from '../../network/utils/axiosConfig';
import {loginURL} from '../../network/login_url';
import {useFormik} from 'formik';

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            source={require('../../assets/images/book.png')}
            style={styles.imageStyle}
          />
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
              onPress={() => navigation.navigate('ResetPassword')}
              style={styles.resetText}>
              Reset Password
            </Text>
          </View>
          <View>
            <PrimaryButton
              text="Login"
              onPress={() => navigation.navigate('Main')}
            />
          </View>
        </View>
      </ScrollView>
    </PaperProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
  inputContainer: {
    alignSelf: 'center',
    width: wp('70'),
    margin: 5,
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
  resetText: {
    fontFamily: 'roboto-regular',
    textAlign: 'center',
    fontSize: theme.spacing.m,
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
