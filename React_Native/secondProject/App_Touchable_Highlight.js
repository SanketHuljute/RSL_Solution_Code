//28 video
//  Touchable Highlight
import React, {Component, useEffect, useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  SectionList,
  TouchableHighlight
} from 'react-native';

const App = () => {
  return (
    <View style={styles.main}>
            <Text style={{fontSize: 22}}> Touchable Highlight</Text>

      <TouchableHighlight>
            <Text style={styles.button}>Button</Text>
      </TouchableHighlight>

      <TouchableHighlight>
            <Text style={[styles.button,styles.success]}>Success</Text>
      </TouchableHighlight>

      <TouchableHighlight>
            <Text style={[styles.button,styles.primary]}>Primary</Text>
      </TouchableHighlight>

      <TouchableHighlight>
            <Text style={[styles.button,styles.warning]}>Warning</Text>
      </TouchableHighlight>

      <TouchableHighlight>
            <Text style={[styles.button,styles.error]}>error</Text>
      </TouchableHighlight>
      
    </View>
  );
};

const styles = StyleSheet.create({
  main:{
    flex:1
  },
  button:{
    backgroundColor:'#bbb',
    color:'white',
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
    margin:10,
    border:'radius',
    shadowColor:'red',
    elevation:10,
    shadowOpacity:1

  },
  success:{backgroundColor:'green'},
  primary:{backgroundColor:'blue'},
  warning:{backgroundColor:'gold'},
  error:{backgroundColor:'red'}
})


export default App;