import React from 'react';
import theme from '../../../Theme';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {HeaderComponent} from '../../../components';
import {PrimaryButton} from '../../../components/button';
import {TextInput, Provider as PaperProvider} from 'react-native-paper';

const SettingScreen = ({navigation}) => {
  const [fullname, setFullName] = React.useState();
  const [password, setPassword] = React.useState();
  const [confirmPassword, setConfirmPassword] = React.useState();

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <HeaderComponent
            title="Settings"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              label="Full Name"
              mode="outlined"
              autoCorrect={false}
              theme={{
                colors: {
                  primary: theme.colors.primary,
                  underlineColor: 'transparent',
                },
              }}
              placeholderTextColor={theme.colors.offWhite}
              value={fullname}
              onChangeText={fullname => setFullName(fullname)}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Password Update</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              label="New Password"
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
            />
            <TextInput
              style={styles.input}
              label="Re-type Password"
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
              value={confirmPassword}
              onChangeText={confirmPassword =>
                setConfirmPassword(confirmPassword)
              }
            />
          </View>
          <View style={{marginTop: theme.spacing.l}}>
            <PrimaryButton text="Save" onPress={() => alert('Save the data')} />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </PaperProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    alignSelf: 'center',
    marginLeft: theme.spacing.m + 3,
    marginTop: theme.spacing.m,
  },
  textStyle: {
    fontFamily: 'roboto-regular',
    textAlign: 'center',
    fontSize: theme.spacing.m + 3,
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
});
export default SettingScreen;
