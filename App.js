import { StatusBar } from 'expo-status-bar';
import { Text, View,Dimensions } from 'react-native';
import styles from './Styles';
import Svg, {Image} from 'react-native-svg'
export default function App() {
  const {height, width} = Dimensions.get('window')
  return (
    <View style={styles.container}>
      <Svg height={height} width={width}>
        <Image href={require('./assets/login-background.jpg')}
         width={width} 
         height={height}
         preserveAspectRatio="xMidyMid slice"
         />
      </Svg>
      <View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Log in</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


