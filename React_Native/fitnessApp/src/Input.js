import {View, Text, TextInput} from 'react-native';
import React from 'react';

const Input = ({title, placeholder, keyboard, is_password}) => {
  return (
    <View>
      <Text style={{color: '#0074e4', fontSize: 16}}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="gray"
        style={{
          borderBottomColor: '#0074e4',
          borderBottomWidth: 1,
          paddingVertical: 5,
          marginTop: 5,
          marginBottom: 5,
          color: 'black',
        }}
        keyboardType={keyboard}
        secureTextEntry={is_password}
      />
    </View>
  );
};

export default Input;
