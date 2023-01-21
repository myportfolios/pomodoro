import React, { useState, useEffect } from "react"
import { View } from "react-native"
import { TextInput } from "react-native-paper"
import { colors } from "../../utils/colors"

const isNull = (obj) => !(Object.keys(obj).length > 0)

const TextInputComponent = ({ getTextValue, styles = {}, ...rest }) => {
  const [textValue, setTextValue] = useState("")
  useEffect(() => {
    getTextValue && getTextValue(textValue)
  }, [textValue])
  return (
    <TextInput
      //   style={{ ...defaultStyles.input, ...styles }}
      style={isNull(styles) ? { ...defaultStyles.input } : { ...styles }}
      onChangeText={setTextValue}
      value={textValue}
      {...rest}
    />
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
