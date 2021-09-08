//import liraries
import * as React from 'react';
import theme from '../../../../Theme';
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
import HostelSVG from '../../../../assets/svg/hostel.svg';
import {PrimaryButton} from '../../../../components/button';
import {
  ClearanceFailed,
  HeaderComponent,
  ClearanceSuccessful,
  StudentInfo,
} from '../../../../components';

// create a component
const HostelScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent
        title="HOSTEL CLEARANCE"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      {/* <View>
        <HostelSVG width={430} height={240} />
      </View> */}
      <View>
        <Image
          style={{width: wp('100'), height: hp('40'), resizeMode: 'cover'}}
          source={require('../../../../assets/images/hotel.jpg')}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginTop: theme.spacing.m}}>
        <StudentInfo
          title="Student Details"
          studentName="Asante Adarkwa Usman"
          department="BSc Computer Science"
          level="400"
        />
        <View style={styles.borderWidthStyle} />
        {/* <ClearanceFailed reason="You broke a chair that belongs to the hostel in Level 200" /> */}
        <ClearanceSuccessful />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          text="Request Clearance"
          onPress={() => alert('request clearance failed')}
        />
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    bottom: theme.spacing.m,
    alignSelf: 'center',
    marginTop: theme.spacing.m,
  },
  hostelContainer: {
    marginTop: theme.spacing.m,
    marginBottom: theme.spacing.xl,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  hostelStyle: {
    fontFamily: 'roboto-regular',
    fontSize: theme.spacing.m,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyle: {
    fontFamily: 'roboto-regular',
    fontSize: theme.spacing.m,
    fontWeight: 'normal',
  },
  textBoldStyle: {
    fontFamily: 'roboto-regular',
    fontSize: theme.spacing.m,
    fontWeight: 'bold',
  },
  borderWidthStyle: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.lightGrey,
    paddingTop: theme.spacing.l,
  },
});

//make this component available to the app
export default HostelScreen;
