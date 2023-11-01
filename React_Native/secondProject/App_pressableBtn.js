//33  video
// Pressable in react Native
import React, {Component, useEffect, useState}  from 'react';
import {
  Button, Text, TextInput, View,
  StyleSheet, FlatList, Modal,
  ScrollView, SectionList,
  TouchableHighlight, TouchableOpacity,
  flexDirection, ActivityIndicator, Pressable
} from 'react-native';

const App = () => {
  
  return (
    <View style={styles.main}>
      <Pressable 
      onPress={()=>{console.warn("Normal on Press")}}
      onLongPress={()=>{console.warn("Long Press")}}
      onPressIn={()=>{console.warn("Press IN")}}
      onPressOut={()=>{console.warn("Press out")}}
      >
        <Text style={styles.pressableBtn}>Pressable</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressableBtn:{
    backgroundColor:'blue',
    color:'white',
    padding:10,
    margin:10,
    fontSize:20,
    textAlign:'center',
    shadowColor:'#000',
    borderRadius:10,
    elevator:5
  }
})
  

export default App;
