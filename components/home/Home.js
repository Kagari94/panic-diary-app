import { Platform, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from "./style";
import { useState } from "react";
import Slider from "@react-native-community/slider";
import { SaveData } from "../storage/SaveData";


export default function Home() {

    const [title, setTitle] = useState("Mikä tilanne aiheutti kohtauksen?");
    const [feeling, setFeeling] = useState("Mitä tuntemuksia sinulla oli kohtauksen aikana?");
    const [actions, setActions] = useState("Mitä teit kohtauksen aikana?");
    const [thoughts, setThoughts] = useState("Mitä ajattelit kohtauksen aikana?");
    const [optional, setOptional] = useState("Mikä olisi vaihtoehtoinen tulkinta?");
    const [description, setDescription] = useState("Kuvaile tilannetta tarkemmin, tarkastele mitkä asiat saattoivat pahentaa tai helpottaa tilannetta");
    const [sliderValue, setSliderValue] = useState(0);

    function ResetData() {
        setTitle("Mikä tilanne aiheutti kohtauksen?");
        setFeeling("Mitä tuntemuksia sinulla oli kohtauksen aikana?");
        setActions("Mitä teit kohtauksen aikana?");
        setThoughts("Mitä ajattelit kohtauksen aikana?");
        setOptional("Mikä olisi vaihtoehtoinen tulkinta?");
        setDescription("Kuvaile tilannetta tarkemmin, tarkastele mitkä asiat saattoivat pahentaa tai helpottaa tilannetta");
        setSliderValue(0);
    }

    //Add the flexes to CSS at some point
    return (
        <View style={{ flex: 1 }}>
            <KeyboardAwareScrollView
                style={{ flex: 1 }}
                enableOnAndroid={true}
                enableAutomaticScroll={(Platform.OS === 'ios')}
            >

                <Text style={styles.inputtext}>Tilanne</Text>
                <TextInput
                    style={styles.input}
                    defaultValue={title}
                    onFocus={e => setTitle("")}
                    onChangeText={e => setTitle(e)}
                />
                <Text style={styles.inputtext}>Kohtauksen Voimakkuus</Text>
                <View style={styles.slidercontainer}>
                    <Slider
                        style={{ width: 200, height: 40 }}
                        minimumValue={0}
                        maximumValue={100}
                        minimumTrackTintColor="#42f02b"
                        maximumTrackTintColor="#444cc0"
                        step={1}
                        value={sliderValue}
                        onValueChange={e => setSliderValue(e)}
                    />
                    <Text>{sliderValue}</Text>
                </View>
                <Text style={styles.inputtext}>Tuntemukset</Text>
                <TextInput
                    style={styles.input}
                    defaultValue={feeling}
                    onFocus={e => setFeeling("")}
                    onChangeText={e => setFeeling(e)}
                />
                <Text style={styles.inputtext}>Toiminta</Text>
                <TextInput
                    style={styles.input}
                    defaultValue={actions}
                    onFocus={e => setActions("")}
                    onChangeText={e => setActions(e)}
                />
                <Text style={styles.inputtext}>Ajatukset</Text>
                <TextInput
                    style={styles.input}
                    defaultValue={thoughts}
                    onFocus={e => setThoughts("")}
                    onChangeText={e => setThoughts(e)}
                />
                <Text style={styles.inputtext}>Vaihtoehtoinen tulkinta</Text>
                <TextInput
                    style={styles.input}
                    defaultValue={optional}
                    onFocus={e => setOptional("")}
                    onChangeText={e => setOptional(e)}
                />
                <Text style={styles.inputtext}>Tilanteen kuvailu</Text>
                <TextInput
                    multiline={true}
                    style={styles.input}
                    defaultValue={description}
                    onFocus={e => setDescription("")}
                    onChangeText={e => setDescription(e)}
                />

                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={() => [
                        SaveData(title, feeling, actions, thoughts, optional, description, sliderValue),
                        ResetData()
                    ]}
                >
                    <Text>Tallenna</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>

    );
}