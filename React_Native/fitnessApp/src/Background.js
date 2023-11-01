import { View, ImageBackground } from 'react-native'
import React from 'react'

const Background = ({children}) => {
  return (
    <View>
        <ImageBackground source={require('../images/pullups.png')} style={{height:'100%',borderTopLeftRadius: 15,
          borderTopRightRadius: 15}} />
        <View style={{position:'absolute'}}>
            {children}
        </View>
    </View>
  );
}

export default Background;