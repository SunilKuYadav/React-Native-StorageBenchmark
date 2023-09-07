import AsyncStorage from '@react-native-async-storage/async-storage';

const key = 'k';

AsyncStorage.clear();
AsyncStorage.setItem(key, 'hello');

const getFromAsyncStorageString = (): Promise<string | null> => {
  return AsyncStorage.getItem(key);
};

export default getFromAsyncStorageString;
