import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import theme from '../../../Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const activeOpacity = 0.8;
const ViewAllComponent = ({...props}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        onPress={props.onPress}
        style={[
          styles.buttonStyle,
          {
            backgroundColor: props.backgroundColor,
            color: props.textColor ? props.textColor : theme.colors.white,
          },
        ]}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{resizeMode: 'contain', width: wp('15'), height: hp('4')}}
            source={props.imageSrc}
            //make sure to change the image to announcement image
          />
          <Text style={styles.buttonText}>{props.announcement}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
  },
  buttonStyle: {
    width: wp('90'),
    height: hp('8'),
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Oxygen-Bold',
    textAlign: 'center',
    fontSize: theme.spacing.m,
    marginLeft: theme.spacing.s,
  },
});
export default ViewAllComponent;

ViewAllComponent.propTypes = {
  announcement: PropTypes.string,
  onPress: PropTypes.func,
  imageSrc: PropTypes.any,
  backgroundColor: PropTypes.any,
  textColor: PropTypes.any,
};
