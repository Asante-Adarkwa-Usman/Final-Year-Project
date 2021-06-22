import * as React from 'react';
import theme from '../../Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';

const AnnouncementDetails = ({...props}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={{resizeMode: 'cover', width: wp('110'), height: hp('40')}}
          source={props.imageSrc}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>{props.title}</Text>
      </View>
      <View>
        <Text style={styles.detailsStyle}>{props.details}</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {marginTop: theme.spacing.l, alignSelf: 'center'},
  titleStyle: {
    fontFamily: 'roboto',
    fontSize: theme.spacing.l,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.lightGrey,
    paddingVertical: theme.spacing.m,
  },
  detailsStyle: {
    fontFamily: 'roboto',
    fontSize: theme.spacing.m,
    fontWeight: '400',
    textAlign: 'center',
    paddingTop: theme.spacing.m,
    lineHeight: theme.spacing.m,
  },
});

export default AnnouncementDetails;
