import {View, Text, Button, TextInput} from 'react-native';

export const Home = (props) => {
  console.warn(props.route.params);
const {name, age} = props.route.params;

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 30}}>Home Screen</Text>
        <Text style={{fontSize: 30}}>Name:{name} </Text>
    <Text style={{fontSize: 30}}>Age:{age}</Text>
        
      </View>
    );
  };