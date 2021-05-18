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
} from 'react-native';
import AllDepartments from '../../../components/button/allDepartments';

const activeOpacity = 0.5;
const DepartmentScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={activeOpacity}
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={styles.DrbuttonStyle}>
          <Image
            source={require('../../../assets/images/back.png')}
            style={{resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.allDepartmentContainer}>
        <Text style={styles.allDepartmentStyle}>All Departments</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginBottom: theme.spacing.m}}>
          <AllDepartments
            departmentName="SCHOOLS"
            backgroundColor={theme.colors.faculty}
            onPress={() => navigation.navigate('School')}
          />
        </View>
        <View style={{marginBottom: theme.spacing.m}}>
          <AllDepartments
            departmentName="HOSTEL"
            backgroundColor={theme.colors.hostel}
            onPress={() => navigation.navigate('Hostel')}
          />
        </View>
        <View style={{marginBottom: theme.spacing.m}}>
          <AllDepartments
            departmentName="ACCOUNTS"
            backgroundColor={theme.colors.account}
            onPress={() => navigation.navigate('Account')}
          />
        </View>
        <View style={{marginBottom: theme.spacing.m}}>
          <AllDepartments
            departmentName="LIBRARY"
            backgroundColor={theme.colors.red}
            onPress={() => navigation.navigate('Library')}
          />
        </View>
      </ScrollView>
    </View>
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
  allDepartmentContainer: {
    marginTop: theme.spacing.m,
    marginBottom: theme.spacing.xl,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  allDepartmentStyle: {
    fontFamily: 'roboto-regular',
    fontSize: theme.spacing.m,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DepartmentScreen;
