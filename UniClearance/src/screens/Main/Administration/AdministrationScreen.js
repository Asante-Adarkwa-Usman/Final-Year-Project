import * as React from 'react';
import theme from '../../../Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import AllAdministration from '../../../components/button/allAdministration';

const activeOpacity = 0.5;
const AdministrationScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={activeOpacity}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Image
            source={require('../../../assets/images/back.png')}
            style={{resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.allAdminContainer}>
        <Text style={styles.allAdminStyle}>All Administrations</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginBottom: theme.spacing.m}}>
          <AllAdministration
            administrationName="DEPARTMENT"
            backgroundColor={theme.colors.faculty}
            onPress={() => navigation.navigate('Department')}
          />
        </View>
        <View style={{marginBottom: theme.spacing.m}}>
          <AllAdministration
            administrationName="HOSTEL"
            backgroundColor={theme.colors.hostel}
            onPress={() => navigation.navigate('Hostel')}
          />
        </View>
        <View style={{marginBottom: theme.spacing.m}}>
          <AllAdministration
            administrationName="ACCOUNTS"
            backgroundColor={theme.colors.account}
            onPress={() => navigation.navigate('Account')}
          />
        </View>
        <View style={{marginBottom: theme.spacing.m}}>
          <AllAdministration
            administrationName="LIBRARY"
            backgroundColor={theme.colors.red}
            onPress={() => navigation.navigate('Library')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    top: hp('2'),
    left: wp('2'),
  },
  allAdminContainer: {
    marginTop: theme.spacing.m,
    marginBottom: theme.spacing.xl,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  allAdminStyle: {
    fontFamily: 'roboto-regular',
    fontSize: theme.spacing.m,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AdministrationScreen;
