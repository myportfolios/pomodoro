import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { colors } from "../utils/colors"

import TextInputComponent from "../components/common/TextInput"

export const Focus = () => {
  const [textValue, setTextValue] = useState("")
  const INPUT_LABEL = "Enter focus item"
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Focus Feature - {textValue}</Text>
      <View style={styles.inputContainer}>
        <TextInputComponent
          getTextValue={setTextValue}
          styles={{ borderColor: `${colors.white}` }}
          label={INPUT_LABEL}
          color={colors.white}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 0.5, //take up half of the parent size(i.e styles.container at flex :1. Flex:1 takes up the whole screen size)
    padding: 25,
    // justifyContent: "center", //center the item within its parent container
    justifyContent: "top",
  },
  text: {
    color: colors.white,
  },
})
