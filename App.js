import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Navigation } from "./components/navigation/BottomTab";
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1}}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
