import React, { useState } from "react"
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
  const [currentItem, setCurrentItem] = useState(null)
  return (
    <SafeAreaView style={styles.container}>
      {!currentItem ? (
        <Focus addCurrentItem={setCurrentItem} />
      ) : (
        <View>
          <Text style={{ color: "white" }}>Current item is {currentItem}</Text>
        </View>
      )}
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
