import React,{useEffect,useState} from 'react'
import {View,Text,StyleSheet,TextInput,Button, LogBox, FlatList} from 'react-native';
import axios from 'axios';


export default function Lab() {
  const[number,setNumber]=useState();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getApiData = async () => {
    const apiKey = 'ec5a7d0966msh5640af17450a22cp15689ajsn69814828ed59'; // Your API key
    const apiUrl = 'https://irctc1.p.rapidapi.com/api/v1/searchTrain';
  
    const options = {
      method: 'GET',
      url: apiUrl,
      params: { query: { number } },
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'irctc1.p.rapidapi.com',
      },
    };
  
    const baseUrl = options.url;
    const queryParams = new URLSearchParams(options.params);
  
    const completeUrl = `${baseUrl}?${queryParams.toString}`;
  
    console.log(completeUrl);
  
    try {
      const response = await axios.request({
        method: 'get',
        url: completeUrl,
        headers: options.headers,
      });
  
      setData(response.data);
      console.warn(response.data);
    } catch (err) {
      console.warn(`Error in API: ${err}`);
    }
  };
  

  return (
    <View>
       <View style={styles.search}>
          <TextInput style={styles.inputBox1} placeholder='Enter your train No'value={number}
              onChangeText={(e)=>{setNumber(e)} } />
          <View style={styles.btn2}>
            <Button title='Search' onPress={getApiData} color={"green"}/>
          </View>
       </View>
        
        {(data.length===0)?(<Text>No Data Found</Text>):
          (<FlatList data={data} renderItem={({item})=>{
              return(
                <View style={styles.container}>
                  <View style={styles.itemContainer} key={item.id}>
                    <Text>{item.train_name}</Text>
                    <Text>{item.train_number}</Text>
                  </View>
              </View>
              )
          }}/>)}
     

    </View>
  );
  
}

const styles=StyleSheet.create({
  mapData:{
    color:"black"
  },
  search:{
    display:'flex',
    flexDirection:'row'
  },
  container:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    marginVertical:10,
  },
  btn2:{
    width:100,
    padding:10,
    borderRadius:10,
    marginLeft:100,
    marginBottom:-10,
    position:'absolute',
    left:130,
    top:30,
    height:150
  },
  inputBox1: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    width: '50%',
    marginTop: 30,
    backgroundColor: "white",
    paddingLeft: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    marginLeft:30 
  },
  itemContainer:{
    borderWidth:2,
    borderColor:"black",
    padding:10,
    marginRight:10,
    marginTop:10
  }
})
