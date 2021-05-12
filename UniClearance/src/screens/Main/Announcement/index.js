import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {getPostData} from '../../../redux/actions/post_actions';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const AnnouncementScreen = ({postData, fetchPosts}) => {
  React.useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);
  return (
    <View style={styles.container}>
      {postData.loading ? (
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
      )}
    </View>
  );
};
// Connecting redux to component
// MapStateToProps and MapDispatchToProps
const mapStateToProps = state => {
  return {
    postData: state.posts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(getPostData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementScreen);
