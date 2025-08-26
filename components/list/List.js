import { Button, FlatList, Pressable, ScrollView, Text, View } from "react-native";
import { GetData } from '../storage/GetData'
import { useCallback, useState } from "react";
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal from 'react-native-modal';
import { styles } from "./style";


export const List = () => {

  // Set item from the data that is being mapped, that way modal wont try to open as many time as items exist.
  const [selectedItem, setSelectedItem] = useState(null);
  const [storedData, setStoredData] = useState(null);
  const [button, setButton] = useState(false);

  // Read data when changing to list view
  useFocusEffect(
    useCallback(() => {
      const loadData = async () => {
        try {
          const data = await GetData();
          setStoredData(data);
        } catch (e) {
          console.log("Error loading data:", e);
        }
      };
      loadData();
    }, [button])
  );

  // If no data, render placeholders.
  if (!storedData) {
    return (
      <View>
        <Text>Loading data...</Text>
        <Button onPress={() => setButton(!button)} title="Reload" />
      </View>
    );
  } else if (storedData === 0) {
    <View>
      <Text>No data</Text>
    </View>
  }


  return (
    <View style={styles.container}>
      <FlatList
        data={storedData}            // your array of items
        keyExtractor={(item, index) => index.toString()} // each item needs a unique key
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [
              styles.listTextButton,
              { backgroundColor: pressed ? "steelblue" : "dodgerblue" }
            ]}
            onPress={() => setSelectedItem(item)}
          >
            <Text style={styles.listText}>{item.title}</Text>
            <Text style={styles.listText}>{item.createdAt}</Text>
          </Pressable>
        )}
      />
      <ScrollView>
        <Modal
          animationInTiming={300}
          animationOutTiming={300}
          isVisible={!!selectedItem}
          backdropColor="black"
          backdropOpacity={0.5}
          backdropTransitionOutTiming={0}
          onRequestClose={() => setSelectedItem(null)}
          onBackdropPress={() => setSelectedItem(null)}
        >
          {selectedItem && (
            <View style={styles.centeredView}>
              <ScrollView style={styles.scrollView}>
                <Text style={styles.modalText}>{selectedItem.title}</Text>
                <Text style={styles.modalText}>{selectedItem.feeling}</Text>
                <Text style={styles.modalText}>{selectedItem.actions}</Text>
                <Text style={styles.modalText}>{selectedItem.thoughts}</Text>
                <Text style={styles.modalText}>{selectedItem.optional}</Text>
                <Text style={styles.modalText}>{selectedItem.description}</Text>
                <Text style={styles.modalText}>{selectedItem.sliderValue}</Text>
              </ScrollView>
            </View>
          )}
        </Modal>
      </ScrollView>
      <View>
        <Button onPress={() => setButton(!button)} title="Reload" />
        <Button onPress={() => AsyncStorage.clear()} title="Reset" />
      </View>
    </View>
  );
}