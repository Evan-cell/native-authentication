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
    },
    textInput: {
        height: 50,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.21)',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 20,
        paddingLeft: 10,
    },
    formButton: {
        backgroundColor: 'rgba(123,104,238,0.8)',
        height: 55,
        justifyContent: 'center',
        borderRadius: 35,
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    formInputContainer: {
        marginBottom: 70,
    },
    closeButtonContainer:{
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignSelf: 'center',

    }

  });
  export default styles;