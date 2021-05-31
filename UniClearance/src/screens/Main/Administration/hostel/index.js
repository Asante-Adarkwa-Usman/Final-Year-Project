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
import PrimaryButton from '../../../../components/button/primary';
import ClearanceFailed from '../../../../components/clearanceFailed';

// create a component
const activeOpacity = 0.5;
const HostelScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={activeOpacity}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Image
            source={require('../../../../assets/images/back.png')}
            style={{resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.hostelContainer}>
        <Text style={styles.hostelStyle}>Hostel Clearance</Text>
      </View>
      <View>
        <Image
          style={{width: wp('100'), height: hp('40'), resizeMode: 'cover'}}
          source={require('../../../../assets/images/cat.jpg')}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginTop: theme.spacing.m}}>
        <View>
          <Text style={[styles.hostelStyle, {marginBottom: theme.spacing.m}]}>
            Student Details
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{alignSelf: 'flex-start', marginLeft: theme.spacing.m}}>
            <Text style={styles.textStyle}>Name</Text>
          </View>
          <View style={{marginLeft: theme.spacing.xl * 2}}>
            <Text style={styles.textBoldStyle}>Asante Adarkwa Usman</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: theme.spacing.s}}>
          <View style={{alignSelf: 'flex-start', marginLeft: theme.spacing.m}}>
            <Text style={styles.textStyle}>Department</Text>
          </View>
          <View style={{marginLeft: theme.spacing.xl}}>
            <Text style={styles.textBoldStyle}>Bsc Computer Science</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: theme.spacing.s}}>
          <View style={{alignSelf: 'flex-start', marginLeft: theme.spacing.m}}>
            <Text style={styles.textStyle}>Level</Text>
          </View>
          <View style={{marginLeft: 89}}>
            <Text style={styles.textBoldStyle}>400</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: theme.spacing.s}}>
          <View style={{alignSelf: 'flex-start', marginLeft: theme.spacing.m}}>
            <Text style={styles.textStyle}>Hostel</Text>
          </View>
          <View style={{marginLeft: theme.spacing.xl * 2}}>
            <Text style={styles.textBoldStyle}>Getfund</Text>
          </View>
        </View>
        <View style={styles.borderWidthStyle} />
        <ClearanceFailed reason="You broke a chair that belongs to the hostel in Level 200" />
        <View style={{bottom: theme.spacing.m}}>
          <PrimaryButton
            text="Request Clearance"
            onPress={() => alert('request clearance failed')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    top: hp('2'),
    left: wp('2'),
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
