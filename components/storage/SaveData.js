import AsyncStorage from '@react-native-async-storage/async-storage';

const SaveData = async (title, feeling, actions, thoughts, optional, description, sliderValue) => {
    try {
        //Check if existin array, so no rewriting.
        const existing = await AsyncStorage.getItem("item");
        let data = existing ? JSON.parse(existing) : [];

        //Add date time stamp when data is saved.
        const now = new Date();
        const createdAt = now.toLocaleString('fi-FI', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });

        const newEntry = {
            title,
            feeling,
            actions,
            thoughts,
            optional,
            description,
            sliderValue,
            createdAt
        };

        data.push(newEntry);

        //Add data
        await AsyncStorage.setItem("item", JSON.stringify(data));
        console.log("Saved successfully:", newEntry);
    } catch (e) {
        console.log("Something went wrong: ", e);
    }
}


export { SaveData }