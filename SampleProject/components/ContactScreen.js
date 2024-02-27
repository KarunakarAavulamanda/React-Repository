import React, { useState } from "react";
import { Button, View, Text, TextInput, StyleSheet } from "react-native";

export default function ContactScreen() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  }

  const addGoalHandler = () => {
    if (enteredGoalText.trim().length === 0) {
      return; // Don't add empty goals
    }
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalText]);
    setEnteredGoalText(''); // Clear input after adding goal
  }

  return (
    <View style={styles.container}>
       <Text style={styles.title}>react native concepts:</Text> 
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal, index) => (
          <Text key={index}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 4,
    paddingHorizontal: 50,
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
