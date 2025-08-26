import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { ReadFile } from "../file-writing/ReadFile";
import { MakeFile } from "../file-writing/MakeFile";


export default function Settings() {
    //Add the flexes to CSS at some point
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.settingsFont}>Basic settings</Text>
            </View>


            <TouchableOpacity
                style={styles.settingsButtons}
                onPress={() => ReadFile()}
            >
                <Text style={styles.settingButtonText}>Restore Data</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.settingsButtons}
                onPress={() => MakeFile()}
            >
                <Text style={styles.settingButtonText}>Back up your data</Text>
            </TouchableOpacity>
        </View>

    );
}
