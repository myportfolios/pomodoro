import React, { useState } from "react"
import { View, Text, StyleSheet, Button, Vibration } from "react-native"
import { ProgressBar } from "react-native-paper"
import { spacing } from "../../utils/sizes"
import { colors } from "../../utils/colors"
import { Countdown } from "./CountDown"
import { RoundedButton } from "./RoundedButton"

const ONE_SECOND_IN_MS = 1000

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
]

export const Timer = ({ focusItem }) => {
  const [isStarted, setIsStarted] = useState(false)
  const [progress, setProgress] = useState(1)
  const [minutes, setMinutes] = useState(0.1)
  const isPaused = !isStarted
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={isPaused}
          onProgress={setProgress}
          onEnd={() => {
            Vibration.vibrate(PATTERN)
          }}
        />
        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.text}>{focusItem}</Text>
        </View>
      </View>
      <View>
        <ProgressBar
          height={spacing.sm}
          color={colors.lightEmerald}
          progress={progress}
        />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted ? (
          <RoundedButton title="Start" onPress={() => setIsStarted(true)} />
        ) : (
          <RoundedButton title="Pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "yellow",
  },
  buttonWrapper: {
    // backgroundColor: "white",
    flexDirection: "row",
    flex: 0.3,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: { color: colors.white, textAlign: "center" },
})
