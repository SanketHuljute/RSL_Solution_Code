//26 video
//useEffect for Component Did Mount
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
} from 'react-native';

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <View>
      <Text style={{fontSize: 22}}> useEffect for unmount Component</Text>
      <Button title="Toggle" onPress={() => setShow(!show)} />
      {show ? <Student /> : null}
    </View>
  );
};

const Student = () => {
//  let timer= setInterval(() => {
//     console.warn('Timer Called');
//   }, 2000);

  useEffect(() => {
    return () => {
      clearInterval(timer)
    };
  });
  return (
    <View>
      <Text style={{color: 'red', fontSize: 30}}>Student</Text>
    </View>
  );
};

export default App;
