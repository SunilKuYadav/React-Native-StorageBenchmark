import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

storage.clearAll();

const key = 'k';
storage.set(key, 'hello');

const getFromMMKVString = (): string | undefined => {
  return storage.getString(key);
};

export default getFromMMKVString;
