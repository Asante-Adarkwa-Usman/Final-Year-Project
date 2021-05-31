import AsyncStorage from '@react-native-async-storage/async-storage';
const storage = AsyncStorage;
//set user data
const setData = async ({key, value}) => {
  let success = false;
  try {
    await storage.setItem(key, JSON.stringify(value));
    success = true;
  } catch (e) {
    // saving error
    success = false;
  }
};

//get stored data
export const getData = async key => {
  const encodedStoredData = await storage.getItem(key);
  if (encodedStoredData) {
    try {
      const storedData = JSON.parse(encodedStoredData);
      return storedData.value;
    } catch (e) {
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
export const deleteData = key => {
  storage.removeItem(key);
};
