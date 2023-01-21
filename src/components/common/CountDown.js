import React, { useState, useEffect } from "react"
import { Text, View, StyleSheet } from "react-native"

import { fontSizes, spacing } from "../utils/sizes"
import { colors } from "../utils/colors"

//convert mins to milli seconds
const minutesToMillis = (min) => min * 1000 * 60
//display time with prepended 0 if it's less than 10
const formatTime = (time) => (time < 10 ? `0${time}` : time)

export const Countdown = ({ minutes = 0.1, isPaused, onProgress, onEnd }) => {
  const interval = React.useRef(null)

  const [millis, setMillis] = useState(null)

  const countDown = () => {
    //use a callback fn to ensure that the current state of time (millis) is returned
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current)
        onEnd()
        return time
      }
      //get the time left - current time - 1 second
      const timeLeft = time - 1000
      return timeLeft
    })
  }

  useEffect(() => {
    setMillis(minutesToMillis(minutes))
  }, [minutes])

  useEffect(() => {
    onProgress(millis / minutesToMillis(minutes))
  }, [millis])

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current)
      return
    }

    interval.current = setInterval(countDown, 1000)

    return () => clearInterval(interval.current)
  }, [isPaused])

  const minute = Math.floor(millis / 1000 / 60) % 60
  const seconds = Math.floor(millis / 1000) % 60
  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: "bold",
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: "rgba(94, 132, 226, 0.3)",
  },
})
