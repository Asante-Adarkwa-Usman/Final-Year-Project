import * as React from 'react';
import theme from '../../../../Theme';
import {HeaderComponent} from '../../../../components';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {ViewAllComponent} from '../../../../components/button';

const NotificationScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent
        title="Notifications"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginBottom: theme.spacing.m}}>
          <ViewAllComponent
            announcement="Changes made in the library"
            onPress={() => alert('go to specific page')}
            imageSrc={require('../../../../assets/images/blackBell.png')}
            backgroundColor={theme.colors.white}
            textColor={theme.colors.text}
          />
        </View>
        <View style={{marginBottom: theme.spacing.m}}>
          <ViewAllComponent
            announcement="Changes made in the library"
            onPress={() => alert('go to specific page')}
            imageSrc={require('../../../../assets/images/blackBell.png')}
            backgroundColor={theme.colors.white}
            textColor={theme.colors.text}
          />
        </View>
        <View style={{marginBottom: theme.spacing.m}}>
          <ViewAllComponent
            announcement="Changes made in the library"
            onPress={() => alert('go to specific page')}
            imageSrc={require('../../../../assets/images/blackBell.png')}
            backgroundColor={theme.colors.white}
            textColor={theme.colors.text}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NotificationScreen;
