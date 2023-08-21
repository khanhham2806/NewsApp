import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {useContext,useState} from 'react'
import themeContext from '../theme/themeContext';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import SocialSignInButton from '../components/SocialSignInButton';
import axios from 'axios';


const SignInScreen = ({navigation}:any) => {
  const theme:any = useContext(themeContext)
  const [mode, setMode] = useState(false)
const [username,setUsername] = useState('');
  const handleOnChangeUsername = (username:string)=>{
    if(!username.startsWith(' ')){
      setUsername(username);
    }
  }
const [password,setPassword] = useState('');
  const handleOnChangePassword = (password:string)=>{
    if(!password.startsWith(' ')){
      setPassword(password);
    }
  }

const handleOnPressSignIn = ()=>{
  console.log('handleOnPressSignIn');
  
}


const handleOnPressForgotPassword =() =>{
  console.log('handleOnPressForgotPassword');
  
}

  
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

      {/* header */}
      <View style={styles.header}>
        <Text style={{fontSize: 25,color:'#0190f3',fontWeight: 'bold'}}>Sign In</Text>
      </View>

      {/* Body */}
      <View style={styles.body}>
        <View style={{marginVertical:5}}>
          <Text style={styles.inputField}>Username</Text>
          <CustomInput iconName='user' placeholder='Type your username' onChangeText={handleOnChangeUsername}/>
        </View>
        <View style={{marginVertical:5}}>
          <Text style={styles.inputField}>Password</Text>
          <CustomInput secureTextEntry={true}  iconName='lock' placeholder='Type your password' onChangeText={handleOnChangePassword}/>
        </View>
        <View style={{marginVertical:5}}>
          <TouchableOpacity  onPress={handleOnPressForgotPassword}>
              <Text style={{fontSize:12, textAlign:'right', marginRight:10}}>Forgot Password?</Text>
          </TouchableOpacity>
         </View>
        <CustomButton text='Sign In'onPress={handleOnPressSignIn}/>

        <View>
            <Text style={{fontSize:15, textAlign:'center',marginVertical:30}}>Or</Text>
        </View>
      </View>

    {/* footer */}
      <View style={styles.footer}>
        <SocialSignInButton/>
        <CustomButton text="Don't have an acount? Create one"  onPress={() => navigation.navigate('SignUpScreen')}></CustomButton>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    margin:20
  },
  header:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  body:{flex: 5,
    marginTop: 10

  },
  footer:{
    flex:4
  },
  inputField:{
    fontSize:12,
    color: '#0190f3'
  }

  
});
