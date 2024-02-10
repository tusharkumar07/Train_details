import React from "react";
import trainImg from "../images/trainImg.png";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import loginTrain from "../images/loginTrain.jpg"
const stack = createNativeStackNavigator();

export default function FirstPage(props) {
    const goToSignup=()=>{
        props.navigation.navigate("SignUp");
    }
    const goToLogin=()=>{
        props.navigation.navigate("Login");
    }
  return (
    <>
      <ImageBackground source={loginTrain} style={styles.backgroundImage}>
      <StatusBar style="auto" /> 
      {/* <View>
        <Text style={{color:"purple",fontSize:30,position:"absolute",top:"2px",fontWeight:"700"}}>TrackLink</Text>
      </View> */}
        <View>
            <Text style={styles.text4}>Experience the Joy of Rail Travel</Text>
        </View>
        <View style={styles.textDiv}>
          <Text style={styles.text1}>Your</Text>
          <Text style={styles.text2}>Travelling</Text>
          <Text style={styles.text3}>Partner</Text>
        </View>
        <View style={styles.logSign}>
          <View style={styles.log}>
            <Button title="Log In" onPress={goToLogin}/>
          </View>
          <View style={styles.sign}>
            <Button title="Sign Up" onPress={goToSignup} color={"green"}/>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  textDiv:{
    marginTop:150
  },
  text4:{
    position:"absolute",
    top:-150,
    left:30,
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    borderBottomWidth:3,
    borderColor:"white"
  },
  text1: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    marginLeft: 50,
  },
  text2: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    marginLeft: 100,
  },
  text3: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    marginLeft: 230,
  },
  logSign: {
    position:"absolute",
    bottom:10,
    display: "flex",
    flexDirection: "row",
    marginLeft:20,
    marginBottom:30
  },
  log: {
    width: 130,
    marginLeft:10,
  },
  sign: {
    width: 130,
    marginLeft:70
  },
});
