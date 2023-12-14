import Navigator from './src/navigation/Navigator';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import {useFonts} from 'expo-font';

export default function App() {

  const [fontLoaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf')
  })

  if (!fontLoaded) return <ActivityIndicator/>

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Navigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:50,
    fontFamily: 'Lato-Regular'
  },
})