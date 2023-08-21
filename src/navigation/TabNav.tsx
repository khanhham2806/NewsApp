import React from "react";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen"; 

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator()
const TabNav = () => {
  return (
    <Tab.Navigator
    screenOptions={({route}) => ({
    tabBarIcon: ({focused}) => {
        let iconName!: string;
        let color!: string;
        if (route.name === 'Home') {
        iconName = focused ? 'home-sharp' : 'home-outline';
        color = focused ? '#0190f3' : 'gray';
        } else if (route.name === 'Settings') {
        iconName = focused ? 'settings-sharp' : 'settings-outline';
        color = focused ? '#0190f3' : 'gray';
        } 
        return <Ionicons name={iconName} size={20} color={color} />;
    },
    tabBarActiveTintColor: '#0190f3',
    tabBarInactiveTintColor: 'gray',
    headerTintColor: '#fff',
    headerStyle: {backgroundColor:'#0190f3'}
    })}>
            <Tab.Screen name='Home' component={HomeScreen}/>
            <Tab.Screen name='Settings' component={SettingsScreen}/>
        </Tab.Navigator>
  );
};

export default TabNav;
