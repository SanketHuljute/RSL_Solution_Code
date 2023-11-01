//53 video
//Post API with Input Field dada
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

  const saveData = async () => {
    console.warn(name);
    console.warn(age);
    console.warn(email);

    const url = "http://10.0.2.2:3000/users"
    let result = await fetch (url,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name, email, age})
    });
    result = await result.json();
    if(result){
      console.warn("Data added");
      
    }
  };
  return (
    <View>
      <Text style={{fontSize: 30}}>Post API with Input Field data</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Enter the name"
      />

      <TextInput
        style={styles.input}
        value={age}
        onChangeText={(text) => setAge(text)}
        placeholder="Enter age"
      />

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Enter email"
      />

      <Button title="Save Data" onPress={saveData} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'skyblue',
    borderWidth: 1,
    margin: 20,
  },
});
export default App;
