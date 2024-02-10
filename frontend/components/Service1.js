import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TextInput,ScrollView,ImageBackground } from 'react-native';
import ServiceBg4 from "../images/Services3BgImg.jpg";
import axios from "axios"

const Service3 = () => {
  const [data, setData] = useState([]);
  const [code,setCode]=useState();
  const [show, setShow]= useState(1)
  const [singleData,setSingleData] =useState();

  const hideData=()=>{
    setShow(1);
  }

  useEffect(() => {

  const fetchTrainData = async () => {
    axios.get("http://192.168.137.9:5000/schedule").then((res)=>{
      // console.log(res.data);
      setData(res.data);
  }).catch((err)=>{
      console.log(err);
  })
  };
    fetchTrainData();
  }, []);

  const searchData=()=>{
    setShow(2)
    axios.get("http://192.168.137.9:5000/schedule").then((res)=>{
      // console.log(res.data);
      setSingleData(res.data);
  }).catch((err)=>{
      console.log(err);
  })
  }

  
  // Render each item in the FlatList
  const renderItems = ({ item }) => (
    <View style={styles.dataContainer}>
    <View style={{marginBottom:15,marginLeft:70}}>
    <Text style={styles.resultData}>Train Name : {item.train_name}</Text>
      <Text style={styles.resultData}>Train Number : {item.train_number}</Text>
      <Text style={styles.resultData}>Train Type : {item.train_type}</Text>
      <Text style={styles.resultData}>Train Source : {item.train_src}</Text>
    </View>
    {/* Data starts here */}
    <View style={styles.fetchedData}>
    <Text style={styles.resultData}>Station 1 : {item.station1_name}</Text>
      <Text style={styles.resultData}>Station Code : {item.station1_code}</Text>
      <Text style={styles.resultData}>State Name : {item.state1_name}</Text>
      <Text style={styles.resultData}>Distance : {item.distance1}</Text>
    </View>
      <View style={styles.fetchedData}>
      <Text style={styles.resultData}>Station 2 : {item.station2_name}</Text>
      <Text style={styles.resultData}>Station Code : {item.station2_code}</Text>
      <Text style={styles.resultData}>State Name : {item.state2_name}</Text>
      <Text style={styles.resultData}>Distance : {item.distance2}</Text>
      </View>
      <View style={styles.fetchedData}>
      <Text style={styles.resultData}>Station 3 : {item.station3_name}</Text>
      <Text style={styles.resultData}>Station Code : {item.station3_code}</Text>
      <Text style={styles.resultData}>State Name : {item.state3_name}</Text>
      <Text style={styles.resultData}>Distance : {item.distance3}</Text>
      </View>
    <View style={styles.fetchedData}>
    <Text style={styles.resultData}>Station 4 : {item.station4_name}</Text>
      <Text style={styles.resultData}>Station Code : {item.station4_code}</Text>
      <Text style={styles.resultData}>State Name : {item.state4_name}</Text>
      <Text style={styles.resultData}>Distance : {item.distance4}</Text>
    </View>
    </View>
  );

  const renderSingleItem = ({ item }) => {
    if (code === item.train_number) {
      return (
        <View style={styles.dataConstainerSingle}>
        <View style={{marginBottom:15,marginLeft:70}}>
        <Text style={styles.resultData}>Train Name : {item.train_name}</Text>
          <Text style={styles.resultData}>Train Number : {item.train_number}</Text>
          <Text style={styles.resultData}>Train Type : {item.train_type}</Text>
          <Text style={styles.resultData}>Train Source : {item.train_src}</Text>
        </View>
        {/* Data starts here */}
        <View style={styles.fetchedData}>
        <Text style={styles.resultData}>Station 1 : {item.station1_name}</Text>
          <Text style={styles.resultData}>Station Code : {item.station1_code}</Text>
          <Text style={styles.resultData}>State Name : {item.state1_name}</Text>
          <Text style={styles.resultData}>Distance : {item.distance1}</Text>
        </View>
          <View style={styles.fetchedData}>
          <Text style={styles.resultData}>Station 2 : {item.station2_name}</Text>
          <Text style={styles.resultData}>Station Code : {item.station2_code}</Text>
          <Text style={styles.resultData}>State Name : {item.state2_name}</Text>
          <Text style={styles.resultData}>Distance : {item.distance2}</Text>
          </View>
          <View style={styles.fetchedData}>
          <Text style={styles.resultData}>Station 3 : {item.station3_name}</Text>
          <Text style={styles.resultData}>Station Code : {item.station3_code}</Text>
          <Text style={styles.resultData}>State Name : {item.state3_name}</Text>
          <Text style={styles.resultData}>Distance : {item.distance3}</Text>
          </View>
        <View style={styles.fetchedData}>
        <Text style={styles.resultData}>Station 4 : {item.station4_name}</Text>
          <Text style={styles.resultData}>Station Code : {item.station4_code}</Text>
          <Text style={styles.resultData}>State Name : {item.state4_name}</Text>
          <Text style={styles.resultData}>Distance : {item.distance4}</Text>
        </View>
        </View>
      );
    } else {
      return null;
    }
  };
  

  return (
    <ScrollView>
    <ImageBackground source={ServiceBg4} style={styles.backgroundImage}>
      {show ==1 ?<>
        <View style={styles.serachContainer}>
          <TextInput style={styles.SearchInput} placeholder='Train Number' value={code} 
              onChangeText={(e)=>{setCode(e)}}/>
          <View style={styles.btnView}>
              <Button title='Search' color="green" onPress={searchData}/>
          </View>
      </View> 
        <Text style={styles.Results}>Train Schedule</Text>
      <FlatList
  data={data}
  keyExtractor={(item) => (Math.random().toString())}
  renderItem={renderItems} />
      </>:
      <>
      <View style={styles.btnViewSingle}>
          <Button title='Go Back' color="purple" onPress={hideData}/>
      </View>
      <Text style={styles.Results}>Trains Schedule</Text>
      <FlatList
  data={singleData}
  keyExtractor={(item) => (Math.random().toString())}
  renderItem={renderSingleItem} />
      </>}
      
      </ImageBackground>
    </ScrollView>
  );
};

export default Service3;

const styles=StyleSheet.create({
  textColor:{
    color:"black",
    backgroundColor:"#dcdde1"
  },dummyData:{
    textAlign:'center',
    marginTop:20,
    fontSize:20
  },
  fetchedData:{
    marginBottom:20,
    marginLeft:70
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: "center",
    width:"100%"
  },     
  serachContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    marginTop:60
  },
  SearchInput:{
    textAlign:"center",
    padding:8,
    width:250,
    textAlign:'center',
    backgroundColor:"white",
    color:"black",elevation:15,
    borderRadius:10,
    marginTop:25
  },
  border:{
    borderWidth:2,
    borderColor:"red",
    marginBottom:3
  },
  btnView:{
    marginRight:10,
    marginLeft:-20,
    marginTop:25
  },
  btnViewSingle:{
    marginRight:10,
    marginLeft:100,
    marginTop:100,
    marginBottom:30,
    width:200
  },
  Results:{
    marginTop:20,
    textAlign:'center',
    fontSize:20,
    fontWeight:'700',
    borderBottomWidth:2,
    borderBottomColor:"white",
    paddingBottom:10,
    color:"white",
    fontWeight:'800',
    marginLeft:90,
    marginRight:90,
    marginBottom:30
  },
  dataContainer:{
    borderWidth:1,
    margin:10,
    borderColor:"white",
  },
  singleDataContainer: {
    paddingLeft:60,
    borderWidth: 2,
    paddingTop:20,
    margin: 10,
    borderColor: 'purple',
    elevation: 5,
    marginLeft:10,
    marginBottom:220,
    marginTop:70
  },
  resultData:{
    textAlign:'justify',
    marginBottom:10,
    fontSize:15,
    color:"white",
    fontWeight:'900'
  },
  resultSingleData:{
    textAlign:'justify',
    marginBottom:20,
    fontSize:20,
    color:"white",
    fontWeight:'200'
  },
  dataContainer:{
    marginBottom:30,
    paddingLeft:15,
    paddingRight:15,
    paddingTop:20,
    borderWidth:1,
    paddingBottom:20,
  },
  dataConstainerSingle:{
    borderColor:"purple",
    marginBottom:30,
    paddingLeft:15,
    paddingRight:15,
    paddingTop:20,
    borderWidth:2,
    paddingBottom:20,
    marginLeft:20,
    marginRight:20
  }
})

