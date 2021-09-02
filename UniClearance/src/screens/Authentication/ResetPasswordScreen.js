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

// create a component
const width = 280;
const height = 150;
const ResetPasswordScreen = ({navigation}) => {
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  return (
    <PaperProvider>
      <SafeAreaView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
                // minLenght={6}
                // secureTextEntry={true}
                theme={{
                  colors: {
                    primary: theme.colors.primary,
                    underlineColor: 'transparent',
                  },
                }}
                value={password}
                onChangeText={password => setPassword(password)}
              />
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
                value={confirmPassword}
                onChangeText={confirmPassword =>
                  setConfirmPassword(confirmPassword)
                }
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
            <View style={{marginTop: theme.spacing.s, bottom: theme.spacing.s}}>
              <PrimaryButton
                text="Reset"
                onPress={() => navigation.navigate('Login')}
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
});

//make this component available to the app
export default ResetPasswordScreen;
