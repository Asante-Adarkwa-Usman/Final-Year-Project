import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import theme from '../../Theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SecondaryButton} from '../button';

const activeOpacity = 0.8;
const AnnouncementView = ({...props}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={activeOpacity}
        onPress={props.onPress}>
        <Image style={styles.imageStyle} source={props.imageSrc} />

        <Text style={styles.newsStyle}>{props.news}</Text>
        <Text style={styles.departmentStyle}>{props.department}</Text>
      </TouchableOpacity>
      <View>
        <SecondaryButton
          text="Read"
          backgroundColor={theme.colors.primary}
          borderRadius={theme.borderRadii.m}
          onPress={props.readButtonOnPress}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    resizeMode: 'contain',
    width: wp('38'),
    height: hp('16'),
  },
  newsStyle: {
    fontFamily: 'roboto-regular',
    fontSize: theme.spacing.s + 5,
  },
  departmentStyle: {
    fontFamily: 'roboto-regular',
    fontSize: theme.spacing.s + 5,
    fontWeight: 'bold',
    marginBottom: theme.spacing.s,
  },
});
export default AnnouncementView;
AnnouncementView.prototype = {
  imageSrc: PropTypes.any,
  news: PropTypes.string,
  department: PropTypes.string,
  onPress: PropTypes.func,
  readButtonOnPress: PropTypes.func,
};
