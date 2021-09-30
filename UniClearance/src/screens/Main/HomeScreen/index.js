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
import {
  UserDetails,
  AnnouncementView,
  RecentClearedComponent,
} from '../../../components';
import store from '../../../state-management/store';

let progress = 1.0;
const HomeScreen = ({navigation}) => {
  const [userDataFullname, setUserDataFullname] = React.useState('');
  const [userDataUsername, setUserDataUsername] = React.useState('');

  React.useEffect(() => {
    getStoreData();
  }, []);

  // get data from redux store
  const getStoreData = () => {
    const state = store.getState();
    setUserDataFullname(state.userDetails.userDetails.data.user.fullname);
    setUserDataUsername(state.userDetails.userDetails.data.user.username);
  };

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
              name={userDataFullname}
              userId={userDataUsername}
            />
          </View>
          <View style={styles.bellContainer}>
            <ButtonWithImage
              imageSrc={require('../../../assets/images/bell.png')}
              onPress={() => navigation.navigate('Notification')}
            />
          </View>
        </View>
        {/* <View style={styles.progressContainer}>
          <ProgressBar
            style={styles.progressStyle}
            progress={progress}
            color={Colors.red800}
          />
          <Text style={styles.clearedStyle}>{progress * 100}% Cleared</Text>
        </View> */}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <View
            style={{
              marginLeft: theme.spacing.m,
              marginTop: theme.spacing.m,
            }}>
            <Text style={styles.adminStyle}>Administrations</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Administrations')}>
              <Text style={styles.seeAllStyle}>See All</Text>
            </TouchableOpacity>
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
          {/* <View style={styles.recentContainer}>
            <Text style={styles.departmentStyle}>Recent</Text>
          </View> */}
          {/* <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {departmentStatus ||
              hostelStatus ||
              libraryStatus ||
              accountStatus == null ? (
                <View style={styles.svgStyle}>
                  <StudentSVG width={180} height={120} />
                </View>
              ) : (
                <ScrollView horizontal={true}>
                  <RecentClearedComponent title="DEPARTMENT CLEARED" />
                  <RecentClearedComponent title="HOSTEL CLEARED" />
                  <RecentClearedComponent title="ACCOUNT CLEARED" />
                  <RecentClearedComponent title="LIBRARY CLEARED" />
                </ScrollView>
              )}
            </ScrollView>
          </View> */}
          <View
            style={{
              marginLeft: theme.spacing.m,
              marginTop: theme.spacing.m,
            }}>
            <Text style={styles.adminStyle}>Announcements</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Announcements')}>
              <Text style={styles.seeAllStyle}>See All</Text>
            </TouchableOpacity>
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
          text="View Clearance Summary"
          // disabled={progress == 1.0 ? true : false}
          onPress={() => navigation.navigate('Receipt')}
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
    fontSize: theme.spacing.m - 3,
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
    marginBottom: theme.spacing.m - 2,
  },
  svgStyle: {
    flex: 1,
    alignItems: 'center',
    marginLeft: 10,
    alignSelf: 'center',
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
