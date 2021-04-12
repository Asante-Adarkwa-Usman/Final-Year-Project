import * as React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import theme from '../../../Theme';

const activeOpacity = 0.9;
const ButtonWithImage = ({...props}) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={activeOpacity} onPress={props.onPress}>
        <Image style={styles.imageStyle} source={props.imageSrc} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  imageStyle: {
    resizeMode: 'contain',
    marginTop: theme.spacing.l,
    marginLeft: theme.spacing.m,
  },
});
export default ButtonWithImage;

ButtonWithImage.propTypes = {
  imageSrc: PropTypes.any,
  onPress: PropTypes.func,
};
