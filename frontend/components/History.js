import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Modal,Image, ImageBackground } from "react-native";
import bgLogOut from "../images/bgLogOut2.jpg"

export default function History(props) {
  const [logOut, setLogOut] = useState(false);
 
  const sendBack = () => {
    setLogOut(true);
  };
  const loggingOut = () => {
    setLogOut(false);
    props.navigation.navigate("Login");
  };
  const stayLogIn = () => {
    setLogOut(false);
    props.navigation.navigate("About");
  };

  return (
    <>
      <View style={Styles.container}>
      <Image
        source={bgLogOut}
        style={{ width: '100%', height: 400,marginTop:80 }}
      />
        <Text style={Styles.text}>Click here for logging out</Text>

        <Modal animationType={"slide"} transparent={true} visible={logOut}>
          <View style={Styles.border}>
            <Text style={Styles.words}>Are you sure to log out</Text>
            <View style={Styles.btnBox}>
            <View style={Styles.btnlogOut}><Button title="Yes" onPress={loggingOut} color="red"></Button></View>
            <View style={Styles.btnstyIn}><Button title="No" onPress={stayLogIn} color="green"></Button></View>
            </View>
          </View>
        </Modal>
      </View>
      
      
      <View style={Styles.btn}>
      {!logOut?<><Text style={Styles.showMessage}>Thank you for using our app.</Text>
      <Button title="Log Out" onPress={sendBack} /></>:null}
        
      </View>
      
    </>
  );
}

const Styles = StyleSheet.create({
  text: {
    margin: 20,
    marginTop: 500,
  },
  showMessage:{
    color:"white",
    marginBottom:20,
    fontSize:15,
    fontWeight:"bold"
  },
  imgTemp: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: "center",
    width:"100%",
    height:200
  },
  words:{
    fontWeight:"900"
  }
  ,
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"purple"
  },
  btn: {
    alignItems: "center",
    position: "absolute",
    bottom: 100,
    left: 100,
  },
  border:{
    borderWidth:2,
    borderRadius:10,
    width:250,
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:520,
    marginLeft:70,
    padding:25,
    backgroundColor:"#f7f1e3"
  },
  btnBox:{
    display:"flex",
    flexDirection:"row",
    marginTop:15
  },
  btnlogOut:{
    width:80,
    marginRight:20
  },
  btnstyIn:{
    width:80
  }

});
