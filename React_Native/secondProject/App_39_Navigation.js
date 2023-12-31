//39  video
// Navigation with React-Native
import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Navigator} from 'react-native-'

const Stack = createNativeStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
       
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

const Home=()=>{
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center' }}>
      <Text style={{fontSize: 30}}>Home Screen</Text>
    </View>
  )
}

const Login=(props)=>{
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center' }}>
      <Text style={{fontSize: 30}}>Login Screen</Text>
      <Button title='Go to Home Page' onPress={()=>props.navigation.navigate("Home")} />
    </View>
  )
}

export default App;
