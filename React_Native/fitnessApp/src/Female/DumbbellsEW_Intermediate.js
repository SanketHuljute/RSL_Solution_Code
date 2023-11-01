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
  
  const DumbbellsEW_Intermediate = ({navigation}) => {
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
            Dumbbells Excecise For Intermediate
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
                Goblet Squats
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
                Dumbbell Renegade Rows with Push-Ups
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
                Dumbbell Bulgarian Split Squats
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
                Dumbbell Romanian Deadlifts
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
                Dumbbell Bent-Over Rows
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
                Dumbbell Lunges with Bicep Curls
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
                Dumbbell Tricep Kickbacks
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
                Dumbbell Russian Twists
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
                Dumbbell Farmer's Walk
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  };
  
  export default DumbbellsEW_Intermediate;
  