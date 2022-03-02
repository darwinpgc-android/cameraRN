import React,{useState} from 'react'
 import {View, Text, Button} from 'react-native'




 const App = () => {
  const [inputValue, setInputValue] = useState(0)

  const counter = () => {
    setInputValue(Math.floor(Math.random() * 6))
  }

   return(
     <View>
      <Text>Hello World !...........</Text>
      <Button 
      onPress = {counter}
      title={inputValue.toString()}
      />
       
     </View>
   )
 }

 export default App;