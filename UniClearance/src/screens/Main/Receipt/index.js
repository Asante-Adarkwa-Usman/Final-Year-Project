// //import liraries
// import * as React from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   SafeAreaView,
// } from 'react-native';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import {PrimaryButton} from '../../../components/button';
// import theme from '../../../Theme';
// import store from '../../../state-management/store';
// import axios from 'axios';
// import AxiosConfig from '../../../network/utils/axiosConfig';
// import {departmentURL} from '../../../network/URL';
// import {HeaderComponent, StudentInfo} from '../../../components';
// import RNFetchBlob from 'rn-fetch-blob';

// // create a component

// const ReceiptScreen = ({navigation}) => {
//   const [fullname, setFullname] = React.useState();
//   const [studentID, setStudentID] = React.useState();
//   const [deptName, setDeptName] = React.useState();
//   const [deptID, setDeptID] = React.useState();
//   const [userToken, setUserToken] = React.useState();

//   React.useEffect(() => {
//     getStoreData();
//     fetchDepartment();
//   });
//   //fetching from store
//   const getStoreData = () => {
//     const state = store.getState();
//     setFullname(state.userDetails.userDetails.data.user.fullname);
//     setStudentID(state.userDetails.userDetails.data.user.username);
//     setUserToken(state.userDetails.userDetails.token);
//     setDeptID(state.userDetails.userDetails.data.student.department.uuid);
//   };
//   //fetching department data
//   const fetchDepartment = () => {
//     const config = AxiosConfig(userToken);
//     axios
//       .get(departmentURL, config)
//       .then(response => {
//         for (let i = 0, l = response.data.departments.length; i < l; i++) {
//           let obj = response.data.departments[i];
//           if (obj.uuid === deptID) {
//             setDeptName(obj.name);
//           } else {
//             return null;
//           }
//         }
//       })
//       .catch(error => {
//         console.log(error.message);
//       });
//   };
//   //download functionality
// //   const downloadSummary = async () => {
// // //checking permissions

// //     const {config, fs} = RNFetchBlob;
// //     let PictureDir = fs.dirs.PictureDir;
// //     let date = new Date();
// //     let options = {
// //       fileCache: true,
// //       addAndroidDownloads: {
// //         useDownloadManager: true,
// //         notification: true,
// //         path:
// //           PictureDir +
// //           '/Report_Download' +
// //           Math.floor(date.getTime() + date.getSeconds() / 2),
// //         description: 'Receipt Download',
// //       },
// //     };
//     config(options)
//       .fetch('GET', url)
//       .then(res => {
//         console.log('res ->', JSON.stringify(res));
//         alert('Summary Downloaded Successfully');
//       });
//   };
//   return (
//     <SafeAreaView style={styles.container}>
//       <HeaderComponent
//         onPress={() => {
//           navigation.navigate('Home');
//         }}
//       />
//       <View style={{alignSelf: 'center'}}>
//         <Text
//           style={{
//             fontFamily: 'roboto-regular',
//             fontSize: theme.spacing.m,
//             fontWeight: 'bold',
//             textAlign: 'center',
//           }}>
//           UENR CLEARANCE RECEIPT
//         </Text>
//       </View>

//       <StudentInfo
//         StudentID={studentID}
//         studentName={fullname}
//         department={deptName}
//         level="400"
//       />
//       <View style={{flex: 1}}>
//         <View style={{flexDirection: 'row'}}>
//           <View style={{alignSelf: 'flex-start', marginLeft: theme.spacing.m}}>
//             <Text style={styles.textStyle}>Department</Text>
//           </View>
//           <View style={{marginLeft: theme.spacing.xl * 2}}>
//             <Text style={styles.textBoldStyle}>Cleared</Text>
//           </View>
//         </View>
//         <View style={{flexDirection: 'row'}}>
//           <View style={{alignSelf: 'flex-start', marginLeft: theme.spacing.m}}>
//             <Text style={styles.textStyle}>Hostel</Text>
//           </View>
//           <View style={{marginLeft: theme.spacing.xl * 2}}>
//             <Text style={styles.textBoldStyle}>Cleared</Text>
//           </View>
//         </View>
//         <View style={{flexDirection: 'row'}}>
//           <View style={{alignSelf: 'flex-start', marginLeft: theme.spacing.m}}>
//             <Text style={styles.textStyle}>Account</Text>
//           </View>
//           <View style={{marginLeft: theme.spacing.xl * 2}}>
//             <Text style={styles.textBoldStyle}>Cleared</Text>
//           </View>
//         </View>
//         <View style={{flexDirection: 'row'}}>
//           <View style={{alignSelf: 'flex-start', marginLeft: theme.spacing.m}}>
//             <Text style={styles.textStyle}>Library</Text>
//           </View>
//           <View style={{marginLeft: theme.spacing.xl * 2}}>
//             <Text style={styles.textBoldStyle}>Cleared</Text>
//           </View>
//         </View>
//       </View>
//       <View style={{marginVertical: theme.spacing.l}}>
//         <PrimaryButton text="Download Summary" onPress={downloadSummary} />
//       </View>
//     </SafeAreaView>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   textStyle: {
//     fontFamily: 'roboto-regular',
//     fontSize: theme.spacing.m,
//     fontWeight: 'normal',
//   },
//   textBoldStyle: {
//     fontFamily: 'roboto-regular',
//     fontSize: theme.spacing.m,
//     fontWeight: 'bold',
//   },
// });

// //make this component available to the app
// export default ReceiptScreen;

//Fetching from async storage
// const fetchAsyncStorage = async () => {
//   let HostelData = await storage.getItem('HostelCleared');
//   let AccountData = await storage.getItem('AccountCleared');
//   let LibraryData = await storage.getItem('LibraryCleared');
//   let DepartmentData = await storage.getItem('DepartmentCleared');
//   setHostelStatus(HostelData);
//   setAccountStatus(AccountData);
//   setLibraryStatus(LibraryData);
//   setDepartmentStatus(DepartmentData);
// };
// import AsyncStorage from '@react-native-async-storage/async-storage';
// const storage = AsyncStorage;
//  const [hostelStatus, setHostelStatus] = React.useState(null);
//  const [departmentStatus, setDepartmentStatus] = React.useState(null);
//  const [libraryStatus, setLibraryStatus] = React.useState(null);
//  const [accountStatus, setAccountStatus] = React.useState(null);

// Import React
import React, {useState} from 'react';
// Import required components
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Platform,
} from 'react-native';

// Import HTML to PDF
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import {Root, Popup} from 'popup-ui';
import theme from '../../../Theme';
import store from '../../../state-management/store';
import axios from 'axios';
import AxiosConfig from '../../../network/utils/axiosConfig';
import {departmentURL} from '../../../network/URL';

const ReceiptScreen = () => {
  const [filePath, setFilePath] = useState('');
  const [fullname, setFullname] = React.useState();
  const [studentID, setStudentID] = React.useState();
  const [deptName, setDeptName] = React.useState();
  const [deptID, setDeptID] = React.useState();
  const [userToken, setUserToken] = React.useState();

  React.useEffect(() => {
    //show notice
    Popup.show({
      type: 'Danger',
      title: 'Notice',
      textBody: 'Please clear from all Clearance Departments before proceding',
      buttonText: 'CONTINUE',
      callback: () => {
        Popup.hide();
      },
    });
  }, []);
  React.useEffect(() => {
    fetchDepartment();
    getStoreData();
  });

  // fetching department data
  const fetchDepartment = () => {
    const config = AxiosConfig(userToken);
    axios
      .get(departmentURL, config)
      .then(response => {
        for (let i = 0, l = response.data.departments.length; i < l; i++) {
          let obj = response.data.departments[i];
          if (obj.uuid === deptID) {
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
  //fetching from store
  const getStoreData = () => {
    const state = store.getState();
    setFullname(state.userDetails.userDetails.data.user.fullname);
    setStudentID(state.userDetails.userDetails.data.user.username);
    setUserToken(state.userDetails.userDetails.token);
    setDeptID(state.userDetails.userDetails.data.student.department.uuid);
  };

  const isPermitted = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs access to Storage data',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        alert('Write permission err', err);
        return false;
      }
    } else {
      return true;
    }
  };

  const createPDF = async () => {
    if (await isPermitted()) {
      let options = {
        //Content to print
        html: `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> pdf </title>
   <style>
       .container{
        width: 70rem;
        margin: 0 auto;
       }

       .content-body{
           display: flex;
       }

       .left-content{
           margin-left: 1px;
       }

            table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    td, th {
        border: 1px solid #afaeae;
        text-align: left;
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: #fff8f8;
    } 
  </style>
</head>

    <body>
        <div class="container">
            <div class="content-body">
          <div class="left-content">
             Student Details
            <address>
              <strong> student ID:   ${studentID} </strong>
              <p> Student Name : ${fullname} </p>
              <p> Department Name : ${deptName}  </p>
            </address>
          </div>
        </div>
        </div>


        <div class="container">
        <h3> UENR Clearance Receipt  </h3>  
        <table>
          <tr>
            <th>Adminstration </th>
            <th> Clearance Status </th>
          
          </tr>
          <tr>
            <td> Department  </td>
            <td> Cleared </td>
          
          </tr>
          <tr>
            <td> Hostel </td>
            <td> Cleared </td>
         
          </tr>
          <tr>
            <td> Library </td>
            <td> Cleared </td>
         
          </tr>
          <tr>
            <td> Finance </td>
            <td> Cleared </td>
       
          </tr>
        </table>
    </div>
        </body>


</html>
        `,
        //File Name
        fileName: 'Clearance Summary',
        //File directory
        directory: 'Download',
      };
      let file = await RNHTMLtoPDF.convert(options);
      console.log(file.filePath);
      setFilePath(file.filePath);
    }
  };

  return (
    <Root>
      <SafeAreaView style={{flex: 1}}>
        <Text style={styles.titleText}>Download Your Clearance Summary</Text>
        <View style={styles.container}>
          <TouchableOpacity onPress={createPDF}>
            <View>
              <Image
                //We are showing the Image from online
                source={{
                  uri:
                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/pdf.png',
                }}
                style={styles.imageStyle}
              />
              <Text style={styles.textStyle}>Download PDF</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.textStyle}>{filePath}</Text>
        </View>
      </SafeAreaView>
    </Root>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: theme.spacing.xl,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    fontSize: 18,
    padding: 10,
    color: theme.colors.primary,
    textAlign: 'center',
  },
  imageStyle: {
    width: 150,
    height: 150,
    margin: 5,
    resizeMode: 'stretch',
  },
});
export default ReceiptScreen;
