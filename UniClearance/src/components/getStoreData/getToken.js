// import store from '../../state-management/store';

// export default function getToken() {
//   const state = store.getState('userDetails');
//   return state.userDetails.userDetails.token;
// }

import AsyncStorage from '@react-native-async-storage/async-storage';
const storage = AsyncStorage;
const getToken = async () => {
  let StoredData = await storage.getItem('otpToken');
  let studentToken = JSON.parse(StoredData);
  console.log(studentToken);
  return studentToken;
};
export default getToken;
