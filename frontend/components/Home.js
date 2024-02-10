import React from 'react';
import History from './History';
import About from './About';
import Contact from './Contact';
import TrackLink from './TrackLink';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          style: { backgroundColor: 'lightblue', paddingTop: 50 }, // Add extra height to the top tab bar
          labelStyle: { fontWeight: 'bold', fontSize: 11 },
        }}
      >
        <Tab.Screen
          name="TrackLink"
          component={TrackLink}
          options={{
            tabBarLabel: 'TrackLink',
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarLabel: 'About',
          }}
        />
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            tabBarLabel: 'Contact',
          }}
        />

        <Tab.Screen
          name="History"
          component={History}
          options={{
            tabBarLabel: 'Log out',
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Home;
