import * as React from 'react';
import {View, StyleSheet, Text, Dimensions, Modal} from 'react-native';
import PropTypes from 'prop-types';

const {width} = Dimensions.get('window');
const ConnectionStatus = ({...props}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={props.visible}>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: props.backgroundColor
            ? props.backgroundColor
            : '#3d4451',
          width: width,
          paddingHorizontal: 24,
          paddingVertical: 14,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          {props.message}
        </Text>
      </View>
    </Modal>
  );
};

export default ConnectionStatus;

ConnectionStatus.propTypes = {
  backgroundColor: PropTypes.any,
};
