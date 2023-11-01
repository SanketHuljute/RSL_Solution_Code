//34  video
// Status bar in react Native
import React, {Component, useEffect, useState}  from 'react';
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
  Pressable
} from 'react-native';

const App = () => {
  
const [hide, setHide] = useState(false);
const [barStyle, setBarStyle] = useState("default");
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="orange"
      barStyle={barStyle}
      hidden={hide}
      />

      <Button title="Toogle status bar" onPress={()=>setHide(!hide)}/>
      <Button title="Update style" onPress={()=>setBarStyle("dark-content")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
  

export default App;
