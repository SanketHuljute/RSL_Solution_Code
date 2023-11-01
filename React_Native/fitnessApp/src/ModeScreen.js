import React, { useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ModeScreen = (props) => {
  const { selectedGender, selectedLevel } = props.route.params;
  const [selectedMode, setSelectedMode] = useState(null);

  const modes = ['Beginner', 'Intermediate', 'Advanced'];

  const handleModeSelection = (mode) => {
    setSelectedMode(mode);
    props.navigation.navigate('WeekScreen', {
      selectedGender: selectedGender,
      selectedLevel: selectedLevel,
      selectedMode: mode,
    });
  };

  return (
    <View>
      <LinearGradient
        colors={['#3498db', '#0074e4', '#4fc3f7']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.headerContainer}
      >
        <Text style={styles.headerText}>Fitness App</Text>
      </LinearGradient>

      <View style={styles.contentContainer}>
        <Text style={styles.contentHeaderText}>Select your mode </Text>

        {/* <Text>{selectedGender}, {selectedLevel}</Text> */}
        {modes.map((mode, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleModeSelection(mode)}
          >
            <LinearGradient
              colors={['#3498db', '#0074e4', '#4fc3f7']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.modeButton}
            >
              <Text style={styles.modeButtonText}>{mode}</Text>
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
  },
  modeButton: {
    borderRadius: 100,
    width: 200,
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

export default ModeScreen;
