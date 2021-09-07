import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WelcomeScreen } from './Components/WelcomeScreen';
import { Timer } from './Components/Timer';
export default function App() {
  const[Focus,setFocus]=useState("gross")
  
  return (
<View style={styles.container}>

{Focus? (<WelcomeScreen focus={setFocus}/>) :0}
<Timer/>
     </View>
  );
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#E96B50"
  }
})


