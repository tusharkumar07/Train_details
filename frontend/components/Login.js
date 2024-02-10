import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground } from 'react-native';
import React,{useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
const stack=createNativeStackNavigator();
import axios from "axios";
import trainImg from "../images/trainImg.png";
import loginTrain from "../images/loginTrain.jpg"


export default function Login(props) {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    const [emailErr,setEmailErr]=useState(false);
    const [passwordErr,setPasswordErr]=useState(false);
  
    const sendData=()=>{
    //for displying the error when form data is not filled properly
        !email?setEmailErr(true):setEmailErr(false);
        !password?setPasswordErr(true):setPasswordErr(false);
    //for not submiting the form when any filled is empty
      if( !email || !password){
        return false
      }
      const detail={email,password}

    //checking the data from database
    const infoCheck={email,password}
      axios.post("http://192.168.137.9:5000/login",infoCheck).then((res)=>{
          if(res.data==true){
              //from nevigating to home page when no error in form data
              props.navigation.navigate('Home');
          }else{
              props.navigation.navigate('Login');
          }
      }).catch((err)=>{
            console.warn(`err in log in : ${err}`)
            props.navigation.navigate('Login');
      })
    //for clearing the form data after submitting the for
      setEmail("");
      setPassword("");
      console.warn(detail);
    }
    const goToSingUp=()=>{
      props.navigation.navigate('SignUp');
    }

    const goToHomePage=()=>{
      props.navigation.navigate('Home');
    }
  
    return (
        <>
        
          <View style={styles.container}>
          <ImageBackground source={loginTrain} style={styles.backgroundImage}>
          <StatusBar style="auto" />
          <Text style={styles.header}>Log In Form</Text>
          <View style={styles.inputCont}>
            <TextInput style={styles.inputBox1} placeholder='Enter your Email' value={email}
              onChangeText={(e)=>{setEmail(e)}}/>
              {emailErr?<Text style={styles.err}>Please enter valid email</Text>:null}
            <TextInput style={styles.inputBox1} placeholder='Enter your Password'value={password}
              onChangeText={(e)=>{setPassword(e)} } secureTextEntry={true}/>
              {passwordErr?<Text style={styles.err}>Please enter valid Password</Text>:null}
        </View>
        <View style={styles.btn}>
          <Button title='Enter' onPress={sendData} color={"purple"}/>
        </View>

        
        <View style={styles.btn2}>
          <Button title='Sign Up' onPress={goToSingUp}/>
        </View>
        <Text style={styles.btnText}>New User Click On Sign Up Button</Text>
        {/* <View style={styles.btn2}>
          <Button title='Home Page' onPress={goToHomePage} color={"green"}/>
        </View> */}
        </ImageBackground>
        </View>

        
        </>
        
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#95a5a6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText:{
    color:"white",
    textAlign:"center",
    fontWeight:'bold',
    marginTop:10
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: "center",
    width:"100%"
  },
  btn:{
    marginTop:20,
    width:180,
    padding:20,
    borderRadius:10,
    marginLeft:100
  },
  btn2:{
    marginTop:7,
    width:180,
    padding:20,
    borderRadius:10,
    marginBottom:-12,
    marginLeft:100
  },
  header:{
    fontWeight:'bold',
    position:'relative',
    top:-50,
    left:0,
    textAlign:"center",
    fontSize:30,
    color:"white"
  },
  inputCont:{
    display:'flex',
    flexDirection:'column',
    justifyContent:"center",
    marginLeft:40
  },
  inputBox1: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    width: '90%',
    marginBottom: 30,
    backgroundColor: "white",
    paddingLeft: 20,
    fontWeight: 'bold',
    justifyContent: 'center', 
  },
  err:{
          color:"red",
          marginTop:-15,
          marginBottom:30,
          marginLeft:50,
  }
});