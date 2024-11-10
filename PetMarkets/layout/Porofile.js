import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { URL } from './TrangChu';

const Porofile = ({navigation,route}) => {
  const [data, setdata] = useState([])

  const [user, setuser] = useState([])


  const retrieveData = async () => {
    try {
      const UserData = await AsyncStorage.getItem('LoginInfo');
      if (UserData != null) {
        setuser(JSON.parse(UserData));
      }
    } catch (error) {
      console.log(error);
    }
  }
  const getData = async () => {
    await fetch(URL + 'oder')
      .then(res => res.json())
      .then(data => {
        setdata(data)
      }).catch(errr => {
        console.log(errr)

      })

  }

  useEffect(() => {
    getData()
    retrieveData()
  }, [])

  return (
    <SafeAreaView style={{ height: '100%', flexDirection: 'row' }}>

    <ScrollView style={styles.conner}>
      <Text style={{ fontSize: 19, fontWeight: 'bold', margin: 10, textAlign: 'center' }}>Profile</Text>


<View style={{flexDirection:'row', margin:20}}>
  <Image style={{width:50,height:50,marginRight:20}} source={require('../Image/image.png')}/>
  <View style={{}}>
  <Text style={{fontSize:21,fontWeight:'bold',}}>{user.name}</Text>
  <Text style={{fontSize:15,fontWeight:'bold',color: 'gray'}}>{user.email}</Text>
</View>
</View>

<TouchableOpacity onPress={() => {
        navigation.navigate('Oder')
      }} style={{flexDirection:'row', margin:10, backgroundColor:'white',padding:10,justifyContent:'space-between',borderRadius:10}}>
  <Text  style={{fontSize:15,alignSelf:'center',fontWeight:'bold'}}>My oder</Text>
  <Text style={{fontSize:19,alignSelf:'center'}}>{'>'}</Text>
</TouchableOpacity>

<TouchableOpacity style={{flexDirection:'row', margin:10, backgroundColor:'white',padding:10,justifyContent:'space-between',borderRadius:10}}>
  <Text  style={{fontSize:15,alignSelf:'center',fontWeight:'bold'}}>Shipping Addresses</Text>
  <Text style={{fontSize:19,alignSelf:'center'}}>{'>'}</Text>
</TouchableOpacity>

<TouchableOpacity style={{flexDirection:'row', margin:10, backgroundColor:'white',padding:10,justifyContent:'space-between',borderRadius:10}}>
  <Text  style={{fontSize:15,alignSelf:'center',fontWeight:'bold'}}>Payment Method</Text>
  <Text style={{fontSize:19,alignSelf:'center'}}>{'>'}</Text>
</TouchableOpacity>

<TouchableOpacity style={{flexDirection:'row', margin:10, backgroundColor:'white',padding:10,justifyContent:'space-between',borderRadius:10}}>
  <Text  style={{fontSize:15,alignSelf:'center',fontWeight:'bold'}}>Setting</Text>
  <Text style={{fontSize:19,alignSelf:'center'}}>{'>'}</Text>
</TouchableOpacity>

<TouchableOpacity
onPress={()=>{
  navigation.navigate('DangNhap')
}}
style={{flexDirection:'row', margin:10, backgroundColor:'white',padding:10,justifyContent:'space-between',borderRadius:10}}>
  <Text  style={{fontSize:15,alignSelf:'center',fontWeight:'bold'}}>Log Out</Text>
  <Text style={{fontSize:19,alignSelf:'center'}}>{'>'}</Text>
</TouchableOpacity>

      <View style={{ height: 70 }}></View>
    </ScrollView>
    <View style={{ width: '92%', position: 'absolute', height: 80, padding: 20, margin: 20, backgroundColor: '#6394B7', flexDirection: 'row', justifyContent: 'space-around', borderRadius: 50, alignItems: 'center', alignSelf: 'flex-end' }}>
      <TouchableOpacity onPress={() => {
        navigation.navigate('TrangChu')
      }}>
        <Image source={require('../Image/clarity_home-solid.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Cart')
      }}>
        <Image source={require('../Image/btn_2 1.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => {
        navigation.navigate('Favorites')
      }}>
        <Image source={require('../Image/btn_3 1.png')} />
        </TouchableOpacity>
      <TouchableOpacity
      style={{ alignItems: 'center' }} onPress={() => {
        navigation.navigate('Oder')
      }}>
        <Image source={require('../Image/btn_4 1.png')} />
      
        </TouchableOpacity>
      <TouchableOpacity
      style={{ alignItems: 'center' }} onPress={() => {
        navigation.navigate('Porofile')
      }}>
        <Image source={require('../Image/btn_5 1.png')} />
        <Text style={{ color: 'white', textAlign: 'center' }}>Profile</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  )
}

export default Porofile

const styles = StyleSheet.create({
  conner: {
    height: '100%',
    backgroundColor: '#E0E0E0'
  },
  txt: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold'
  },
  img: {
    width: '100%',
    height: 400
  },
  input: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: '95%',
    borderRadius: 8,
    color: 'black',
    paddingStart: 30,
    fontWeight: 'bold',
    height: 50,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 30
  },
  input1: {
    fontWeight: 'bold',
    paddingStart: -2,
    width: '90%',
    color: 'gray',
  },
  eyeImage: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: 'gray'
  },
})