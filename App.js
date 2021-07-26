import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Focus } from './src/features/focus/Focus'

export default function App() {
  const [focusSubject, setFocusSubject] = useState("")

  return (
    <View style={styles.container}>
      { focusSubject ? (
        <Text>Build the timer </Text>
      )  : (
        <Focus />
      ) }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252250'
  },
});
