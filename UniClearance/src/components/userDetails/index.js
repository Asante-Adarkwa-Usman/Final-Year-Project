import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import theme from '../../Theme';

const UserDetails = ({...props}) => {
  return (
    <View>
      <Image style={styles.imageStyle} source={props.imageSrc} />
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{props.name}</Text>
        <Text style={[styles.textStyle, {fontSize: 10, textAlign: 'center'}]}>
          {props.userId}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  imageStyle: {
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: theme.spacing.l,
    marginLeft: theme.spacing.m,
  },
  textContainer: {marginTop: 4},
  textStyle: {
    fontSize: theme.spacing.m,
    fontFamily: 'roboto-regular',
    color: theme.colors.offWhite,
  },
});
export default UserDetails;

UserDetails.propTypes = {
  imageSrc: PropTypes.any,
  name: PropTypes.string,
  userId: PropTypes.string,
};
