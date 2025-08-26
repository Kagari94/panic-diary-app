import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
    },
    centeredView: {
        flex: 0.8,
        margin: 35,
        marginTop: 0,
        borderRadius: 5,
        backgroundColor: "white",
        justifyContent: 'center', 
        alignItems: 'center',    
    },
    scrollView: {
        flex: 1,
        margin: 15,
    },
    modalText: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 5,
        textShadowColor: "gray",
        textShadowRadius: 5,
        fontSize: 17,
        marginTop: 10,
        padding: 5,
        color: 'black',
    },
    listTextButton:{
        margin: 5,
        padding: 5,
        borderRadius: 5,
    },
    listText:{
        color: "white"
    }
});