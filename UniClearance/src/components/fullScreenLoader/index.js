import * as React from 'react';
import {Text, View, Modal, Dimensions, ActivityIndicator} from 'react-native';
import theme from '../../Theme';

const window = Dimensions.get('window');

const FullScreenLoader = props => {
  return (
    <Modal animationType="fade" transparent={true} visible={props.isFetching}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'column',
            backgroundColor: 'rgba(0,0,0,0.4)',
            width: window.width,
            height: window.height,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </View>
      </View>
    </Modal>
  );
};

export default FullScreenLoader;
