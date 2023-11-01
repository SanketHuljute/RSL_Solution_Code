// import {
//     View,
//     Text,
//     Dimensions,
//     TextInput,
//     TouchableOpacity,
//     Image,
//   } from 'react-native';
//   import React from 'react';
//   import LinearGradient from 'react-native-linear-gradient';
  
//   const FirstWelcome = ({navigation}) => {
//     return (
//       <View>
//         <LinearGradient
//           colors={['#3498db', '#0074e4', '#4fc3f7']}
//           start={{x: 0, y: 0}}
//           end={{x: 1, y: 0}}
//           style={{
//             borderBottomLeftRadius: 15,
//             borderBottomRightRadius: 15,
//             height: Dimensions.get('window').height * 0.2,
//             width: '100%',
//             alignItems: 'center',
//             paddingVertical: 10,
//             paddingTop: 50,
//           }}>
//           <Text style={{color: 'white', fontSize: 32, fontWeight: 'bold'}}>
//             Fitness App
//           </Text>
//         </LinearGradient>
  
//         <View
//           style={{
//             elevation: 10,
//             backgroundColor: 'white',
//             borderRadius: 10,
//             margin: 10,
//             marginTop: -20,
//             paddingVertical: 50,
//             paddingHorizontal: 15,
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}>
//           <Text
//             style={{
//               fontSize: 20,
//               fontWeight: 'bold',
//               textAlign: 'center',
//               color: '#0074e4',
//             }}> Welcome
//             </Text>

//             <Text
//             style={{
//               fontSize: 20,
//               fontWeight: 'bold',
//               textAlign: 'center',
//               color: '#0074e4',
//               paddingVertical: 15
//             }}>
//             Let,s start !!!!!
//           </Text>
  
  
//           <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//             <LinearGradient
//               colors={['#3498db', '#0074e4', '#4fc3f7']}
//               start={{x: 0, y: 0}}
//               end={{x: 1, y: 0}}
//               style={{
//                 borderRadius: 100,
//                 width: 200,
//                 alignSelf: 'center',
//                 alignItems: 'center',
//                 paddingVertical: 10,
//                 marginBottom: 15,
//               }}>
//               <Text style={{color: 'white', fontSize: 22}}>LogIn</Text>
//             </LinearGradient>
//           </TouchableOpacity>
  
  
//           <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
//             <LinearGradient
//               colors={['#3498db', '#0074e4', '#4fc3f7']}
//               start={{x: 0, y: 0}}
//               end={{x: 1, y: 0}}
//               style={{
//                 borderRadius: 100,
//                 width: 200,
//                 alignSelf: 'center',
//                 alignItems: 'center',
//                 paddingVertical: 10,
//                 marginBottom: 15,
//               }}>
//               <Text style={{color: 'white', fontSize: 22}}>SignUp</Text>
//             </LinearGradient>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };
  
//   export default FirstWelcome;
  