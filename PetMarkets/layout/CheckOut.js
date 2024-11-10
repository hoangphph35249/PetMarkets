import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { URL } from './TrangChu';

const CheckOut = ({ navigation, route }) => {

  const { total } = route.params;

  const [user, setuser] = useState([])
  const [data, setdata] = useState([])

  const [tenData, settenData] = useState([])


  

useEffect(() => {
  geTenData()
  retrieveData()

}, [])

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
    await fetch(URL + 'Cart')
      .then(res => res.json())
      .then(data => {
        setdata(data)
      }).catch(errr => {
        console.log(errr)

      })

  }


  const geTenData = async () => {
    await fetch(URL + 'users/'+user.id)
      .then(res => res.json())
      .then(data => {
        settenData(data)
      }).catch(errr => {
        console.log(errr)
  
      })
  
  }
 


  const handleDeleteAll = () => {
    
    fetch(URL+'Cart', {
      method: 'DELETE'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete data');
      }
      return response.json();
    })
    .then(data => {
      console.log('Data deleted successfully:', data);
      // Cập nhật trạng thái hoặc thực hiện các hành động khác sau khi xóa thành công
      setdata(data)
    })
    .catch(error => {
      console.error('Error deleting data:', error);
    })
    .finally(() => {
      
    });
  };





  const handThanhtoan = async () => {
    for (const ds of data) {
      const newData = {
        name: ds.name,
        image: ds.image,
        price: ds.price,
        soLuong: ds.soLuong,
        tong: total
      }

      try {
        const res = await fetch(URL + 'oder', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newData)
        })
        if (res.ok) {
          console.log("Thêm thành công");
        } else {
          console.log("Thêm thất bại");
        }

      } catch (err) {
        console.log(err);
      }

    }

  }



  return (
    <SafeAreaView style={{ height: '100%', flexDirection: 'row' }}>

      <ScrollView style={styles.conner}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
          <TouchableOpacity onPress={() => {
            navigation.goBack()
          }}>
            <Image source={require('../Image/back.png')} />
          </TouchableOpacity>
          <Text style={styles.txt}>Check Out</Text>
          <Text style={styles.txt}></Text>
        </View>
        <View style={{ marginHorizontal: 20 }}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
            <Text style={{ fontSize: 19, color: 'gray' }}>Shipping Address</Text>
            <TouchableOpacity onPress={()=>{
              navigation.navigate('ShippingAddress')
            }}>
            <Image source={require('../Image/edit.png')} />
</TouchableOpacity>
          </View>



          <View style={{ borderRadius: 10, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 19, fontWeight: 'bold', margin: 15 }}>{user.name}  </Text>
            <View style={{ backgroundColor: '#E0E0E0', height: 2 }} />

            <Text style={{ fontSize: 15, color: 'gray', margin: 15 }}>
            {user.location} 
            </Text>
          </View>


          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, marginTop: 20 }}>
            <Text style={{ fontSize: 19, color: 'gray' }}>Payment</Text>
            <Image source={require('../Image/edit.png')} />

          </View>



          <View style={{ borderRadius: 10, backgroundColor: 'white', flexDirection: 'row' }}>

            <Image style={{ height: 70, width: 80 }} source={require('../Image/card.png')} />
            <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center' }}>*****************98</Text>

          </View>


          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, marginTop: 20 }}>
            <Text style={{ fontSize: 19, color: 'gray' }}>Delivery method</Text>
            <Image source={require('../Image/edit.png')} />

          </View>



          <View style={{ borderRadius: 10, backgroundColor: 'white', flexDirection: 'row', padding: 15 }}>

            <Image source={require('../Image/dhl.png')} />
            <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 20 }}>Fast (2-3days)</Text>

          </View>

        </View>





        <View style={{ height: 150 }} />


      </ScrollView>
      <View style={{ width: '92%', position: 'absolute', paddingBottom: 20, margin: 20, justifyContent: 'space-around', borderRadius: 10, alignSelf: 'flex-end' }}>
        {/* <View style={{ backgroundColor: '#E0E0E0', height: 1, marginVertical: 20 }} /> */}

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
          <Text style={{ fontSize: 19, fontWeight: 'bold', color: 'gray' }}>Total:</Text>
          <Text style={{ fontSize: 19, fontWeight: 'bold', color: 'black' }}>$ {total}</Text>
        </View>

        <TouchableOpacity onPress={() => {
          // handThanhtoandelete()
          // handleDeleteAll()
          handThanhtoan()
        }} style={{ width: '100%', height: 60, padding: 20, backgroundColor: '#6394B7', borderRadius: 10, alignItems: 'center' }}>
          <Text style={{ fontSize: 19, color: 'white', fontWeight: 'bold' }}>SUBMIT ORDER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default CheckOut

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