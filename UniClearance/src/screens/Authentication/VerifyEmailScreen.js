//import liraries
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
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
const VerifyEmailScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  return (
    <PaperProvider>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{alignSelf: 'center', marginTop: theme.spacing.xl * 2}}>
            <BookSVG width={width} height={height} />
          </View>
          <View style={{marginTop: theme.spacing.xl, alignSelf: 'center'}}>
            <Text style={styles.verifyEmailStyle}>VERIFY EMAIL</Text>
          </View>
          <View
            style={{marginLeft: theme.spacing.xl, marginTop: theme.spacing.l}}>
            <Text style={styles.provideTextStyle}>
              Provide email for the Account
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              label="email"
              placeholder="email"
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
              value={email}
              onChangeText={email => setEmail(email)}
              left={<TextInput.Icon name="email" />}
            />
          </View>
          <View
            style={{marginLeft: theme.spacing.xl, marginTop: theme.spacing.m}}>
            <Text
              style={[styles.provideTextStyle, {color: theme.colors.primary}]}
              onPress={() => navigation.navigate('Login')}>
              Go back to login
            </Text>
          </View>
          <View style={{bottom: theme.spacing.s}}>
            <PrimaryButton
              text="Verify"
              onPress={() => {
                navigation.navigate('ConfirmPin');
              }}
            />
          </View>
        </ScrollView>
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
});

//make this component available to the app
export default VerifyEmailScreen;
