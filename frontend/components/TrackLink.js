import React from 'react';
import About from './About';
import Contact from './Contact';
import Service1 from './Service1';
import Service2 from './Service2';
import Service3 from './Service3';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function TrackLink() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'purple',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 14,
          fontWeight:"bold",
        }
      }}
    >
      <Tab.Screen
        name="Service 1"
        component={Service1}
        options={{
          tabBarStyle: { paddingBottom: 10 },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Service 2"
        component={Service2}
        options={{
          tabBarStyle: { paddingBottom: 10 },
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Service 3"
        component={Service3}
        options={{
          tabBarStyle: { paddingBottom: 10},
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}
