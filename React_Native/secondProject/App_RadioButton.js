//29 video
//  Make radio button in react-native
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
  TouchableHighlight,
  TouchableOpacity,
  flexDirection,
} from 'react-native';

const App = () => {
  const [selectedradio, setSelectedRadio]=useState(1);
  return (
    <View style={styles.main}>
      {/* <Text style={{fontSize: 22}}> Make radio button in react-native </Text> */}

      <TouchableOpacity onPress={()=>setSelectedRadio(1)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {
              selectedradio ===1 ? <View style={styles.radioBg}></View>:null
            }
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>setSelectedRadio(2)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {
              selectedradio ===2 ? <View style={styles.radioBg}></View>:null
            }
          </View>
          <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    fontSize: 20,
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'skyblue',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioBg:{
    backgroundColor:'skyblue',
    height:28,
    width:28,
    borderRadius:20,
    margin:4
  }
  
});

export default App;
