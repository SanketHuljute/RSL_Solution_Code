//54 video
//simple Form validation
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

  const [nameError, setNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const saveData = async () => {
    if (!name) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (!age) {
      setAgeError(true);
    } else {
      setAgeError(false);
    }

    if (!email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!name || !age || !email) {
      return false;
    }

    console.warn('Next');

    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email, age}),
    });
    result = await result.json();
    if (result) {
      console.warn('Data added');
    }
  };
  return (
    <View>
      <Text style={{fontSize: 30}}>Post API with Input Field data</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Enter the name"
      />

      {nameError ? (
        <Text style={styles.errorText}>Please enter valid name</Text>
      ) : null}

      <TextInput
        style={styles.input}
        value={age}
        onChangeText={text => setAge(text)}
        placeholder="Enter age"
      />

      {ageError ? (
        <Text style={styles.errorText}>Please enter valid age</Text>
      ) : null}

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Enter email"
      />
      {emailError ? (
        <Text style={styles.errorText}>Please enter valid email</Text>
      ) : null}
      <Button title="Save Data" onPress={saveData} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'skyblue',
    borderWidth: 1,
    margin: 20,
    fontSize: 20,
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
    marginLeft: 20,
  },
});
export default App;
