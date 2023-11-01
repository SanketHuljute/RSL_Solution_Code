//import React from 'react';
import {Text, View, StyleSheet } from 'react-native';

const Style = () =>{

    return (
        <View>
            <Text style={{fontSize: 30, color:'red', backgroundColor : 'pink'}}>Style in react native</Text>
            <Text style={styles.textBox}>Style in react native</Text>
            {/* <Text style={styles.textBox}>Style in react native</Text>
            <Text style={styles.textBox}>Style in react native</Text>
             */}
        </View>
    )
}
const styles = StyleSheet.create ({
    textBox:{
        color : 'blue',
        fontSize : 30,
        backgroundColor : 'green',
        marginBottom : 10,
        padding : 10,
        borderRadius: 10,
        height : 100,
        textAlignVertical: 'center',
        borderColor: 'red',
        borderWidth: 2
    }
    
})

export default Style;