import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import Input from './Input';

const Signup = ({navigation}) => {
  return (
    <View>
      <LinearGradient
        colors={['#3498db', '#0074e4', '#4fc3f7']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          height: Dimensions.get('window').height * 0.2,
          width: '100%',
          alignItems: 'center',
          paddingTop: 50, 
        }}>
        <Text style={{color: 'white', fontSize: 32, fontWeight: 'bold'}}>
          Fitness App
        </Text>
      </LinearGradient>

      <View
        style={{
          elevation: 10,
          backgroundColor: 'white',
          borderRadius: 10,
          margin: 10,
          marginTop: -20,
          paddingVertical: 20,
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#0074e4',
          }}>
          Register
        </Text>

        <Input
          title="Username"
          placeholder="Enter your name"
          keyboard="default"
        />

        <Input
          title="Email"
          placeholder="Enter your email"
          keyboard="email-address"
        />

        <Input
          title="Contact Number"
          placeholder="Enter your mobile number"
          keyboard="number-pad"
        />

        <Input
          title="Confirm Password"
          placeholder="***********"
          keyboard="default"
          is_password={true}
        />

        <Input
          title="Password"
          placeholder="***********"
          keyboard="default"
          is_password={true}
        />

        <LinearGradient
          colors={['#3498db', '#0074e4', '#4fc3f7']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            borderRadius: 100,
            width: 150,
            alignSelf: 'center',
            alignItems: 'center',
            paddingVertical: 5,
            marginTop: 50,
            marginBottom: 15,
          }}
          onPress={() => {}}>
          <Text style={{color: 'white', fontSize: 19, fontWeight: 'bold'}}>SIGNUP</Text>
        </LinearGradient>

        <Text style={{color: '#0074e4', fontSize: 16, textAlign: 'center',fontWeight: 'bold'}}>
          Already have an account :-){'  '}
          <Text onPress={() => navigation.navigate('Login')}>Login</Text>
        </Text>
      </View>
    </View>
  );
};

export default Signup;
