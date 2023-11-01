// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Home';
import Login from './src/Login';
import Signup from './src/Signup';

import GenderScreen from './src/GenderScreen';
import ExerciseTypeScreen from './src/ExcerciseTypeScreen';
import ModeScreen from './src/ModeScreen';
import WeekScreen from './src/WeekScreen';
import ExcerciseScreen from './src/ExcerciseScreen';
import ExcerciseDetails from './src/ExcerciseDetails';






const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="FirstWelcome" component={FirstWelcome} /> */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="GenderScreen" component={GenderScreen} />
        <Stack.Screen name="ExerciseTypeScreen" component={ExerciseTypeScreen} />
        <Stack.Screen name="ModeScreen" component={ModeScreen} />
        <Stack.Screen name="WeekScreen" component={WeekScreen} />
        <Stack.Screen name="ExcerciseScreen" component={ExcerciseScreen} />
        <Stack.Screen name="ExcerciseDetails" component={ExcerciseDetails} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
