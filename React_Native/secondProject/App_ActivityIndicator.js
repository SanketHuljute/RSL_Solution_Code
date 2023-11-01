//31  video
// Activity Indicator(Loader)
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
  ActivityIndicator
} from 'react-native';

const App = () => {

  const [show, setShow] = useState(false);
  const displayLoader =() =>{
    setShow(true);


    //api call in 3 sec
    setTimeout(() => {
      setShow(false)  
    }, 5000);
    
  }

  return (
    <View style={styles.main}> 
      
      {/* <ActivityIndicator size={200} color="blue" animating={false}/>
      <ActivityIndicator size={200} color="red" animating={false}/> */}

      {
        show ? <ActivityIndicator size={100} color="green" />: null
      }
      <Button title='show loader' onPress={displayLoader}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default App;
