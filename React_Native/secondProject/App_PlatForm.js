//35  video
// platform in react Native
import React, {Component, useEffect, useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  FlatList,
  Modal,
  ScrollView,
  SectionList,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
  flexDirection,
  ActivityIndicator,
  Pressable,
  Platform,
} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}>platform: {Platform.OS}</Text>
      {/* {Platform.OS=="android" ? 
        <View style={{backgroundColor: 'green', height: 100, width: 100}}> </View>
       : 
        <View style={{backgroundColor: 'red', height: 100, width: 100}}> </View>
      } */}
      <Text style={styles.text}>Helloo</Text>

      <Text style={{fontSize: 30}}>{JSON.stringify (Platform)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color:Platform.OS=="android" ? "orange" : "blue",
    fontSize:20
  }
})

export default App;
