import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
  } from 'react-native';
  import React, { useState } from 'react';
  import LinearGradient from 'react-native-linear-gradient';
  
  const ExerciseTypeScreen = (props) => {
    const selectedGender = props.route.params.selectedGender;
    const [selectedLevel, setSelectedLevel] = useState(null);
  
    const levels = ['Gym', 'Dumbbells', 'No Equipment'];
  
    const handleLevelSelection = (level) => {
      setSelectedLevel(level);
      props.navigation.navigate('ModeScreen', {
        selectedGender: selectedGender,
        selectedLevel: level,
      });
    };
  
    return (
      <View>
        <LinearGradient
          colors={['#3498db', '#0074e4', '#4fc3f7']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.headerContainer}>
          <Text style={styles.headerText}>Fitness App</Text>
        </LinearGradient>
  
        <View style={styles.contentContainer}>
          <Text style={styles.contentHeaderText}>Please Select Level</Text>
  
          {/* <Text>{selectedGender}</Text> */}
          {levels.map((level, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleLevelSelection(level)}>
              <LinearGradient
                colors={['#3498db', '#0074e4', '#4fc3f7']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.levelButton}>
                <Text style={styles.levelButtonText}>{level}</Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
      </View>
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
      fontWeight: 'bold',
    },
    levelButton: {
      borderRadius: 100,
      width: 200,
      alignSelf: 'center',
      alignItems: 'center',
      paddingVertical: 10,
      marginBottom: 15,
    },
    levelButtonText: {
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
    },
  };
  
  export default ExerciseTypeScreen;
  