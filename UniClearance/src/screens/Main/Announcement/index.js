import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import theme from '../../../Theme';
import BackSVG from '../../../assets/svg/back.svg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ViewAllComponent from '../../../components/button/viewAll';
// import {getPostData} from '../../../redux/actions/post_actions';
// import {connect} from 'react-redux';

const activeOpacity = 0.5;
const width = 30;
const height = 20;
const AnnouncementScreen = ({navigation}) => {
  // React.useEffect(() => {
  //   fetchPosts();
  // }, [fetchPosts]);
  //www.google.com/url?sa=i&url=https%3A%2F%2Fwww.maacsiliguri.com%2Fvar-plus.php&psig=AOvVaw3ibnYI_2IeaQQiIxzhmagE&ust=1633076304190000&source=images&cd=vfe&ved=0CAYQjRxqFwoTCNDZ3rqhpvMCFQAAAAAdAAAAABAO
  https: return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={activeOpacity}
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={styles.DrbuttonStyle}>
          <BackSVG width={width} height={height} />
        </TouchableOpacity>
      </View>
      <View style={styles.allAnnouncementContainer}>
        <Text style={styles.allAnnouncementStyle}>All Announcements</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginBottom: theme.spacing.m}}>
          <ViewAllComponent
            announcement="Changes made in the library"
            onPress={() => navigation.navigate('AnnouncementDetails')}
            imageSrc={require('../../../assets/images/blackBell.png')}
          />
        </View>
        <View style={{marginBottom: theme.spacing.m}}>
          <ViewAllComponent
            announcement="Changes made in the library"
            onPress={() => navigation.navigate('AnnouncementDetails')}
            imageSrc={require('../../../assets/images/blackBell.png')}
          />
        </View>
        <View style={{marginBottom: theme.spacing.m}}>
          <ViewAllComponent
            announcement="Changes made in the library"
            onPress={() => navigation.navigate('AnnouncementDetails')}
            imageSrc={require('../../../assets/images/blackBell.png')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
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
    fontSize: theme.spacing.m + 2,
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
