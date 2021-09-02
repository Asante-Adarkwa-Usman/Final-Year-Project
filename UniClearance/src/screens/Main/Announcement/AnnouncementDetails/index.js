import * as React from 'react';
import theme from '../../../../Theme';
import {HeaderComponent, AnnouncementDetails} from '../../../../components';
import BackSVG from '../../../../assets/svg/back.svg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const activeOpacity = 0.5;
const width = 38;
const height = 35;

const AnnouncementDetailScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={activeOpacity}
          onPress={() => {
            navigation.navigate('Announcement');
          }}>
          <BackSVG width={width} height={height} />
        </TouchableOpacity>
      </View>
      <AnnouncementDetails
        imageSrc={require('../../../../assets/images/libraryDetails.jpg')}
        title=" Changes made in the library system"
        details=" Changes made in the library system in the University of energy and
          Natural Resources. There have been additional recent books from
          Standard University and other prestiguous universities across the
          world."
      />
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
    zIndex: 100,
    backgroundColor: theme.colors.lightGrey,
  },
  titleContainer: {marginTop: theme.spacing.l, alignSelf: 'center'},
  titleStyle: {
    fontFamily: 'roboto',
    fontSize: theme.spacing.l,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.lightGrey,
    paddingVertical: theme.spacing.m,
  },
  detailsStyle: {
    fontFamily: 'roboto',
    fontSize: theme.spacing.m,
    fontWeight: '400',
    textAlign: 'center',
    paddingTop: theme.spacing.m,
    lineHeight: theme.spacing.m,
  },
});

export default AnnouncementDetailScreen;
