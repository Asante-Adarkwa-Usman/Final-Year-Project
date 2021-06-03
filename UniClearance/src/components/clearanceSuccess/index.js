//import liraries
import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import theme from '../../Theme';
import SuccessSVG from '../../assets/svg/success.svg';
import PropTypes from 'prop-types';

// create a component
const width = 200;
const height = 100;
const ClearanceSuccess = ({...props}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.clearanceRequestStyle}>Clearance Successful</Text>
        <SuccessSVG width={width} height={height} />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {marginTop: theme.spacing.l},
  imageContainer: {
    alignSelf: 'center',
    marginBottom: theme.spacing.xl * 2,
  },
  clearanceRequestStyle: {
    marginLeft: theme.spacing.m,
    marginBottom: theme.spacing.m,
    color: theme.colors.success,
    fontSize: theme.spacing.m + 2,
    fontFamily: 'roboto-regular',
  },
});

//make this component available to the app
export default ClearanceSuccess;
ClearanceSuccess.propTypes = {
  reason: PropTypes.any,
};
