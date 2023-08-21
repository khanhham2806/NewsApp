import * as React from 'react';
import {TextInput,ScrollView, Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import { Avatar} from "react-native-elements"
import axios from 'axios';
import {useContext,useState} from 'react'
import themeContext from '../theme/themeContext';
import { EventRegister } from 'react-native-event-listeners';


const HomeScreen = ({navigation}:any) => {
    const [data,setData] = useState([]);
    const [searchQuery,setSearchQuery] = useState('');
    const theme:any = useContext(themeContext)
    const [mode, setMode] = useState(false)


    const url:string = 'http://10.0.2.2:8080/newsname'
    React.useEffect(()=>{
        const  getData = async ()=>{
          const res =  await axios.get(url)
              let dataNews = res && res.data ? res.data.data : [];
              
              setData(dataNews);
        }   
      getData()
    },[]);

    const hanldeSearch = (query:string) =>{
      if(!query.startsWith(' ')){
        setSearchQuery(query);
      }
    }
   
    const results = data.filter((result:any)=>{
        return result && result.title.toLowerCase().includes(searchQuery.toLowerCase()) || result.name.toLowerCase().includes(searchQuery.toLowerCase())
    }
    )
    // console.log(results);
    
  return (
    <ScrollView showsVerticalScrollIndicator={false}  style={{backgroundColor: theme.background}}>
    <TextInput style={styles.searchBox}
        placeholder='Search'
        value={searchQuery}
        autoCapitalize='none'
        onChangeText={(query)=>hanldeSearch(query)}
        selectionColor={'blue'}
      />        
    <View style= { styles.container}>
        {
            results.map((item:any)=>{
                return(
                    <TouchableOpacity 
                        style= {[styles.card,{backgroundColor:theme.background,shadowColor: theme.color}]} key={item.id}
                        onPress={() => navigation.navigate('WebViewScreen',{url:item.url})}
                    >
                        <Avatar
                            size={100}
                            source={{uri: item.imgUrl}}
                        />
                        <Text style={{textAlign: "center", fontWeight: 'bold', marginTop: 10,color:theme.color}}>{item.title}</Text>
                    </TouchableOpacity>
                )
            })
        }
        
        
    </View>
</ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
      display: 'flex',
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
    },
  card:{
      width: '40%',
      alignItems:'center',
      padding:10,
      borderRadius:10,
      elevation: 5,
      marginBottom: 20
  },
  searchBox:{
    marginVertical:5,
    marginHorizontal:20,
    paddingHorizontal:20,
    paddingVertical: 10,
    borderColor: '#ccc',
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: '#fff',
  }
});

export default HomeScreen;

