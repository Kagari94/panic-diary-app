import * as FileSystem from 'expo-file-system';
import { SaveData } from '../storage/SaveData';

async function ReadFile() {
    const fileUri = FileSystem.documentDirectory + 'backup.json';

    try {
        // Check if file exists
        const fileInfo = await FileSystem.getInfoAsync(fileUri);
        if (!fileInfo.exists) {
            console.log("Backup file does not exist!");
            return null;
        }

        // Read the file contents
        const jsonString = await FileSystem.readAsStringAsync(fileUri, {
            encoding: FileSystem.EncodingType.UTF8,
        });

        const data = JSON.parse(jsonString);

        for (const entry of data) {
            await SaveData(
                entry.title,
                entry.feeling,
                entry.actions,
                entry.thoughts,
                entry.optional,
                entry.description,
                entry.sliderValue
            );
        }
        console.log("Backup restored successfully!");
        console.log("File path:", fileUri);

        await FileSystem.deleteAsync(fileUri);
        console.log("Backup file deleted after restore.");

    } catch (error) {
        console.log(`Error reading backup file: ${error}, file path: ${fileUri}`);

        console.log("Error reading backup file:", error, fileUri);

        return null;

    }
}

export { ReadFile }