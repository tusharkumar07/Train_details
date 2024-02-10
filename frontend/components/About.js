import React from 'react'
import {View,Text,StyleSheet,ScrollView} from 'react-native'

export default function About() {
  return (
    <>
    <ScrollView>
      <View style={Styles.container}>
        <View style={Styles.about}>
        <Text style={[Styles.missionsChild1]}>About Us</Text>
            <Text style={Styles.Child1}>TrackLink is a user-friendly and reliable mobile application designed to make your train travel experience seamless and enjoyable. Whether you're a frequent traveler or planning a one-time journey, our app has you covered with a range of features and services.</Text>
        </View>
        <View style={Styles.missions}>
            <Text style={Styles.missionsChild1}>Our Mission</Text>
            <Text style={Styles.Child1}>At TrackLink, our mission is to simplify train travel and enhance your overall experience. We strive to provide you with the tools and information you need to plan your journeys effortlessly and access up-to-date train station details.</Text>
        </View>
        <View style={Styles.features}>
            <Text style={[Styles.featuresChild1,Styles.missionsChild1]}>Key Features</Text>
            <View style={Styles.Child1}>
                <Text>I. Train Ticket Booking</Text>
                <Text>II. Easily search for available train routes, schedules, and prices.</Text>
                <Text>III. User-Friendly Design</Text>
                <Text>IV. Intuitive and easy-to-use interface.</Text>
                <Text>V. Train Ticket Booking</Text>
                <Text>VI. Easily search for available train routes, schedules, and prices.</Text>
            </View>
        </View>
        <View style={Styles.social}>
            <Text style={[Styles.socialChild1,Styles.missionsChild1]}>Stay Connected</Text>
            <View style={Styles.Child1}>
            <Text>Follow us on social media to stay updated with the latest news, promotions, and app updates:</Text>
            <Text>Facebook: [Your Facebook Page]</Text>
            <Text>Instagram: [Your Instagram Profile]</Text>
            <Text>Email: [Your Email]</Text>
            </View>
        </View>
      </View>   
    </ScrollView>
    </>
  )
}

const Styles=StyleSheet.create({
  container:{
    margin:10
  },
  missionsChild1:{
    elevation:5,
    width:130,
    padding:6,
   textAlign:'center',
    borderRadius:0,
    backgroundColor:"#e15f41",
    marginTop:15,
    marginBottom:15,
    marginLeft:110,
    color:"white",
    borderRadius:10
  },
  socialChild1:{
    paddingBottom:0,
    height:38,
    width:200,
  },
  Child1:{
    textAlign:"justify",
    marginLeft:10,marginRight:10,padding:10,backgroundColor:"#dcdde1",elevation:15,marginBottom:25,
    borderRadius:10
  }
})
