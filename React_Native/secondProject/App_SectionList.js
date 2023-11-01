//18 number video
import React, {useState} from 'react';
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
import SectionList from 'react-native/Libraries/Lists/SectionList';


const App = () => {
  const users =[
    {
      id:1,
      name:"Sanket",
      data:["C#","Java","ReactJS"]
    },
    {
      id:2,
      name:"Anket",
      data:[".NET","Java","Flutter"]
    },
    {
      id:3,
      name:"Saurabh",
      data:["PHP","Java","Angular"]
    },
    {
      id:4,
      name:"Anil",
      data:["PHP","Java","Angular"]
    }

  ]
  return (
    <View>
      {/* Section List in react native */}
      <Text style={{fontSize:25}}>Section List in react native</Text>
      <SectionList
        sections={users}
      />
    </View>
  );
};



export default App;
