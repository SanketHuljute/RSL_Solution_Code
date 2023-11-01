//20 video

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
  constructor ()
  {
    super();
    this.state={
      name:"Anil",
      age:10
    }
  }   
  updateName(val){
    this.setState({name:val})
  }
  render(){
        return (
          <View>
            <Text style={{fontSize:25}}>{this.state.name}</Text>
            <TextInput placeholder='Enter your name: ' 
            onChangeText={(text)=>this.updateName(text)}/>
            <Button title='Press Me' />
            <Student name={this.state.name}/>
          </View>
        )
      }
}

export default App;
