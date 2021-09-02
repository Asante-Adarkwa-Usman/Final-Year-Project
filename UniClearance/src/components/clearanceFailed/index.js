//import liraries
import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import theme from '../../Theme';
import WarningSVG from '../../assets/svg/warning.svg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PropTypes from 'prop-types';

// create a component
const width = 40;
const height = 20;
const ClearanceFailed = ({...props}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <WarningSVG width={width} height={height} />
        <Text style={styles.clearanceRequestStyle}>
          Clearance Request Failed
        </Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.reasonContainer}>
          <Text style={styles.reasonStyle}>{props.reason}</Text>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {marginTop: theme.spacing.l},
  imageContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: theme.spacing.m,
  },
  clearanceRequestStyle: {
    marginLeft: theme.spacing.m,
    color: theme.colors.red,
    fontSize: theme.spacing.m,
    fontFamily: 'roboto-regular',
  },
  mainContainer: {
    width: wp('80'),
    height: hp('20'),
    backgroundColor: theme.colors.lightGrey,
    alignSelf: 'center',
    borderRadius: theme.borderRadii.m,
  },
  reasonContainer: {
    marginLeft: theme.spacing.m,
    marginTop: theme.spacing.m,
    marginRight: theme.spacing.m,
  },
  reasonStyle: {
    fontSize: theme.spacing.m,
    fontFamily: 'roboto-regular',
    color: theme.colors.grey,
    textAlign: 'center',
  },
});

//make this component available to the app
export default ClearanceFailed;
ClearanceFailed.propTypes = {
  reason: PropTypes.any,
};
