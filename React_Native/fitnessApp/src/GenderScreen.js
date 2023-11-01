import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import maleImg from '../images/male.png';
import femaleImg from '../images/female.png';

const GenderScreen = (props) => {
  const [selectedGender, setSelectedGender] = useState(null);

  const genders = ['Female', 'Male'];

  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
    props.navigation.navigate('ExerciseTypeScreen', {
      selectedGender: gender,
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
        <Text style={styles.contentHeaderText}>Welcome to Fitness App</Text>

        {genders.map((gender, index) => (
          <View key={index}>
            <Image 
              source={gender === 'Male' ? maleImg : femaleImg}
              style={styles.genderImage}
            />

            <TouchableOpacity
              onPress={() => {
                handleGenderSelection(gender);
              }}>
              <LinearGradient
                colors={['#3498db', '#0074e4', '#4fc3f7']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.genderButton}>
                <Text style={styles.genderButtonText}>{gender}</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  genderImage: {
    width: 80,
    height: 150,
    marginLeft: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  genderButton: {
    borderRadius: 100,
    width: 200,
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 15,
  },
  genderButtonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default GenderScreen;
