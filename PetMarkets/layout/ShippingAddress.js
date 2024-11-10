import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, CheckBox, Image, TextInput } from 'react-native';
import { URL } from './TrangChu';
import AsyncStorage from '@react-native-async-storage/async-storage';




const ShippingAddressScreen = ({ navigation }) => {

const [name, setname] = useState('')
const [diachi, setdiachi] = useState('')
const [sdt, setsdt] = useState('')

const [data, setdata] = useState([])




const getData = async () => {
  await fetch(URL + 'users/'+user.id)
    .then(res => res.json())
    .then(data => {
      setdata(data)
    }).catch(errr => {
      console.log(errr)

    })

}

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

  useEffect(()=>{
    retrieveData()
    getData()
  },[user])

  const btnLuuThongTin = async ()=>{
    const newData = {
      id: user.id,
      name: name,
      email: data.pass,
      phone: sdt,
      pass: data.pass,
      location: diachi

    }
    await fetch(URL + 'users/' + user.id, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData)
    })
      .then(res => {
        if (res.ok) {
          getData()
        }
      })
  }



  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() => {
          navigation.goBack()
        }}>
          <Image source={require('../Image/back.png')} />
        </TouchableOpacity>
        <Text style={{color:'black'}}>ShippingAddress</Text>
        <Text style={styles.txt}></Text>
      </View>

      <View style={styles.addressContainer}>
      <View style={styles.addressDetails}>
          <Text style={styles.addressName}>{data.name}</Text>
          <View style={{height:3, backgroundColor:'white' ,marginVertical: 5}}/>
          <Text style={styles.address}>{data.location}</Text>
          <Text style={styles.address}>{data.phone}</Text>
      </View>
    </View>

    <View style={{
    backgroundColor:'white',
    elevation: 2, 
    padding:20,marginTop:100}}>

      <Text style={{fontWeight:'bold',fontSize: 19,margin: 20,textAlign:'center'}}>Sửa thông tin</Text>

      <View>
      <Text style={{fontSize:15, color: '#909090',marginVertical:10}}>Tên:</Text>
        <TextInput
        onChangeText={(txt)=>{setname(txt)}}
          style={{color:'black'}}
        />
        <View style={{backgroundColor:'#E0E0E0', height:1,marginBottom:20}}/>
        <Text style={{fontSize:15, color: '#909090',marginVertical:10}}>Địa chỉ:</Text>
        <TextInput
        onChangeText={(txt)=>{setdiachi(txt)}}
          style={{color:'black'}}
        />
        <View style={{backgroundColor:'#E0E0E0', height:1,marginBottom:20}}/>

        <Text style={{fontSize:15, color: '#909090',marginVertical:10}}>SDT:</Text>
        <TextInput
        onChangeText={(txt)=>{setsdt(txt)}}
          style={{color:'black'}}
        />
        <View style={{backgroundColor:'#E0E0E0', height:1,marginBottom:20}}/>


        <TouchableOpacity onPress={()=>{
          btnLuuThongTin()
        }}>
          <Text style={{alignSelf:'center', backgroundColor:'#6394B7', color:'white',padding:20,borderRadius:50,fontSize:19,fontWeight:'bold'}}>Lưu Thông tin người nhận</Text>
        </TouchableOpacity>
        
      </View>
    </View>

    </SafeAreaView>
  );
};

export default ShippingAddressScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backText: {
    fontSize: 24,
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  listContent: {
    paddingBottom: 80,
  },
  addressContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginVertical: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 16,
  },
  addressDetails: {
    justifyContent: 'space-between',
  },
  addressInfo: {
    flex: 1,
  },
  addressName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    margin:10
  },
  address: {
    fontSize: 14,
    color: '#777',
    margin:10
  },
  editIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 50,
    height: 50,
    backgroundColor: '#007BFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
