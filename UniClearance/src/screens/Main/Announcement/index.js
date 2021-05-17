import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import theme from '../../../Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ViewAllComponent from '../../../components/button/viewAll';
// import {getPostData} from '../../../redux/actions/post_actions';
// import {connect} from 'react-redux';

const activeOpacity = 0.5;
const AnnouncementScreen = ({navigation}) => {
  // React.useEffect(() => {
  //   fetchPosts();
  // }, [fetchPosts]);
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={activeOpacity}
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={styles.DrbuttonStyle}>
          <Image
            source={require('../../../assets/images/back.png')}
            style={{resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.allAnnouncementContainer}>
        <Text style={styles.allAnnouncementStyle}>All Announcements</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginBottom: theme.spacing.m}}>
          <ViewAllComponent
            announcement="Changes made in the library"
            onPress={() => alert('go to specific page')}
            imageSrc={require('../../../assets/images/bell.png')}
            backgroundColor="#4C76E1"
          />
        </View>
        <View style={{marginBottom: theme.spacing.m}}>
          <ViewAllComponent
            announcement="Changes made in the library"
            onPress={() => alert('go to specific page')}
            imageSrc={require('../../../assets/images/bell.png')}
            backgroundColor="#4C76E1"
          />
        </View>
        <View style={{marginBottom: theme.spacing.m}}>
          <ViewAllComponent
            announcement="Changes made in the library"
            onPress={() => alert('go to specific page')}
            imageSrc={require('../../../assets/images/bell.png')}
            backgroundColor="#4C76E1"
          />
        </View>
      </ScrollView>
    </View>
  );
};

{
  /* {postData.loading ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <ScrollView style={{alignSelf: 'center'}}>
          <Text style={{alignSelf: 'center'}}>Announcements</Text>
          <Text>
            {postData.data.map(post => (
              <Text id={post.id}>{post.title}</Text>
            ))}
          </Text>
        </ScrollView>
      )} */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    top: hp('2'),
    left: wp('2'),
  },
  allAnnouncementContainer: {
    marginTop: theme.spacing.m,
    marginBottom: theme.spacing.xl,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  allAnnouncementStyle: {
    fontFamily: 'roboto-regular',
    fontSize: theme.spacing.m,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
// Connecting redux to component
// MapStateToProps and MapDispatchToProps
// const mapStateToProps = state => {
//   return {
//     postData: state.posts,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchPosts: () => dispatch(getPostData()),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementScreen);
export default AnnouncementScreen;
