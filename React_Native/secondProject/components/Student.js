import React, {Component} from 'react';
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


class Student extends React.Component {
  render() {
    
    return (
      <View>
        {/* <Text style={{fontSize: 25,color:'green'}}>Student Component</Text> */}
    <Text style={{fontSize: 25,color:'green'}}>Student name:{this.props.name}</Text>
        <TextInput placeholder="Enter your name: " />
        <Button title="Press Me" />
      
      </View>
    );
  }
}

export default Student;
