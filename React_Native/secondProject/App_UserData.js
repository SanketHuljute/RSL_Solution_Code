import React, {useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import CompanyData from './components/CompanyData';
import UserData from './components/UserData'

const App = () => {
  const users=[
    {
      id:1,
      name:"Anil",
      email:"abc3@gmail.com"
    },
    {
      id:2,
      name:"Sunil",
      email:"qw3@gmail.com"
    },
    {
      id:3,
      name:"Amar",
      email:"a67@gmail.com"
    }
  ]
  return (
    <View>
      {/* Component in loop With FlatList and Array 
      Like Box list */}
      <Text style={{fontSize:25}}>Component in loop With FlatList and Array</Text>
      <FlatList
      data={users}
  renderItem={({item})=><UserData item={item}/>}
      />
    </View>
  );
};



//export default App;
