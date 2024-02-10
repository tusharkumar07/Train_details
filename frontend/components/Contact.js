import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Contact = () => {
  const address = "IIIT Una, Himachal Pradesh";
  const phoneNo="8219097490"
  const pinCode="177209"

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Us</Text>

      {/* Information container */}
      <View style={styles.infoContainer}>
        <Text style={{color:"white",fontSize:20,marginBottom:5}}>Email: tusharkumar0510.com</Text>
        <Text style={{color:"white",fontSize:20,marginBottom:5}}>Phone Number: {phoneNo}</Text>
        <Text style={{color:"white",fontSize:20,marginBottom:5}}>Address: {address}</Text>
        <Text style={{color:"white",fontSize:20,marginBottom:5}}>Pin Code: {pinCode}</Text>
      </View>

      {/* MapView container */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825, // Replace with your address coordinates
            longitude: -122.4324, // Replace with your address coordinates
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {/* Marker for the address */}
          <Marker
            coordinate={{ latitude: 31.4484, longitude: 76.3902 }}
 // Replace with your address coordinates
            title="Contact Address"
            description={address}
          />
        </MapView>
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:"white",
    position:'absolute',
    top:25
  },
  mapContainer: {
    height: 300,
    width: '100%',
    position:'absolute',
    bottom:2
  },
  map: {
    flex: 1,
  },
  infoContainer: {
    
    marginBottom: 20,
    color:"white",
    borderWidth:2,
    paddingLeft:8,
    paddingRight:4,
    paddingTop:20,
    paddingBottom:20,
    marginLeft:7,
    marginRight:7,
    borderColor:"purple",
    position:'absolute',
    top:100,
    borderRadius:10
  },
});

export default Contact;
