import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import {PayPalButton} from 'react-paypal-button-v2'
import ParticleBackground from './particlebackground';

export default function App() {
  return (
    <View style={styles.container}>
      <ParticleBackground />
      
      
      <StatusBar style="auto" />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
