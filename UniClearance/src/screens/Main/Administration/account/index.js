//import liraries
import * as React from 'react';
import theme from '../../../../Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {PrimaryButton} from '../../../../components/button';
import axios from 'axios';
import AxiosConfig from '../../../../network/utils/axiosConfig';
import {departmentURL, libraryClearanceURL} from '../../../../network/URL';
import {ConnectionStatus} from '../../../../components/snackbar';
import NetInfo from '@react-native-community/netinfo';
import {
  ClearanceFailed,
  HeaderComponent,
  ClearanceSuccessful,
  StudentInfo,
  FullScreenLoader,
} from '../../../../components';
import store from '../../../../state-management/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
const storage = AsyncStorage;

// create a component
const AccountScreen = ({navigation}) => {
  const [fullname, setFullname] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [failure, setFailure] = React.useState(false);
  const [deptId, setDeptId] = React.useState();
  const [userToken, setUserToken] = React.useState();
  const [deptName, setDeptName] = React.useState();
  const [connectionVisible, setConnectionVisible] = React.useState(false);

  //upon rendering
  React.useEffect(() => {
    NetInfo.fetch().then(state => {
      state.isConnected == true
        ? ''
        : (setConnectionVisible(true),
          setTimeout(() => {
            setConnectionVisible(false);
          }, 4000));
    });
  }, []);

  React.useEffect(() => {
    getStoreData();
    fetchDepartment();
  });
  const getStoreData = () => {
    const state = store.getState();
    setFullname(state.userDetails.userDetails.data.user.fullname);
    setDeptId(state.userDetails.userDetails.data.student.department.uuid);
    setUserToken(state.userDetails.userDetails.token);
  };

  //fetching department data
  const fetchDepartment = () => {
    const config = AxiosConfig(userToken);
    axios
      .get(departmentURL, config)
      .then(response => {
        for (let i = 0, l = response.data.departments.length; i < l; i++) {
          let obj = response.data.departments[i];
          if (obj.uuid === deptId) {
            setDeptName(obj.name);
          } else {
            return null;
          }
        }
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  //Account Clearance
  const accountClearance = () => {
    setLoading(true);
    const config = AxiosConfig(userToken);
    axios
      .post(libraryClearanceURL, {}, config)
      .then(response => {
        setLoading(false);
        console.log(response.data);
        setSuccess(true);
        storage.setItem('AccountCleared', 'true');
        storage.setItem('ClearedOnce', 'true');
      })
      .catch(error => {
        setLoading(false);
        console.log(error.message);
        setFailure(true);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FullScreenLoader isFetching={loading} />
      <ConnectionStatus
        message="No Internet, Could not fetch data "
        visible={connectionVisible}
        backgroundColor={theme.colors.red}
      />
      <HeaderComponent
        title="FINANCE CLEARANCE"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      {/* <View>
        <HostelSVG width={430} height={240} />
      </View> */}
      <View>
        <Image
          style={{width: wp('100'), height: hp('40'), resizeMode: 'cover'}}
          source={require('../../../../assets/images/money.jpg')}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginTop: theme.spacing.m}}>
        <StudentInfo
          title="Student Details"
          studentName={fullname}
          department={deptName}
          level="400"
        />
        <View style={styles.borderWidthStyle} />
        {success === true ? <ClearanceSuccessful /> : <Text>''</Text>}
        {failure === true ? (
          <ClearanceFailed reason="The reasons" />
        ) : (
          <Text>''</Text>
        )}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <PrimaryButton text="Request Clearance" onPress={accountClearance} />
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  buttonContainer: {
    bottom: theme.spacing.m,
    alignSelf: 'center',
    marginTop: theme.spacing.m,
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
  borderWidthStyle: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.lightGrey,
    paddingTop: theme.spacing.l,
  },
});

//make this component available to the app
export default AccountScreen;
