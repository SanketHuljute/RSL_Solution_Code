import React, { useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import gymExercisesMen from './ExcerciseData/gymExercisesMen';
import dumbbellExercisesMen from './ExcerciseData/dumbbellExercisesMen';
import noEquipmentExercisesMen from './ExcerciseData/noEquipmentExercisesMen';

import gymExercisesWomen from './ExcerciseData/gymExercisesWomen';
import dumbbellExercisesWomen from './ExcerciseData/dumbbellExercisesWomen';
import noEquipmentExercisesWomen from './ExcerciseData/noEquipmentExercisesWomen';


const ExcerciseScreen = (props) => {
  const { selectedGender, selectedLevel, selectedMode,selectedDay } = props.route.params;
  const [selectedExcercise, setSelectedExcercise] = useState('');

  // Determine the appropriate exercise data source based on selectedGender
  let exerciseData;
  if (selectedGender === 'Male') {
    if (selectedLevel === 'Gym') {
      exerciseData = gymExercisesMen;
    } else if (selectedLevel === 'Dumbbells') {
      exerciseData = dumbbellExercisesMen;
    } else if (selectedLevel === 'No Equipment') {
        exerciseData = noEquipmentExercisesMen;
      }

  } else if (selectedGender === 'Female') {
    if (selectedLevel === 'Gym') {
        exerciseData = gymExercisesWomen;
      } else if (selectedLevel === 'Dumbbells') {
        exerciseData = dumbbellExercisesWomen;
      } else if (selectedLevel === 'No Equipment') {
          exerciseData = noEquipmentExercisesWomen;
        }
  }

  const exerciseList = exerciseData[selectedMode].exercises;
  


  const handleExerciseSelection = (exercise) => {
    setSelectedExcercise(exercise);
    props.navigation.navigate('ExcerciseDetails', {
      exercise : selectedExcercise 
    });
  };

  return (
    <ScrollView>
      {/* Render the exercise list based on exerciseList */}
      <LinearGradient
        colors={['#3498db', '#0074e4', '#4fc3f7']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.headerContainer}
      >
        <Text style={styles.headerText}>Fitness App</Text>
      </LinearGradient>

      <View style={styles.contentContainer}>
        <Text style={styles.contentHeaderText}>Select your Exercise</Text>
        <ScrollView style={{ minHeight: Dimensions.get('window').height * 0.6 }}>
        {exerciseList.map((exercise, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleExerciseSelection(exercise.name)}
          >
            <LinearGradient
              colors={['#3498db', '#0074e4', '#4fc3f7']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.modeButton}
            >
              <Text style={styles.modeButtonText}>{exercise.name}</Text>
            </LinearGradient>
          </TouchableOpacity>
          
        ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = {
  headerContainer: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    height: Dimensions.get('window').height * 0.2,
    width: '100%',
    alignItems: 'center',
    paddingTop: 50,
  },
  headerText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  contentContainer: {
    elevation: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    marginTop: -20,
    paddingVertical: 20,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0074e4',
    paddingVertical: 10,
  },
  modeButton: {
    borderRadius: 100,
    width: 350,
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 15,
  },
  modeButtonText: {
    color: 'white',
    fontSize: 22,
  },
};

export default ExcerciseScreen;
