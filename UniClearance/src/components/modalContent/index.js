//import liraries
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import theme from '../../Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// create a component
const ModalContent = ({...props}) => {
  const [year, setYear] = React.useState();
  const [copies, setCopies] = React.useState();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={[styles.hostelStyle, {marginBottom: theme.spacing.m}]}>
            {props.title}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style={{alignSelf: 'flex-start', padding: theme.spacing.m}}>
            <Text style={styles.textStyle}>Academic Year</Text>
          </View>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={year => setYear(year)}
              value={year}
              placeholder="eg. 1990"
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View
            style={{
              alignSelf: 'flex-start',
              padding: theme.spacing.m,
              marginRight: theme.spacing.xl + 10,
            }}>
            <Text style={styles.textStyle}>Copies</Text>
          </View>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={copies => setCopies(copies)}
              value={copies}
              placeholder="eg. 3"
              keyboardType="numeric"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: theme.spacing.l,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hostelStyle: {
    fontFamily: 'roboto-regular',
    fontSize: theme.spacing.m + 3,
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
  input: {
    fontSize: theme.spacing.m,
    fontFamily: 'roboto-regular',
    textAlign: 'center',
    height: 40,
    width: wp('30'),
    margin: 12,
    borderWidth: 1,
  },
});

//make this component available to the app
export default ModalContent;
