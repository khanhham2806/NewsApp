import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNav from './src/navigation/TabNav';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import WebViewScreen from './src/screens/WebViewScreen';
import SplashScreen from 'react-native-splash-screen';

import { EventRegister } from 'react-native-event-listeners';
import themeContext from './src/theme/themeContext';
import theme from './src/theme/theme';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  const [mode,setMode]= React.useState(false)
  React.useEffect(()=>{
    SplashScreen.hide()
  },[])
  React.useEffect(()=>{
    const eventListener:any = EventRegister.addEventListener('changeTheme',(data)=>{
      setMode(data)
      // console.log(data);
      
    })
    return ()=>{
      EventRegister.removeAllListeners(eventListener)
    }
  },[mode])

  return (
    <themeContext.Provider value={mode === true ? theme.dark : theme.light}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Tab' screenOptions={{headerShown:false}}>
          <Stack.Screen name='Tab' component={TabNav}/>
          <Stack.Screen name='WebViewScreen' component={WebViewScreen} options={{headerTitle:'News App',headerShown:true,headerTintColor:'#fff', headerStyle:{
            backgroundColor: '#0190f3'
          }}}/>
          <Stack.Screen name='SignInScreen' component={SignInScreen} options={{headerTitle:'Sign In',headerShown:true,headerTintColor:'#fff', headerStyle:{
            backgroundColor: '#0190f3'
          }}}/>
          <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{headerTitle:'Sign Up',headerShown:true,headerTintColor:'#fff', headerStyle:{
            backgroundColor: '#0190f3'
          }}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
    
  );
};

export default App;
