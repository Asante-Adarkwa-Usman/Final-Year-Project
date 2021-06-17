import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import theme from '../../../Theme';
import StudentSVG from '../../../assets/svg/student.svg';
import {
  Colors,
  ProgressBar,
  Provider as PaperProvider,
} from 'react-native-paper';
import {
  PrimaryButton,
  SecondaryButton,
  ButtonWithImage,
} from '../../../components/button';
import {UserDetails, AnnouncementView} from '../../../components';

const HomeScreen = ({navigation}) => {
  return (
    <PaperProvider>
      <View style={styles.topContainer}>
        <View style={styles.secondContainer}>
          <View style={{position: 'absolute', left: 0}}>
            <ButtonWithImage
              imageSrc={require('../../../assets/images/menu.png')}
              onPress={() => navigation.openDrawer()}
            />
          </View>
          <View>
            <UserDetails
              imageSrc={require('../../../assets/images/profile.png')}
              name="Prince Angels"
              userId="UE2003111"
            />
          </View>
          <View style={styles.bellContainer}>
            <ButtonWithImage
              imageSrc={require('../../../assets/images/bell.png')}
              onPress={() => navigation.navigate('Notification')}
            />
          </View>
        </View>
        <View style={styles.progressContainer}>
          <ProgressBar
            style={styles.progressStyle}
            progress={0.4}
            color={Colors.red800}
          />
          <Text style={styles.clearedStyle}>40% Cleared</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <TouchableOpacity
            onPress={() => navigation.navigate('Administrations')}>
            <Text style={styles.seeAllStyle}>See All</Text>
          </TouchableOpacity>
          <View
            style={{
              marginLeft: theme.spacing.m,
            }}>
            <Text style={styles.adminStyle}>Administrations</Text>
          </View>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={styles.adminContainer}>
              <View
                style={{
                  marginRight: theme.spacing.m,
                }}>
                <SecondaryButton
                  text="Department"
                  backgroundColor={theme.colors.faculty}
                  onPress={() => navigation.navigate('Department')}
                />
              </View>
              <View
                style={{
                  marginRight: theme.spacing.m,
                }}>
                <SecondaryButton
                  text="Hostel"
                  backgroundColor={theme.colors.hostel}
                  onPress={() => navigation.navigate('Hostel')}
                />
              </View>
              <View
                style={{
                  marginRight: theme.spacing.m,
                }}>
                <SecondaryButton
                  text="Accounts"
                  backgroundColor={theme.colors.account}
                  onPress={() => navigation.navigate('Account')}
                />
              </View>
              <View style={{marginRight: theme.spacing.m}}>
                <SecondaryButton
                  text="Library"
                  backgroundColor={theme.colors.red}
                  onPress={() => navigation.navigate('Library')}
                />
              </View>
            </View>
          </ScrollView>
          <View style={styles.recentContainer}>
            <Text style={styles.departmentStyle}>Recent</Text>
          </View>
          <ScrollView
            horizontal={true}
            style={{
              alignSelf: 'center',
            }}>
            <View style={{marginLeft: 10}}>
              <StudentSVG width={180} height={120} />
            </View>
          </ScrollView>
          <TouchableOpacity
            onPress={() => navigation.navigate('Announcements')}>
            <Text style={styles.seeAllStyle}>See All</Text>
          </TouchableOpacity>
          <View
            style={{
              marginLeft: theme.spacing.m,
            }}>
            <Text style={styles.departmentStyle}>Announcements</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.AnnouncementViewContainer}>
              <View
                style={{
                  marginRight: theme.spacing.m,
                }}>
                <AnnouncementView
                  imageSrc={require('../../../assets/images/library.png')}
                  news="Students Departure"
                  department="Uenr Library"
                  onPress={() => navigation.navigate('Announcements')}
                  readButtonOnPress={() => navigation.navigate('Announcements')}
                />
              </View>
              <View
                style={{
                  marginRight: theme.spacing.m,
                }}>
                <AnnouncementView
                  imageSrc={require('../../../assets/images/library.png')}
                  news="Students Departure"
                  department="Uenr Library"
                  onPress={() => navigation.navigate('Announcements')}
                  readButtonOnPress={() => navigation.navigate('Announcements')}
                />
              </View>
              <View
                style={{
                  marginRight: theme.spacing.m,
                }}>
                <AnnouncementView
                  imageSrc={require('../../../assets/images/library.png')}
                  news="Students Departure"
                  department="Uenr Library"
                  onPress={() => navigation.navigate('Announcements')}
                  readButtonOnPress={() => navigation.navigate('Announcements')}
                />
              </View>
              <View
                style={{
                  marginRight: theme.spacing.m,
                }}>
                <AnnouncementView
                  imageSrc={require('../../../assets/images/library.png')}
                  news="Students Departure"
                  department="Uenr Library"
                  onPress={() => navigation.navigate('Announcements')}
                  readButtonOnPress={() => navigation.navigate('Announcements')}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ScrollView>
      <View style={{marginVertical: theme.spacing.l}}>
        <PrimaryButton
          text="Request Certificate"
          onPress={() => alert('request certificate')}
        />
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
  bellContainer: {
    position: 'absolute',
    right: 0,
    marginRight: theme.spacing.m,
  },
  secondContainer: {
    flexDirection: 'row',
    marginTop: theme.spacing.s,
    justifyContent: 'space-evenly',
  },
  progressContainer: {
    flexDirection: 'row',
    marginTop: theme.spacing.m,
    alignSelf: 'center',
  },
  progressStyle: {
    width: wp('45'),
    marginTop: theme.spacing.s,
    backgroundColor: theme.colors.white,
  },
  clearedStyle: {
    color: theme.colors.offWhite,
    marginLeft: theme.spacing.s,
    fontFamily: 'roboto-regular',
  },
  seeAllStyle: {
    fontFamily: 'roboto-regular',
    fontSize: theme.spacing.m,
    alignSelf: 'flex-end',
    marginRight: theme.spacing.m,
    marginTop: theme.spacing.s,
  },
  adminStyle: {
    fontFamily: 'roboto-regular',
    fontSize: theme.spacing.m + 3,
    fontWeight: 'bold',
  },
  adminContainer: {
    flexDirection: 'row',
    marginTop: theme.spacing.m,
    marginLeft: theme.spacing.m,
  },
  recentContainer: {
    marginLeft: theme.spacing.m,
    marginTop: theme.spacing.m,
  },
  recentImageStyle: {
    resizeMode: 'contain',
    width: wp('30'),
    height: hp('20'),
  },
  AnnouncementViewContainer: {
    flexDirection: 'row',
    marginLeft: theme.spacing.m,
  },
});
export default HomeScreen;
