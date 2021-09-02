import AsyncStorage from '@react-native-async-storage/async-storage';
const storage = AsyncStorage;
//set user data

export const saveData = async (key, value) => {
  let success = false;
  try {
    await storage.setItem(key, JSON.stringify(value));
    success = true;
    console.log(`Data stored : ${success}`);
  } catch (error) {
    success = false;
    console.log(`Data stored : ${success}`);
  }
};

//get stored data
export const getData = async key => {
  let StoredData = await storage.getItem(key);
  if (StoredData) {
    try {
      let studentData = JSON.parse(StoredData);
      return studentData.value;
    } catch (error) {
      return null;
    }
  }
  return null;
};

//wait
export const wait = timeout => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

//delete stored data
export const deleteUserData = () => {
  storage.clear();
};
