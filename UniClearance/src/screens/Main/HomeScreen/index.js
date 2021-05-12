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
import theme from '../../../Theme';
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
          <ButtonWithImage
            imageSrc={require('../../../assets/images/menu.png')}
            onPress={() => navigation.openDrawer()}
          />
          <View style={{marginLeft: theme.spacing.xl * 3}}>
            <UserDetails
              imageSrc={require('../../../assets/images/profile.png')}
              name="Prince Angels"
              userId="UE2003111"
            />
          </View>
          <View style={styles.bellContainer}>
            <ButtonWithImage
              imageSrc={require('../../../assets/images/bell.png')}
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
        <TouchableOpacity onPress={() => alert('show all departments')}>
          <Text style={styles.seeAllStyle}>See All</Text>
        </TouchableOpacity>
        <View
          style={{
            marginLeft: theme.spacing.m,
          }}>
          <Text style={styles.departmentStyle}>Department</Text>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View style={styles.departmentContainer}>
            <View
              style={{
                marginRight: theme.spacing.m,
              }}>
              <SecondaryButton
                text="Schools"
                backgroundColor={theme.colors.faculty}
                onPress={() => alert('Go to Faculty screen')}
              />
            </View>
            <View
              style={{
                marginRight: theme.spacing.m,
              }}>
              <SecondaryButton
                text="Hostel"
                backgroundColor={theme.colors.hostel}
                onPress={() => alert('Go to Hostel screen')}
              />
            </View>
            <View
              style={{
                marginRight: theme.spacing.m,
              }}>
              <SecondaryButton
                text="Accounts"
                backgroundColor={theme.colors.account}
                onPress={() => alert('Go to Accounts screen')}
              />
            </View>
            <View style={{marginRight: theme.spacing.m}}>
              <SecondaryButton
                text="Library"
                backgroundColor={theme.colors.red}
                onPress={() => alert('Go to Library screen')}
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
          <View>
            <Image
              style={styles.recentImageStyle}
              source={require('../../../assets/images/student.png')}
            />
          </View>
        </ScrollView>
        <TouchableOpacity onPress={() => alert('show all announcements')}>
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
                onPress={() => alert('Go to specified announcement')}
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
                onPress={() => alert('Go to specified announcement')}
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
                onPress={() => alert('Go to specified announcement')}
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
                onPress={() => alert('Go to specified announcement')}
              />
            </View>
          </View>
        </ScrollView>
        <View style={{marginVertical: theme.spacing.l}}>
          <PrimaryButton
            text="Request Certificate"
            onPress={() => alert('request certificate')}
          />
        </View>
      </ScrollView>
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
    marginLeft: theme.spacing.xl * 2,
    marginRight: theme.spacing.s,
  },
  secondContainer: {flexDirection: 'row', marginTop: theme.spacing.s},
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
  departmentStyle: {
    fontFamily: 'roboto-regular',
    fontSize: theme.spacing.m + 3,
    fontWeight: 'bold',
  },
  departmentContainer: {
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
