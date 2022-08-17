import { StatusBar } from 'expo-status-bar';
import { Text, View,Dimensions,StyleSheet,TextInput } from 'react-native';
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
         height={height/2}
         preserveAspectRatio="xMidyMid slice"
         />
      </Svg>
      <View style={styles.closeButtonContainer}>
        <Text>x</Text>
      </View>
      </View>
      <View style={styles.buttonContainer}>
        {/* <View style={styles.button}>
          <Text style={styles.buttonText}>Log in</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </View> */}
      </View>
      <View style={styles.formInputContainer}>
        <TextInput placeholder='Email'placeholderTextColor='black' style={styles.textInput} />
        <TextInput placeholder='Full Name' placeholderTextColor='black' style={styles.textInput}/>
        <TextInput placeholder='Password' placeholderTextColor='black' style={styles.textInput}/>
        <View style={styles.formButton}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


