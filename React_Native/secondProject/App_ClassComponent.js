import React, {Component} from 'react';
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
import CompanyData from './components/CompanyData';
import Student from './components/Student'
class App extends React.Component{
  fruit=() => {
    console.warn("Apple");
  }    
  
  render(){
        return (
          <View>
            <Text style={{fontSize:25}}>Class Component in react navtive</Text>
            <TextInput placeholder='Enter your name: '/>
            <Button title='Press Me' onPress={this.fruit}/>
            <Student/>
          </View>
        )
      }
}

export default App;
