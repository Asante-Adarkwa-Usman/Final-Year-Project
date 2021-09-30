//import liraries
import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import theme from '../../Theme';
import PropTypes from 'prop-types';

// create a component
const StudentInfo = ({...props}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.hostelStyle, {marginBottom: theme.spacing.m}]}>
          {props.title}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{alignSelf: 'flex-start', marginLeft: theme.spacing.m}}>
          <Text style={styles.textStyle}>{props.StudentID}</Text>
        </View>
        <View style={{marginLeft: theme.spacing.xl * 2}}>
          <Text style={styles.textBoldStyle}>{props.StudentID}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{alignSelf: 'flex-start', marginLeft: theme.spacing.m}}>
          <Text style={styles.textStyle}>Name</Text>
        </View>
        <View style={{marginLeft: theme.spacing.xl * 2}}>
          <Text style={styles.textBoldStyle}>{props.studentName}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: theme.spacing.s}}>
        <View style={{alignSelf: 'flex-start', marginLeft: theme.spacing.m}}>
          <Text style={styles.textStyle}>Department</Text>
        </View>
        <View style={{marginLeft: theme.spacing.xl}}>
          <Text style={styles.textBoldStyle}>{props.department}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: theme.spacing.s}}>
        <View style={{alignSelf: 'flex-start', marginLeft: theme.spacing.m}}>
          <Text style={styles.textStyle}>Level</Text>
        </View>
        <View style={{marginLeft: 89}}>
          <Text style={styles.textBoldStyle}>{props.level}</Text>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hostelContainer: {
    marginTop: theme.spacing.m,
    marginBottom: theme.spacing.xl,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  hostelStyle: {
    fontFamily: 'roboto-regular',
    fontSize: theme.spacing.m,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyle: {
    fontFamily: 'roboto-regular',
    fontSize: theme.spacing.m,
    fontWeight: 'normal',
  },
  textBoldStyle: {
    fontFamily: 'roboto-regular',
    fontSize: theme.spacing.m,
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default StudentInfo;

StudentInfo.propTypes = {
  studentID: PropTypes.any,
  StudentID: PropTypes.any,
  studentName: PropTypes.any,
  department: PropTypes.any,
};
