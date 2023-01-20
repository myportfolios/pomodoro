import React, { useState, useEffect } from "react"
import { View, TextInput } from "react-native"
import { colors } from "../../utils/colors"

const TextInputComponent = ({ getTextValue, styles = {}, ...rest }) => {
  const [textValue, setTextValue] = useState("")
  useEffect(() => {
    getTextValue && getTextValue(textValue)
  }, [textValue])
  return (
    <View>
      <TextInput
        style={{ ...defaultStyles.input, ...styles }}
        onChangeText={setTextValue}
        value={textValue}
        {...rest}
      />
    </View>
  )
}
const defaultStyles = {
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
}

export default TextInputComponent
