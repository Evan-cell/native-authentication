import { StatusBar } from 'expo-status-bar';
import { Text, View,Dimensions,StyleSheet } from 'react-native';
import styles from './Styles';
import Svg, {Image} from 'react-native-svg'
export default function App() {
  const {height, width} = Dimensions.get('window')
  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
      <Svg height={height} width={width}>
        <Image href={require('./assets/login-background.jpg')}
         width={width} 
         height={height}
         preserveAspectRatio="xMidyMid slice"
         />
      </Svg>
      </View>
      <View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Log in</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


