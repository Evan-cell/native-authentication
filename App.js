import { StatusBar } from 'expo-status-bar';
import { Text, View,Dimensions } from 'react-native';
import styles from './Styles';
import Svg, {Image} from 'react-native-svg'
export default function App() {
  return (
    <View style={styles.container}>
      <Svg>
        <Image />
      </Svg>
      <StatusBar style="auto" />
    </View>
  );
}


