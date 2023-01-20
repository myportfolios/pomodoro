import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { colors } from "../utils/colors"

import TextInputComponent from "../components/common/TextInput"

export const Focus = () => {
  const [textValue, setTextValue] = useState("")
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Focus Feature - {textValue}</Text>
      <TextInputComponent
        getTextValue={setTextValue}
        styles={{ borderColor: "white" }}
        placeholder="Enter focus title"
        placeholderTextColor={colors.white}
        color={colors.white}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: colors.white,
  },
})
