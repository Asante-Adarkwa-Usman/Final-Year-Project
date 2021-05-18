import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import theme from '../../../Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const activeOpacity = 0.8;
const AllDepartments = ({...props}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        disabled={props.disabled}
        activeOpacity={activeOpacity}
        onPress={props.onPress}
        style={[
          styles.buttonStyle,
          {
            backgroundColor: props.backgroundColor,
          },
        ]}>
        <Text style={styles.buttonText}>{props.departmentName}</Text>
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
    color: theme.colors.white,
  },
});
export default AllDepartments;

AllDepartments.propTypes = {
  departmentName: PropTypes.string,
  onPress: PropTypes.func,
  backgroundColor: PropTypes.any,
};
