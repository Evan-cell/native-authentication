import { StyleSheet,Dimensions } from 'react-native';
const {height, width} = Dimensions.get("window")
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end'
    },
    button:{
        backgroundColor: 'rgba(123,104,238,0.8)',
        height: 55,
        justifyContent: 'center',
        borderRadius: 35,
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center'

    },
    buttonText:{
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        letterSpacing: 0.5
    },
    buttonContainer: {
        justifyContent: 'center',
        height: height / 3,
    }
  });
  export default styles;