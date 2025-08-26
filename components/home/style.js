import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  slidercontainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    margin: 10,
    fontSize: 15,
  },
  inputtext: {
    margin: 10,
    marginBottom: 0,
    textShadowColor: "gray",
    textShadowRadius: 5,
    fontSize: 17,
  },
  saveButton: {
    backgroundColor: 'pink',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width: 100,
    height: 40,
    margin: 10,
    marginTop: 20
  }
});