import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import Home from './components/Home';
import Welcome from './components/Welcome';


export default function App() {
  return (
   
      <View style={styles.container}>
        <Welcome/>
        <StatusBar />
      </View>
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});