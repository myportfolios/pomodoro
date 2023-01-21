// import { StatusBar } from "expo-status-bar"
import {
  StyleSheet,
  Text,
  View,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native"
import { colors } from "./src/utils/colors"
import { Focus } from "./src/features/focus"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Focus />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.emerald,
  },
  text: {
    color: colors.white,
  },
})
