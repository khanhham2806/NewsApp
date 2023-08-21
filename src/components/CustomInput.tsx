import * as React from 'react';
import { View, StyleSheet,TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const CustomInput = ({iconName,placeholder,value,onChangeText,secureTextEntry}:any) => {
  return (
    <View style={styles.container}>
            <View style={{justifyContent:'center'}}>
              {}
              <AntDesign name={iconName}  />
            </View>
        <TextInput secureTextEntry={secureTextEntry} placeholder={placeholder} style={{fontSize:10}} value={value} onChangeText={onChangeText}/>  
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',borderBottomColor:'#ccc',borderBottomWidth:1
  }
});
