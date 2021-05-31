import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import theme from '../../../Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const activeOpacity = 0.8;
const PrimaryButton = ({...props}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        disabled={props.disabled}
        activeOpacity={activeOpacity}
        onPress={props.onPress}
        style={[
          styles.buttonStyle,
          {
            backgroundColor: props.disabled
              ? theme.colors.lightGrey
              : theme.colors.primaryButton,
          },
        ]}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    marginTop: theme.spacing.l,
    textTransform: 'lowercase',
  },
  buttonStyle: {
    width: wp('60'),
    height: hp('6'),
    padding: theme.spacing.s,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadii.xl,
    shadowColor: theme.colors.text,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,

    elevation: 3,
  },
  buttonText: {
    fontFamily: 'Oxygen-Bold',
    textAlign: 'center',
    fontSize: theme.spacing.m,
    color: theme.colors.white,
  },
});
export default PrimaryButton;

PrimaryButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};
