import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import theme from '../../Theme';
import {TextInput, Provider as PaperProvider} from 'react-native-paper';
import PrimaryButton from '../../components/button/primary';

const activeOpacity = 0.8;
const ResetPasswordScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  return (
    <PaperProvider>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={activeOpacity}
              onPress={() => {
                navigation.navigate('Login');
              }}
              style={styles.DrbuttonStyle}>
              <Image
                source={require('../../assets/images/back.png')}
                style={{resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Image
              source={require('../../assets/images/book.png')}
              style={styles.imageStyle}
            />
          </View>
          <View style={styles.inputContainer}>
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
              placeholderTextColor={theme.colors.offWhite}
              value={email}
              onChangeText={email => setEmail(email)}
              left={<TextInput.Icon name="email" />}
            />
          </View>
          <View>
            <PrimaryButton
              text="Reset Password"
              onPress={() => alert('Change password')}
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
  },
  buttonContainer: {
    alignSelf: 'flex-start',
    marginLeft: theme.spacing.m,
    marginTop: theme.spacing.m,
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
    alignSelf: 'center',
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
export default ResetPasswordScreen;
