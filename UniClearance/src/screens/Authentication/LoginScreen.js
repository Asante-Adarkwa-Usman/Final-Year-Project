import * as React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import theme from '../../Theme';
import {TextInput, Provider as PaperProvider} from 'react-native-paper';
import PrimaryButton from '../../components/button/primary';

const LoginScreen = ({navigation}) => {
  const [studentID, setStudentID] = React.useState('');
  const [password, setPassword] = React.useState('');
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
              value={studentID}
              onChangeText={student => setStudentID(student)}
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
              value={password}
              onChangeText={password => setPassword(password)}
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
export default LoginScreen;
