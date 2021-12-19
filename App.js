import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.coinContainer}>
      <Image
      source={{uri:"https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579"}}
      style={{height:30,width:30,marginRight:10,alignSelf:'center'}}/>
      <View>

      <Text 
      style={styles.title}>Bitcoin</Text>
      <View style={{flexDirection:'row'}}>

      <Text style={styles.text}>1</Text>
      <Text style={styles.text}>BTC</Text>
      <AntDesign name="caretdown" size={12} color="white"  style={{alignSelf:"center",marginRight:5}}/>
      <Text style={styles.text}>0.63%</Text>
      </View>
      </View>
      <View style={{marginLeft:'auto'}}>
      <Text style={styles.text}>52265.08</Text>
      <Text style={styles.text}>Mcap 1.076 T</Text>

      </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
 paddingTop:50,

  },
  coinContainer:{
    flexDirection:'row',
    borderBottomWidth:StyleSheet.hairlineWidth,
    borderBottomColor:'#282828',
    padding:15
    

  },
  text:{
color:'white',
marginRight:5
  },
  title:{
    color:'white',
    fontSize:16,
    fontWeight:'bold',
    marginBottom:5
  }
});
