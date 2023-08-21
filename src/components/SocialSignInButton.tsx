import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

const SocialSignInButton = () => {
    const handleOnPressGoogle = ()=>{
        console.log('handleOnPressGoogle');
      }
    const handleOnPressFacebook = ()=>{
        console.log('handleOnPressFacebook');
      }
      const handleOnPressApple = ()=>{
        console.log('handleOnPressApple');
      }
      
  return (
    <>
    <CustomButton text='Sign in with Google' bgColor='#FAE9EA'txtColor='#DD4D44' onPress={handleOnPressGoogle}></CustomButton>
    <CustomButton text='Sign in with Facebook' bgColor='#e7eaf4'txtColor='#4765a9' onPress={handleOnPressFacebook}></CustomButton>
    <CustomButton text='Sign in with Apple'bgColor='#e3e3e3'txtColor='#363636' onPress={handleOnPressApple}></CustomButton>
    </>
  );
};

export default SocialSignInButton;

