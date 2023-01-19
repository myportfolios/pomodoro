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
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.emerald,
    // alignItems: 'center',
    // justifyContent: 'center', #252250 grey(#142739)
    //green #2ecc71
  },
  text: {
    color: colors.white,
  },
})
