import axios from 'axios';
import * as React from 'react';
import { Text, View, StyleSheet, ScrollView,Switch,TouchableOpacity } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import {useContext,useState} from 'react'
import themeContext from '../theme/themeContext';
const SettingsScreen = ({navigation}:any) => {
  const theme:any = useContext(themeContext)
  const [mode, setMode] = useState(false)
  return (
    <ScrollView style= {{backgroundColor: theme.background}}>
      <View style={[styles.view,{flexDirection:'row',justifyContent:'space-between'}]}>
        <Text style={{color: theme.color}}>Chế độ tối</Text>
        <Switch value= {mode}
        onValueChange={(value)=>{
          setMode(value)
          EventRegister.emit('changeTheme',value)}}/>
      </View>
     
      <View style={styles.view}>
          <TouchableOpacity  onPress={() => navigation.navigate('SignInScreen')}>
              <Text>Login</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;


const styles =StyleSheet.create({
  view:{
    padding:10,
    borderBottomWidth:1,
    borderColor: '#ccc'
  },
})