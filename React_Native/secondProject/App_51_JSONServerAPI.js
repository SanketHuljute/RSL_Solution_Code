//51 video
//Fetch data from JSON server API
import React, {useState, useEffect} from 'react';
import {View, Text, Button, TextInput, ScrollView, FlatList} from 'react-native';

const App = () => {
  
  const [data, setData] = useState([]);
  
const getAPIData =async ()=>
{
  const url ="http://10.0.2.2:3000/users";
  let result = await fetch(url);
  result = await result.json();
setData(result)
  
}

useEffect(()=>{
  getAPIData()
},[])

  return (
    
    <View>
      <Text style={{fontSize: 30}}>Fetch data from JSON server API</Text>
      {data.length
        ? data.map((item) => 
            <View style={{padding:10 , borderBottomColor:"#ccc", borderBottomWidth:1}}>
              <Text style={{fontSize: 20, backgroundColor:"#ddd"}}> {item.name}</Text>
              <Text style={{fontSize: 20}}>{item.age}</Text>
              <Text style={{fontSize: 20}}>{item.email}</Text>
            </View>
          )
        : null}
    </View>
   
  );
};

export default App;

