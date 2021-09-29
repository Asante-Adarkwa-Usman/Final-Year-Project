// import store from '../../state-management/store';

// export default function getDeptID() {
//   let state = store.getState('userDetails');
//   return state.userDetails.userDetails.data.student.department.uuid;
// }
import AsyncStorage from '@react-native-async-storage/async-storage';
const storage = AsyncStorage;
const getDeptID = async () => {
  let StoredData = await storage.getItem('deptId');
  let studentDeptId = JSON.parse(StoredData);
  console.log(studentDeptId);
  return studentDeptId;
};

export default getDeptID;
