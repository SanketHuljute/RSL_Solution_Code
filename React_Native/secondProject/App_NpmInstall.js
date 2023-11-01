//36  video
// npm install in react Native
import React, {Component, useEffect, useState} from 'react';
import {
 View, Text
} from 'react-native';
import {WebView} from 'react-native-webview'

const App = () => {
  return (
    <WebView source={{uri:"https://reactnative.dev/"}}/>
  );
};


export default App;
