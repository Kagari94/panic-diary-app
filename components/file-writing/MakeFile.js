import * as FileSystem from 'expo-file-system';
import { GetData } from '../storage/GetData';

async function MakeFile() {
  try {
    // Get data from storage
    const data = await GetData();
    const jsonString = JSON.stringify(data, null, 2);

    // File path
    const fileUri = FileSystem.documentDirectory + 'backup.json';

    // Write file
    await FileSystem.writeAsStringAsync(fileUri, jsonString, {
      encoding: FileSystem.EncodingType.UTF8,
    });

    console.log("Data written: ", data);
  } catch (e) {
    console.log("Error writing file:", e);
  }
}

export { MakeFile };