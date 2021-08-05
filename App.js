import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Focus } from './src/features/focus/Focus'
import { FocusHistory } from './src/features/focus/FocusHistory'
import { colors } from './src/utils/colors';
import { Timer } from './src/features/timer/Timer';
import { spacing } from './src/utils/sizes';

const STATUSES = {
  COMPLETE: 1,
  CANCELED: 2
}

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null)
  const [focusHistory, setFocusHistory] = useState([])

  const addFocusHistorySubjectWithState = (subject, status) => {
    setFocusHistory([...focusHistory, { subject, status }])
  }

  const onClear = () => {

  }

  return (
    <View style={styles.container}>
      { focusSubject ? (
        <Timer 
          focusSubject={focusSubject} 
          onTimerEnd={() => {
          addFocusHistorySubjectWithState(focusSubject, STATUSES.COMPLETE)
          setFocusSubject(null)
          }}
          clearSubject={() => {
          addFocusHistorySubjectWithState(focusSubject, STATUSES.CANCELED)
          setFocusSubject(null)}
           }
        />
      )  : (
        <>
          <Focus focusHistory={focusHistory} addSubject={setFocusSubject} />
          <FocusHistory
            focusHistory={focusHistory}
            setFocusHistory={setFocusHistory}
          />        </>
      ) }
      <Text>{focusSubject}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? spacing.md : spacing.lg,
    backgroundColor: colors.darkBlue
  },
});
