import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground } from 'react-native';
import React,{useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
const stack=createNativeStackNavigator();
import axios from "axios";
import trainImg from "../images/trainImg.png";
import signupTrain from "../images/signupTrain.jpg"
import url from './url'

export default function SignUp(props) {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password2,setPassword2]=useState();
    const [password,setPassword]=useState();

    const[nameErr,setNameErr]=useState(false);
    const [emailErr,setEmailErr]=useState(false);
    const [password2Err,setPassword2Err]=useState(false);
    const [passwordErr,setPasswordErr]=useState(false);
  
    const sendData=()=>{
    //for displying the error when form data is not filled properly
        !name?setNameErr(true):setNameErr(false);
        !email?setEmailErr(true):setEmailErr(false);
        !password2?setPassword2Err(true):setPassword2Err(false);
        !password?setPasswordErr(true):setPasswordErr(false);
      
    //for not submiting the form when any filled is empty
      if(!name || !email || !password2 || !password){
        return false
      }

      if(password===password2){
            const info={
              name,email,password
            }
        //sending data to backend using axios
            axios.post("http://192.168.137.9:5000/signup",info).then((res)=>{
              if(res.data==true){
                props.navigation.navigate('Home');
              }
              else{
                props.navigation.navigate("SignUp")
                console.warn("Error in sign up")
              }
            }).catch((err)=>{
              props.navigation.navigate("SignUp")
              console.warn(`Err in signin : ${err}`)
            })
      }
      else{
        console.warn("Password not matching")
        return false;
      }
      const detail={name,email,password2,password}
    //for clearing the form data after submitting the form
      setName("");
      setEmail("");
      setPassword2("");
      setPassword("");
      console.warn(detail);
    }

    const goToLogIn=()=>{
      props.navigation.navigate('Login');
    }
  
    return (
        <>
          <View style={styles.container}>
          <ImageBackground source={signupTrain} style={styles.backgroundImage}>
          <StatusBar style="auto" />
          <Text style={styles.header}>Sign Up Form</Text>
          <View style={styles.inputCont}>
            <TextInput style={styles.inputBox1} placeholder='Enter your Name' value={name} 
              onChangeText={(e)=>{setName(e)}}/>
              {nameErr?<Text style={styles.err}>Please enter valid Name</Text>:null}
            <TextInput style={styles.inputBox1} placeholder='Enter your Email' value={email}
              onChangeText={(e)=>{setEmail(e)}}/>
              {emailErr?<Text style={styles.err}>Please enter valid email</Text>:null}
            <TextInput style={styles.inputBox1} placeholder='Enter your Password'value={password}
              onChangeText={(e)=>{setPassword(e)} } secureTextEntry={true}/>
              {passwordErr?<Text style={styles.err}>Please enter valid Password</Text>:null}
            <TextInput secureTextEntry={true} style={styles.inputBox1} placeholder='Enter Password again' value={password2}
              onChangeText={(e)=>{setPassword2(e)}}/>
              {password2Err?<Text style={styles.err}>Please enter valid password</Text>:null}
        </View>
        <View style={styles.btn}>
          <Button title='Enter' onPress={sendData} color={"purple"}/>
        </View>
        
        <View style={styles.btn2}>
          <Button title='Log in' onPress={goToLogIn} />
        </View>
        <Text style={styles.btnText}>Already have Account, Click</Text>
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
    backgroundImage: {
      flex: 1,
      resizeMode: 'contain',
      justifyContent: "center",
      width:"100%"
    },
    btnText:{
      fontSize:15,
      marginBottom:-10,
      color:"white",
      fontWeight:"bold",
      textAlign:'center'
    },
    btn:{
      marginTop:10,
      width:180,
      padding:20,
      borderRadius:10,
      marginLeft:100
    },
    btn2:{
      marginTop:5,
      width:180,
      padding:20,
      borderRadius:10,
      marginLeft:100
    },
    header:{
      fontWeight:'bold',
      position:'relative',
      top:-50,
      textAlign:'center',
      fontSize:30,
      color:"white"
    },
    inputCont:{
      display:'flex',
      flexDirection:'column',
      marginLeft:30
    },
    inputBox1: {
      borderWidth: 1,           
      borderColor: 'gray',     
      borderRadius: 5,          
      padding: 10,  
      margin:10,
      width:300,
      marginBottom:30,
      backgroundColor:"white",
      paddingLeft:20,
      fontWeight:'bold'
    },
    err:{
            color:"red",
            marginTop:-15,
            marginBottom:30,
            marginLeft:20
    }
  });
