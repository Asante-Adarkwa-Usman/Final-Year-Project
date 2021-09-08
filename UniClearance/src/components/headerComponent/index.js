import * as React from 'react';
import theme from '../../Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PropTypes from 'prop-types';
import BackSVG from '../../assets/svg/back.svg';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const activeOpacity = 0.5;
const width = 30;
const height = 20;

// create a component
const HeaderComponent = ({navigation, ...props}) => {
  return (
    <View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity activeOpacity={activeOpacity} onPress={props.onPress}>
          <BackSVG width={width} height={height} />
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>{props.title}</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    top: hp('2'),
    left: wp('2'),
  },
  titleContainer: {
    marginTop: theme.spacing.m,
    marginBottom: theme.spacing.xl,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  titleStyle: {
    fontFamily: 'roboto-regular',
    fontSize: theme.spacing.m + 2,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

//make this component available to the app
export default HeaderComponent;
HeaderComponent.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};
