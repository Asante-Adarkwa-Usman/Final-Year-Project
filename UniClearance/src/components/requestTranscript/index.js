//import liraries
import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PendingSVG from '../../assets/svg/pending.svg';
import DeleteSVG from '../../assets/svg/delete.svg';
import SuccessSVG from '../../assets/svg/success.svg';
import theme from '../../Theme';

const activeOpacity = 0.8;
// create a component
const RequestTranscript = ({...props}) => {
  return (
    <View style={{marginTop: theme.spacing.m}}>
      {props.pending === true ? (
        <View style={styles.mainContainer}>
          <View>
            <PendingSVG width={50} height={30} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.copiesStyle}>
              {props.copies} Transcripts requested
            </Text>
            <Text style={styles.yearStyle}>{props.year}</Text>
          </View>
          <View style={{bottom: 5}}>
            <TouchableOpacity
              activeOpacity={activeOpacity}
              onPress={() => alert('Delete request')}>
              <DeleteSVG width={60} height={40} />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.mainContainer}>
          <View>
            <SuccessSVG width={50} height={30} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.copiesStyle}>
              {props.copies} Transcripts requested
            </Text>
            <Text style={styles.yearStyle}>{props.year}</Text>
          </View>
          <View style={{bottom: 5}}>
            <TouchableOpacity onPress={() => alert('Delete request')}>
              <DeleteSVG width={60} height={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginHorizontal: theme.spacing.s,
    justifyContent: 'space-evenly',
  },
  textContainer: {
    flexDirection: 'row',
    padding: 5,
  },
  copiesStyle: {
    fontFamily: 'roboto',
    fontSize: theme.spacing.m,
    marginRight: theme.spacing.m,
  },
  yearStyle: {
    fontFamily: 'roboto',
    fontSize: theme.spacing.m + 2,
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default RequestTranscript;
