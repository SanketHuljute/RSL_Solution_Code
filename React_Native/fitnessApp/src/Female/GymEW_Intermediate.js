import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const GymEW_Intermediate = ({navigation}) => {
  return (
    <View>
      <LinearGradient
        colors={['#3498db', '#0074e4', '#4fc3f7']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          height: Dimensions.get('window').height * 0.2,
          width: '100%',
          alignItems: 'center',

          paddingTop: 50,
        }}>
        <Text style={{color: 'white', fontSize: 32, fontWeight: 'bold'}}>
          Fitness App
        </Text>
      </LinearGradient>

      <View
        style={{
          elevation: 10,
          backgroundColor: 'white',
          borderRadius: 10,
          margin: 10,
          marginTop: -20,
          paddingVertical: 20,
          paddingHorizontal: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#0074e4',
            paddingVertical: 10,
          }}>
          Excecise For Intermediate
        </Text>
        <ScrollView style={{height: Dimensions.get('window').height * 0.6}}>
          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <LinearGradient
              colors={['#3498db', '#0074e4', '#4fc3f7']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={{
                borderRadius: 100,
                width: 350,
                alignSelf: 'center',
                alignItems: 'center',
                paddingVertical: 10,
                marginBottom: 15,
              }}>
              <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
              Barbell Squats
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <LinearGradient
              colors={['#3498db', '#0074e4', '#4fc3f7']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={{
                borderRadius: 100,
                width: 350,
                alignSelf: 'center',
                alignItems: 'center',
                paddingVertical: 10,
                marginBottom: 15,
              }}>
              <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
              Lat Pulldown Machine
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <LinearGradient
              colors={['#3498db', '#0074e4', '#4fc3f7']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={{
                borderRadius: 100,
                width: 350,
                alignSelf: 'center',
                alignItems: 'center',
                paddingVertical: 10,
                marginBottom: 15,
              }}>
              <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
              Dumbbell Bench Press
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <LinearGradient
              colors={['#3498db', '#0074e4', '#4fc3f7']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={{
                borderRadius: 100,
                width: 350,
                alignSelf: 'center',
                alignItems: 'center',
                paddingVertical: 10,
                marginBottom: 15,
              }}>
              <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
                Seated Row Machine
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <LinearGradient
              colors={['#3498db', '#0074e4', '#4fc3f7']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={{
                borderRadius: 100,
                width: 350,
                alignSelf: 'center',
                alignItems: 'center',
                paddingVertical: 10,
                marginBottom: 15,
              }}>
              <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
              Dumbbell Lunges
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <LinearGradient
              colors={['#3498db', '#0074e4', '#4fc3f7']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={{
                borderRadius: 100,
                width: 350,
                alignSelf: 'center',
                alignItems: 'center',
                paddingVertical: 10,
                marginBottom: 15,
              }}>
              <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
                Dumbbell Shoulder Press
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <LinearGradient
              colors={['#3498db', '#0074e4', '#4fc3f7']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={{
                borderRadius: 100,
                width: 350,
                alignSelf: 'center',
                alignItems: 'center',
                paddingVertical: 10,
                marginBottom: 15,
              }}>
              <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
              Barbell Hip Thrusts
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <LinearGradient
              colors={['#3498db', '#0074e4', '#4fc3f7']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={{
                borderRadius: 100,
                width: 350,
                alignSelf: 'center',
                alignItems: 'center',
                paddingVertical: 10,
                marginBottom: 15,
              }}>
              <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
                Assisted Pull-Up Machine
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <LinearGradient
              colors={['#3498db', '#0074e4', '#4fc3f7']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={{
                borderRadius: 100,
                width: 350,
                alignSelf: 'center',
                alignItems: 'center',
                paddingVertical: 10,
                marginBottom: 15,
              }}>
              <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
              Plank with Leg Lift
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default GymEW_Intermediate;
