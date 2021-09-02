import * as React from 'react';
import theme from '../../../Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BackSVG from '../../../assets/svg/back.svg';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {AllAdministration} from '../../../components/button';
import {HeaderComponent} from '../../../components';

const AdministrationScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent
        title="All Administrations"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
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
});

export default AdministrationScreen;
