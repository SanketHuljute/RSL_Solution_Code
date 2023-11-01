//31 video
//  Make Dynamic radio button in react-native
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

  const skills = [
    {
      id:1,
      name:"Java"
    },
    {
      id:2,
      name:"PHP"
    },
    {
      id:3,
      name:"Node"
    },
    {
      id:4,
      name:"CSS"
    },
    {
      id:5,
      name:"Python"
    },
  ]

  const [selectedRadio, setSelectedRadio] = useState(1);

  return (
    <View style={styles.main}>
      {
        skills.map((item,index)=>
        <TouchableOpacity 
        key={index}
        onPress={() => setSelectedRadio(item.id)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {selectedRadio === item.id ? <View style={styles.radioBg}></View> : null}
          </View>
      <Text style={styles.radioText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
        )
      }

      {/* <TouchableOpacity onPress={() => setSelectedRadio(2)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {selectedRadio === 2 ? <View style={styles.radioBg}></View> : null}
          </View>
          <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity> */}
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
  radioBg: {
    backgroundColor: 'skyblue',
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4,
  },
});

export default App;
