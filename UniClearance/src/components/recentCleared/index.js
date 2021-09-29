//import liraries
import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RecentClearedSVG from '../../assets/svg/recentCleared.svg';
import theme from '../../Theme';

// create a component
const RecentClearedComponent = ({...props}) => {
  return (
    <View style={styles.container}>
      <RecentClearedSVG />
      <View style={{position: 'absolute', bottom: 10, alignSelf: 'center'}}>
        <Text style={styles.textStyle}>{props.title}</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {marginRight: theme.spacing.m},
  textStyle: {
    fontFamily: 'roboto',
    fontWeight: 'bold',
    color: theme.colors.white,
    marginHorizontal: theme.spacing.s,
  },
});

//make this component available to the app
export default RecentClearedComponent;
