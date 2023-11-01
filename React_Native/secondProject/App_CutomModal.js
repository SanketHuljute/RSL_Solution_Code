//37  video
// Custom Modal(Pop-up) in react Native
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      {show ? (
        <View style={styles.modal}>
          <View style={styles.body}>
            <Text>Some Text</Text>
            <Button title="Close" onPress={()=>setShow(false)} />
          </View>
        </View>
      ) : null}
      <Button title="Open Dialog" onPress={()=>setShow(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justyfyContent: 'flex-end',
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(50,50,50,.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: '#fff',
    height: 300,
    width: 300,
    padding: 20,
    justifyContent: 'flex-end',
    borderRadius: 10,
  },
});

export default App;
