import * as React from 'react';
import {View, StyleSheet, Text, Dimensions, Modal} from 'react-native';
import theme from '../../Theme';

const {width} = Dimensions.get('window');
const Failure = ({...props}) => {
  return (
    <Modal
      style={styles.container}
      animationType="slide"
      transparent={true}
      visible={props.visible}>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: theme.colors.red,
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

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});

export default Failure;
