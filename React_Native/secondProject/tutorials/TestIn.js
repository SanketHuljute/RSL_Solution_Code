import {Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { useState } from 'react';
{/* Text Input box */}
export default TextIn = () =>{

    const [name, setName] = useState("Anil");

    return (
        <View>
            <Text style ={{fontSize: 30}}>Handle Text Input</Text>
            <Text style ={{fontSize: 30}}>Your name is:{name} </Text>
            <TextInput 
            style= {styles.textInput}
            placeholder ="Enter your name"
            onChangeText = {(text)=>setName(text)}
            />
            <Button title='Clear Input Value' onPress={()=>setName('')} />
        </View> 
    )
}

const styles = StyleSheet.create({
    textInput:
    {
        fontSize: 18, 
        color:'red', 
        borderWidth:2, borderColor:'red',margin:10
    }
})