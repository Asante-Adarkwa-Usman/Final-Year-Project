import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import theme from '../../Theme';
import {
  Colors,
  ProgressBar,
  Provider as PaperProvider,
} from 'react-native-paper';
import PrimaryButton from '../../components/button/primary';
import ButtonWithImage from '../../components/button/buttonWithImage';
import UserDetails from '../../components/userDetails';

const HomeScreen = ({navigation}) => {
  return (
    <PaperProvider>
      <View style={styles.topContainer}>
        <View style={{flexDirection: 'row', marginTop: theme.spacing.s}}>
          <ButtonWithImage
            imageSrc={require('../../assets/images/menu.png')}
            onPress={() => navigation.openDrawer()}
          />
          <View style={{marginLeft: theme.spacing.xl * 3}}>
            <UserDetails
              imageSrc={require('../../assets/images/profile.png')}
              name="Prince Angels"
              userId="UE2003111"
            />
          </View>
          <View
            style={{
              marginLeft: theme.spacing.xl * 2,
              marginRight: theme.spacing.s,
            }}>
            <ButtonWithImage
              imageSrc={require('../../assets/images/bell.png')}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: theme.spacing.m,
            alignSelf: 'center',
          }}>
          <ProgressBar
            style={{
              width: wp('45'),
              marginTop: theme.spacing.s,
              backgroundColor: theme.colors.white,
            }}
            progress={0.4}
            color={Colors.red800}
          />
          <Text
            style={{color: theme.colors.offWhite, marginLeft: theme.spacing.s, fontFamily: 'roboto-regular'}}>
            40% Cleared
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View />
        </ScrollView>
      </View>
    </PaperProvider>
  );
};
const styles = StyleSheet.create({
  topContainer: {
    width: wp('100'),
    height: hp('23'),
    backgroundColor: theme.colors.primary,
    borderBottomLeftRadius: theme.borderRadii.l,
    borderBottomRightRadius: theme.borderRadii.l,
  },
});
export default HomeScreen;
