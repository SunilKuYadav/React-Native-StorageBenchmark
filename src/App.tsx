import React, {useCallback} from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  getFromAsyncStorageString,
  getFromMMKVString,
  getFromMMKVEncryptedString,
} from './storage';
import benchmark, {iterations} from './benchmark';

async function waitForGC(): Promise<void> {
  // Wait for Garbage Collection to run. We give a 500ms delay.
  return new Promise(r => setTimeout(r, 500));
}
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const runBenchmarks = useCallback(async () => {
    console.log(
      'Running Benchmark in 3... 2... 1... with',
      iterations,
      'iterations',
    );
    await waitForGC();
    await benchmark('MMKV                 ', getFromMMKVString);
    await waitForGC();
    await benchmark('MMKV Encrypt         ', getFromMMKVEncryptedString);
    await waitForGC();
    await benchmark('AsyncStorage         ', getFromAsyncStorageString);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Button title="Run Benchmarks" onPress={runBenchmarks} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default App;
