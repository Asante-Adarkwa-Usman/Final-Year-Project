import * as React from 'react';
import theme from '../../../../Theme';
import {HeaderComponent, AnnouncementDetails} from '../../../../components';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';

const AnnouncementDetailScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent
        title="Announcement Details"
        onPress={() => {
          navigation.navigate('Announcement');
        }}
      />
      <AnnouncementDetails
        imageSrc={require('../../../../assets/images/libraryDetails.jpg')}
        title=" Changes made in the library system"
        details=" Changes made in the library system in the University of energy and
          Natural Resources. There have been additional recent books from
          Standard University and other prestiguous universities across the
          world."
      />
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

export default AnnouncementDetailScreen;
