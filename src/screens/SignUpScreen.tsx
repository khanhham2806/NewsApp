import * as React from 'react';
import { Text, View, StyleSheet,ScrollView } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {useState} from 'react'
import SocialSignInButton from '../components/SocialSignInButton';

  
const SignUpScreen = ({navigation}:any) => {
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

  const handleOnPressSignin = ()=>{
    console.log('handleOnPressSignin');
  
  }
  const handleOnChangeEmail =()=>{
    console.log('handleOnChangeEmail');
    
  }
  const handleOnChangeRepeatPassword =()=>{
    console.log('handleOnChangeRepeatPassword');
    
  }

  const handleOnPressSignUp =()=>{
    console.log('handleOnPressSignUp');
    
  } 
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {/* header */}
        <View style={styles.header}>
            <Text style={{fontSize: 25,color:'#0190f3',fontWeight: 'bold'}}>Create an account</Text>
        </View>

        {/* Body */}
        <View style={styles.body}>
            <View style={{marginVertical:5}}   >
            <Text style={styles.inputField}>Username</Text>
            <CustomInput iconName='user' placeholder='Type your username' onChangeText={handleOnChangeUsername}/>
            </View>
            <View style={{marginVertical:5}}>
            <Text style={styles.inputField}>Email</Text>
            <CustomInput iconName='mail' placeholder='Type your email' onChangeText={handleOnChangeEmail}/>
            </View>
            <View style={{marginVertical:5}}>
            <Text style={styles.inputField}>Password</Text>
            <CustomInput secureTextEntry={true}  iconName='lock' placeholder='Type your password' onChangeText={handleOnChangePassword}/>
            </View>
            <View style={{marginVertical:5}}>
            <Text style={styles.inputField}>Repeat Password</Text>
            <CustomInput secureTextEntry={true}  iconName='lock' placeholder='Repeat your password' onChangeText={handleOnChangeRepeatPassword}/>
            </View>
            
            <CustomButton text='Sign Up'onPress={handleOnPressSignUp}/>

            <View>
                <Text style={{fontSize:15, textAlign:'center',marginVertical:30}}>Or</Text>
            </View>
        </View>

        {/* footer */}
        <View style={styles.footer}>
            <CustomButton text="Have an acount? Sign In"  onPress={()=>navigation.navigate('SignInScreen')}></CustomButton>
            <SocialSignInButton/>

        </View>

    </ScrollView>
  );
};

export default SignUpScreen;

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
