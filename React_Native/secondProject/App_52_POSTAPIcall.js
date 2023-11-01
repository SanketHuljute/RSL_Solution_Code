//52 video
//simple post API call
import React, {useState, useEffect} from 'react';
import {View, Text, Button, TextInput, ScrollView, FlatList} from 'react-native';

const App = () => {
  
const saveAPIData = async ()=>{
  
  const data ={
    name: "Toni",
    age: 40,
    email: "toni@test.com"
  }
  const url = "http://10.0.2.2:3000/users"
  let result = await fetch(url,{
    method:"POST", 
    headers:{"Content.Type":"application/json"},
    body:JSON.stringify(data)
  })
  result =await result.json();
  console.warn(result);
}
  return (
    
    <View>
      <Text style={{fontSize: 30}}>Post API call</Text>
      <Button title='Save Data' onPress={saveAPIData}/>
    </View>
   
  );
};

export default App;