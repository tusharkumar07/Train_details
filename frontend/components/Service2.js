import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TextInput,ScrollView,ImageBackground } from 'react-native';
// import ServiceBg2 from "../images/Services2BgImg.jpg"
import ServiceBg from "../images/Services1BgImg.jpg"
import axios from "axios";
import DateTimePicker from '@react-native-community/datetimepicker';


const Service2 = () => {
  const [loc1,setLoc1]=useState();
  const [loc2,setLoc2]=useState();
  const [date,setDate]=useState();
  const [data, setData] = useState([]);
  const [show, setShow]= useState(1)
  const [singleData,setSingleData] =useState();
  const [showDate,setShowDate]=useState(false);
 

  const showData=()=>{
    setShow(false);
    console.log("button clicked");
  }

  const hideData=()=>{
    setShow(1);
  }

  useEffect(() => {

    const fetchTrainData = async () => {
      axios.get("http://192.168.137.9:5000/trainBtStations").then((res)=>{
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
      axios.get("http://192.168.137.9:5000/trainBtStations").then((res)=>{
        // console.log(res.data);
        setSingleData(res.data);
    }).catch((err)=>{
        console.log(err);
    })
    }

    const formattedDate = (date) => {
      const date1 = new Date(date);
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      console.log(date1);
      return date1.toLocaleDateString(undefined, options);
    };

  // Render each item in the FlatList
  const renderItems = ({ item }) => (
    <View style={styles.dataContainer}>
    <View style={styles.headerDetail}>
      <Text style={styles.resultData}>Train from : {item.train_from}</Text>
      <Text style={styles.resultData}>Train from staion code : {item.train_from_code}</Text>
      <Text style={styles.resultData}>Train to : {item.train_to}</Text>
      <Text style={styles.resultData}>Train to staion code : {item.train_to_code}</Text>
    </View>
    {/* Data starts here 1*/}
    <View style={styles.fetchedData}>
    <Text style={styles.resultData}>Train Number : 1</Text>
    <Text style={styles.resultData}>Station Name : {item.train1_name}</Text>
      <Text style={styles.resultData}>Station Code : {item.train1_num}</Text>
      <Text style={styles.resultData}>Train From : {item.train1_station1}</Text>
      <Text style={styles.resultData}>train to : {item.train1_station2}</Text>
    </View>
      {/* Data starts here 2*/}
    <View style={styles.fetchedData}>
    <Text style={styles.resultData}>Train Number : 2</Text>
    <Text style={styles.resultData}>Station Name : {item.train2_name}</Text>
      <Text style={styles.resultData}>Station Code : {item.train2_num}</Text>
      <Text style={styles.resultData}>Train From : {item.train2_station1}</Text>
      <Text style={styles.resultData}>train to : {item.train2_station2}</Text>
    </View>
      {/* Data starts here 3*/}
    <View style={styles.fetchedData}>
    <Text style={styles.resultData}>Train Number : 3</Text>
    <Text style={styles.resultData}>Station Name : {item.train3_name}</Text>
      <Text style={styles.resultData}>Station Code : {item.train3_num}</Text>
      <Text style={styles.resultData}>Train From : {item.train3_station1}</Text>
      <Text style={styles.resultData}>train to : {item.train3_station2}</Text>
    </View>
    {/* Data starts here 4*/}
    <View style={styles.fetchedData}>
    <Text style={styles.resultData}>Train Number : 4</Text>
    <Text style={styles.resultData}>Station Name : {item.train4_name}</Text>
      <Text style={styles.resultData}>Station Code : {item.train4_num}</Text>
      <Text style={styles.resultData}>Train From : {item.train4_station1}</Text>
      <Text style={styles.resultData}>train to : {item.train4_station2}</Text>
    </View>
    </View>
  );

  const renderSingleItem = ({ item }) => {
    if (loc1 === item.train_from_code || loc2===item.train_to_code) {
      return (
        <View style={styles.dataConstainerSingle}>
        <View style={{marginBottom:15,marginLeft:70}}>
          <Text style={styles.resultData}>Train from : {item.train_from}</Text>
          <Text style={styles.resultData}>Train from staion code : {item.train_from_code}</Text>
          <Text style={styles.resultData}>Train to : {item.train_to}</Text>
          <Text style={styles.resultData}>Train to staion code : {item.train_to_code}</Text>
        </View>
        {/* Data starts here 1*/}
        <View style={styles.fetchedData}>
        <Text style={styles.resultData}>Train Number : 1</Text>
        <Text style={styles.resultData}>Station Name : {item.train1_name}</Text>
          <Text style={styles.resultData}>Station Code : {item.train1_num}</Text>
          <Text style={styles.resultData}>Train From : {item.train1_station1}</Text>
          <Text style={styles.resultData}>train to : {item.train1_station2}</Text>
        </View>
          {/* Data starts here 2*/}
        <View style={styles.fetchedData}>
        <Text style={styles.resultData}>Train Number : 2</Text>
        <Text style={styles.resultData}>Station Name : {item.train2_name}</Text>
          <Text style={styles.resultData}>Station Code : {item.train2_num}</Text>
          <Text style={styles.resultData}>Train From : {item.train2_station1}</Text>
          <Text style={styles.resultData}>train to : {item.train2_station2}</Text>
        </View>
          {/* Data starts here 3*/}
        <View style={styles.fetchedData}>
        <Text style={styles.resultData}>Train Number : 3</Text>
        <Text style={styles.resultData}>Station Name : {item.train3_name}</Text>
          <Text style={styles.resultData}>Station Code : {item.train3_num}</Text>
          <Text style={styles.resultData}>Train From : {item.train3_station1}</Text>
          <Text style={styles.resultData}>train to : {item.train3_station2}</Text>
        </View>
        {/* Data starts here 4*/}
        <View style={styles.fetchedData}>
        <Text style={styles.resultData}>Train Number : 4</Text>
        <Text style={styles.resultData}>Station Name : {item.train4_name}</Text>
          <Text style={styles.resultData}>Station Code : {item.train4_num}</Text>
          <Text style={styles.resultData}>Train From : {item.train4_station1}</Text>
          <Text style={styles.resultData}>train to : {item.train4_station2}</Text>
        </View>
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <ScrollView>
    <View>
    <ImageBackground source={ServiceBg} style={styles.backgroundImage}>
    <View style={styles.serachContainer}>
    {show ==1 ?
    <>
    <View style={styles.textAndInput}>
      <Text style={styles.inputHead}>Enter Station Code 1</Text>
      <TextInput style={styles.SearchInput} placeholder='Enter station code 1' value={loc1} 
              onChangeText={(e)=>{setLoc1(e)}}/>
     </View>
   
     <View style={styles.textAndInput}>
      <Text style={styles.inputHead}>Enter Station Code 2:</Text>
      <TextInput style={styles.SearchInput} placeholder='Enter station code 2' value={loc2} 
              onChangeText={(e)=>{setLoc2(e)}}/>
     </View>
    
     <View style={styles.textAndInput}>
      <Text style={styles.inputHead}>Select Journey Date:</Text>
      
      <Text style={{color:"white",position:'absolute',top:180}}>Selected Date :{formattedDate(date)}</Text>
      {!showDate?
        <View style={{position:'absolute',top:20,left:160}}>
        <Button title='Date' color="green" onPress={()=>setShowDate(true)}/>
        
      </View>:
      <DateTimePicker value={new Date()} mode='date' display="spinner" onDateChange={(e)=>{
        setDate(e)
        console.log(e)
      }} onChange={(e)=>{
        setDate(e.nativeEvent.timestamp);
        console.log(e)
        setShowDate(false)
      }} />
      }  
     </View>
        
      <View style={styles.btnView}>
            <Button title='Search' color="purple" onPress={searchData}/>
      </View>
      <Text style={styles.Results}>Train Between Station</Text>
      <FlatList
  data={data}
  keyExtractor={(item) => (Math.random().toString())}
  renderItem={renderItems} />
    </>
    :
    <>
      <View style={styles.btnViewSingle}>
          <Button title='Go Back' color="purple" onPress={hideData}/>
      </View>
      <Text style={styles.Results}>Trains Between Stations</Text>
      <FlatList
  data={singleData}
  keyExtractor={(item) => (Math.random().toString())}
  renderItem={renderSingleItem} />
      </>
    }
     
      </View> 
      </ImageBackground>
    </View>
    </ScrollView>
  );
};

export default Service2;

const styles=StyleSheet.create({
  textColor:{
    color:"black",
    backgroundColor:"#dcdde1"
  },dummyData:{
    textAlign:'center',
    marginTop:20,
    fontSize:20
  },
  textAndInput:{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}
  ,
  inputHead:{
    color:"white",
    fontWeight:"700",
    fontSize:15,
    marginTop:25,
    marginRight:20
  }
  ,
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: "center",
    width:"100%"
  },
  headerDetail:{marginBottom:15,marginLeft:0,borderColor:"white",borderWidth:2,paddingLeft:20,paddingRight:20,paddingTop:20,paddingBottom:20},     
  serachContainer:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-around',
    marginTop:20
  },
  SearchInput:{
    textAlign:"center",
    padding:8,
    width:200,
    textAlign:'center',
    backgroundColor:"white",
    color:"black",elevation:15,
    borderRadius:10,
    marginTop:25
  }, 
  border:{
    borderWidth:2,
    borderColor:"white",
    marginBottom:3
  },
  btnView:{
    marginRight:10,
    marginLeft:0,
    marginTop:25,
    width:150,
    alignItems:'center'
  },
  Results:{
    marginTop:20,
    textAlign:'center',
    fontSize:20,
    fontWeight:'700',
    borderBottomWidth:1,
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
  },resultData:{
    textAlign:'justify',
    marginBottom:10,
    fontSize:15,
    color:"white",
    fontWeight:'900'
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
  }
})

