import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TextInput,
  Button,
} from "react-native";
import { Timer } from "./Timer";

export const WelcomeScreen = () => {
  const [input, setinput] = useState("");
  const [value, setValue] = useState("");
  
  
  
// props.focus(value);
  return (
    <View>
      <Text>Hello</Text>
      <View style={styles.container}>
        <Text style={{ color: "white" }}>Input Your Requirement? </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View>
          <TextInput
            style={styles.inputcontainer}
            value={input}
            onChangeText={setinput}
          />
        </View>
        <View style={styles.buttoncontainer}>
          <Button
            title="+"
            onPress={()=>setValue(input)}
          ></Button>
        </View>
      </View>
      <Text>{value} </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 100 : 0,
  },
  inputcontainer: {
    flexDirection: "row",
    height: 40,
    backgroundColor: "white",
    fontSize: 20,
    justifyContent: "flex-end",
    marginTop: 50,
    width: 300,
    alignItems: "center",
    marginRight: 20,
  },
  buttoncontainer: {
    width: 50,
    justifyContent: "center",
    marginTop: 50,
  },
});
