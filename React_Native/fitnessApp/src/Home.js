import {View, Text} from 'react-native';
import React from 'react';
import Background from './Background';
import Btn from './Btn';
import {darkGreen, green} from './Constants';
const Home = props => {
  return (
    <Background>
      <View style={{marginHorizontal: 40, marginVertical: 150}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginBottom: 100,
          }}>
          {/* Let's start */}
          Fitness App
        </Text>
        {/* <Btn bgColor={green}  textColor='white' btnLabel="Login" Press ={() => props.navigation.navigate("Login")} />
            <Btn bgColor='white' textColor={darkGreen} btnLabel="Signup" Press ={() => props.navigation.navigate("Signup")} /> */}

        <Btn
          // bgColor="grey"
          bgColor='#d4f1f9'
          textColor='#0074e4'
          btnLabel="Login"
          Press={() => props.navigation.navigate('Login')}
        />
        <Btn
          //bgColor="grey"
          bgColor='#d4f1f9'
          textColor='#0074e4'
          btnLabel="Signup"
          Press={() => props.navigation.navigate('Signup')}
        />
      </View>
    </Background>
  );
};

export default Home;
