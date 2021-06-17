import * as React from 'react';
import {Text, View, Modal, Dimensions, ActivityIndicator} from 'react-native';
import theme from '../../Theme';

const window = Dimensions.get('window');

const FullScreenLoader = props => {
  return (
    <Modal animationType="fade" transparent={true} visible={props.isFetching}>
      <View
        style={{
          // flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'column',
            backgroundColor: 'rgba(0,0,0,0.6)',
            width: window.width,
            height: window.height,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
          <Text
            style={{
              color: 'blue',
              fontSize: theme.spacing.l,
              alignSelf: 'center',
            }}>
            {props.text ? props.text : 'Loading...'}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default FullScreenLoader;
