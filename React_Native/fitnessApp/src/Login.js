import {
  Image,
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import Input from './Input';
// import {ArrowLeftIcon} from 'react-native-heroicons/solid';
// import {SafeAreaView} from 'react-native-safe-area-context';

const Login = ({navigation}) => {
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
          paddingVertical: 30,
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#0074e4',
          }}>
          LOGIN
        </Text>

        <Input
          title="Username"
          placeholder="Enter your name"
          keyboard="default"
        />

        <Input
          title="Password"
          placeholder="***********"
          keyboard="default"
          is_password={true}
        />

        <Text style={{color: '#0074e4', fontSize: 16, textAlign: 'right'}}>
          Forgot Password?{' '}
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('GenderScreen')}>
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
            }}>
            <Text style={{color: 'white', fontSize: 19, fontWeight: 'bold'}}>LOGIN</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={{color: '#0074e4', fontSize: 16, textAlign: 'center'}}>
          Don't have an account?{'  '}
          <Text onPress={() => navigation.navigate('Signup')}>Signup</Text>
        </Text>

       
      </View>

 
    </View>
  );
};

export default Login;

//colors={['#008080', '#454545', '#808080']}

// import {
//   Image,
//   View,
//   Text,
//   Dimensions,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';
// import React from 'react';
// import LinearGradient from 'react-native-linear-gradient';
// import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

// import Input from './Input';
// import {ArrowLeftIcon} from 'react-native-heroicons/solid';
// import {SafeAreaView} from 'react-native-safe-area-context';

// const Login = ({navigation}) => {
//   return (
//     <View>
//       <LinearGradient
//         colors={['#000000', '#454545', '#808080']}
//         start={{x: 0, y: 0}}
//         end={{x: 1, y: 0}}
//         style={{
//           borderBottomLeftRadius: 15,
//           borderBottomRightRadius: 15,
//           height: Dimensions.get('window').height * 0.2,
//           width: '100%',
//           alignItems: 'center',
//           paddingTop: 50,
//         }}>
//         <Text style={{color: 'white', fontSize: 32, fontWeight: 'bold'}}>
//           Fitness App
//         </Text>
//       </LinearGradient>

//       <View
//         style={{
//           elevation: 10,
//           backgroundColor: 'grey',
//           borderRadius: 10,
//           margin: 10,
//           marginTop: -20,
//           paddingVertical: 30,
//           paddingHorizontal: 15,
//           borderColor:'black'
//         }}>
//         <Text
//           style={{
//             fontSize: 20,
//             fontWeight: 'bold',
//             textAlign: 'center',
//             color: 'white',
//           }}>
//           LOGIN
//         </Text>

//         <Input
//           title="Username"
//           placeholder="Enter your name"
//           keyboard="default"
//         />

//         <Input
//           title="Password"
//           placeholder="***********"
//           keyboard="default"
//           is_password={true}
//         />

//         <Text style={{color: '#0074e4', fontSize: 16, textAlign: 'right'}}>
//           Forgot Password?{' '}
//         </Text>

//         <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
//           <LinearGradient
//             colors={['#3498db', '#0074e4', '#4fc3f7']}
//             start={{x: 0, y: 0}}
//             end={{x: 1, y: 0}}
//             style={{
//               borderRadius: 100,
//               width: 150,
//               alignSelf: 'center',
//               alignItems: 'center',
//               paddingVertical: 5,
//               marginTop: 50,
//               marginBottom: 15,
//             }}>
//             <Text style={{color: 'white', fontSize: 19}}>LOGIN</Text>
//           </LinearGradient>
//         </TouchableOpacity>

//         <Text style={{color: '#0074e4', fontSize: 16, textAlign: 'center'}}>
//           Don't have an account?{'  '}
//           <Text onPress={() => navigation.navigate('Signup')}>Signup</Text>
//         </Text>      
//       </View>
//     </View>
//   );
// };

// export default Login;