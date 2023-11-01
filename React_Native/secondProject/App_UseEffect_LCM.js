
//23 video
import React, {Component, useEffect, useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  SectionList
} from 'react-native';



const App = () => {

  const [count, setCount] = useState(0);

 useEffect(()=>{
  console.warn("Hello")

 },[])

  return (
    <View>
     {/* UseEffect hook for life cycle methods*/}
      
  <Text style={{fontSize:25}}>UseEffect hook for life cycle methods{count}</Text>
      <Button title='UpdateCount' onPress={()=>setCount(count+1)} />
    </View>
  );
};

export default App;
