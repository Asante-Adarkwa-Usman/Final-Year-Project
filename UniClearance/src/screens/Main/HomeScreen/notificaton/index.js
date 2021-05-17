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
} from 'react-native';
import ViewAllComponent from '../../../../components/button/viewAll';

const activeOpacity = 0.5;
const NotificationScreen = ({navigation}) => {
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
            source={require('../../../../assets/images/back.png')}
            style={{resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.allDepartmentContainer}>
        <Text style={styles.allDepartmentStyle}>Notifications</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginBottom: theme.spacing.m,
            borderBottomWidth: 1,
            borderBottomColor: theme.colors.lightGrey,
          }}>
          <ViewAllComponent
            announcement="Changes made in the library"
            onPress={() => alert('go to specific page')}
            imageSrc={require('../../../../assets/images/bell.png')}
            backgroundColor={theme.colors.grey}
            textColor={theme.colors.text}
          />
        </View>
        <View style={{marginBottom: theme.spacing.m}}>
          <ViewAllComponent
            announcement="Changes made in the library"
            onPress={() => alert('go to specific page')}
            imageSrc={require('../../../../assets/images/bell.png')}
            backgroundColor={theme.colors.grey}
            textColor={theme.colors.text}
          />
        </View>
        <View style={{marginBottom: theme.spacing.m}}>
          <ViewAllComponent
            announcement="Changes made in the library"
            onPress={() => alert('go to specific page')}
            imageSrc={require('../../../../assets/images/bell.png')}
            backgroundColor={theme.colors.grey}
            textColor={theme.colors.text}
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

export default NotificationScreen;
