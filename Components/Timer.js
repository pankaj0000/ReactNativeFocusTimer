import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Text, Platform, Button } from "react-native";
// import { WelcomeScreen } from "./WelcomeScreen";
import { ProgressBar } from 'react-native-paper';
export const Timer = () => {
  const [progress,setprogress]=useState(1)
  // const [minutes,setminutes]= useState("")
  const [Start, setStart] = useState(false);
  let min = 0.1;
  let isPaused = !Start;
  const formatTime = (time) => (time < 10 ? `0${time}` : time);
  const Converter = () => min * 1000 * 60;
  const interval = React.useRef(null);
  //   console.log(Converter);
  const CountDown = () => {
    setMillis((time) => {
      if (time === 0) {
        return time;
      }
      const timeLeft = time - 1000;
      setprogress(timeLeft/Converter(min))
      return timeLeft;
    });
  };
  useEffect(() => {
    if (isPaused) {
      return;
    }
    interval.current = setInterval(CountDown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);
  // const ExConverter=Converter/60000
  const [Millis, setMillis] = useState(Converter(min));
  const minutes = Math.floor(Millis / 1000 / 60) % 60;
  const seconds = Math.floor(Millis / 1000) % 60;
  const styles = StyleSheet.create({
    container: {
      paddingTop: Platform.OS === "android" ? 50 : 0,
      alignItems: "center",
      fontSize: 30,
      
    },
    buttonContainer: {
      paddingTop: 40,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    timeContainer: {
      fontSize: 30
    }
  });

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.timeContainer}>
          {formatTime(minutes)} : {formatTime(seconds)} min
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        {isPaused?
        (<View>
          <Button title="Start" onPress={() => setStart(true)}></Button>
        </View>)
        :
        (<View >
          <Button title="Pause" onPress={()=>setStart(false)}></Button>
        </View>)
        }
      </View>
      <View style={{paddingTop:20}}>
    <ProgressBar color="#C04000" style={{height:10}} progress={progress}/>
    </View>
    </View>
  );
};
