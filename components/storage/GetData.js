import AsyncStorage from "@react-native-async-storage/async-storage";

const GetData = async () => {
    try{
        const value = await AsyncStorage.getItem('item');
        if(value !== null){
            const parsed = JSON.parse(value);
            return Array.isArray(parsed) ? parsed : [parsed];
        }
    } catch(e) {
        console.log("Something went wrong: ", e);
    }
}

export { GetData }
