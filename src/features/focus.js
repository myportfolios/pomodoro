import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { colors } from "../utils/colors"
import { RoundedButton } from "../components/common/RoundedButton"

import TextInputComponent from "../components/common/TextInput"

export const Focus = ({ addCurrentItem }) => {
  const [textValue, setTextValue] = useState("")
  const INPUT_LABEL = "Enter focus item"
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInputComponent
          getTextValue={setTextValue}
          styles={{
            borderColor: `${colors.white}`,
            flex: 1,
            marginRight: 10,
          }}
          label={INPUT_LABEL}
          color={colors.white}
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addCurrentItem(textValue)}
          />
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    // flex: 0.5, //take up half of the parent size(i.e styles.container at flex :1. Flex:1 takes up the whole screen size)
    flexDirection: "row",
    padding: 25,
    // justifyContent: "center", //center the item within its parent container
    justifyContent: "top",
  },
  button: {
    justifyContent: "center",
  },
  text: {
    color: colors.white,
  },
})
