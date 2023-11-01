
//25 video  
// Toggle, show and Hide components
import React, {Component, useEffect, useState} from 'react';
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



const App = () => {

  const [show, setShow] = useState(false);

  return (
    <View>
     <Text style={{fontSize:22}}> Toggle, show and Hide components </Text>
      <Button title='Show Component' onPress={()=>setShow(true)} />
      <Button title='Hide Component' onPress={()=>setShow(false)} />
      {/* </View><Button title='Toggle Component' onPress={()=>setShow(!show)} */}

      {
        show==true ? <User /> :null
        
        }
    </View>
  );
};

const User=()=>{
  return (
    <View>
      <Text style={{fontSize:30, color:'green'}}>User Component</Text>
    </View>
  )
}


export default App;
