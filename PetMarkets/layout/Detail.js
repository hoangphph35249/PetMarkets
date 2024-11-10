import { Alert, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { URL } from './TrangChu';

const Detail = ({ navigation, route }) => {

  const [data, setdata] = useState([])
  const [item, setitem] = useState([])
  const [haha, sethaha] = useState()

  const [soLuong, setsoLuong] = useState(0)
  
  if(soLuong<0){
    setsoLuong(0)
  }

  const themGioHang = async()=>{

    const newCart ={

      name: item.name,
      price: item.price,
      image: item.image,
      soLuong: soLuong
    }
    try{
     const res= await fetch(URL+`Cart`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(newCart)
      })
      // if(res.ok){
      //   console.log("Thêm thành công");
      // }else{
      //     console.log("Thêm thất bại");
      // }

    }catch(err){
      console.log(err);
    }
  }
  
  const getData = async () => {
    await fetch(URL + 'animals')
      .then(res => res.json())
      .then(data => {
        setdata(data)
      }).catch(errr => {
        console.log(errr)

      })

  }

  useEffect(() => {
    getData()
    const { item } = route.params;
    setitem(item)
  }, [])


  const handUPdate = async (id, ten, brand, price, description, anh, loai, age, favorites) => {
    const newData = {
      id: id,
      name: ten,
      breed: brand,
      age: age,
      price: price,
      description: description,
      image: anh,
      favorites: favorites,
      loai: loai
    }
    await fetch(URL + 'animals/' + id, {
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
    <SafeAreaView style={{ height: '100%', flexDirection: 'row' }}>

      <ScrollView style={styles.conner}>
        <View style={{ flexDirection: 'row', margin: 20 }}>
          <TouchableOpacity onPress={() => {
            navigation.goBack()
          }}>
            <Image source={require('../Image/back.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image style={{ width: 370, height: 370, margin: 20, borderRadius: 20 }} source={{ uri: `${item.image}` }} />
        </View>
        <Text style={{ fontSize: 19, margin: 20 }}>{item.name}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
          <Text style={{ fontSize: 29, fontWeight: 'bold' }}>$ {item.price}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, width: 100 }}>
            <TouchableOpacity onPress={()=>{
              setsoLuong(soLuong+1)
            }}>
              <Text style={{ backgroundColor: '#E0E0E0', paddingHorizontal: 7, fontSize: 19, borderRadius: 7 }}>+</Text>
            </TouchableOpacity >

            <Text style={{ fontSize: 19, fontWeight: 'bold' }}>{soLuong}</Text>
            <TouchableOpacity onPress={()=>{
              setsoLuong(soLuong-1)
            }}>
              <Text style={{ backgroundColor: '#E0E0E0', paddingHorizontal: 10, fontSize: 19, borderRadius: 7 }}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={{ color: 'gray', margin: 20, fontSize: 15 }}>{item.description}</Text>
        <View style={{ height: 150 }} />


      </ScrollView>
      <View style={{ width: '92%', position: 'absolute', padding: 20, margin: 20, justifyContent: 'space-around', borderRadius: 10, alignSelf: 'flex-end' }}>
        <View style={{ backgroundColor: '#E0E0E0', height: 1, marginVertical: 20 }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity 
          
            onPress={()=>{
              if(soLuong<1){
                Alert.alert("Số lượng lớn hơn 0")
              }else{
                
              themGioHang()
              
              Alert.alert("Đã thêm giỏ hàng")
              }

            }}


          style={{ width: '60%', height: 60, padding: 20, backgroundColor: '#6394B7', borderRadius: 50, alignItems: 'center' }}>
            <Text style={{ fontSize: 19, color: 'white', fontWeight: 'bold' }}>Add To Cart</Text>
          </TouchableOpacity>

          {item.favorites ?
            <TouchableOpacity style={{ padding: 18, backgroundColor: 'red', borderRadius: 10, alignSelf: 'center' }} onPress={() => {
              id = item.id
              ten = item.name
              brand = item.breed
              price = item.price
              description = item.description
              anh = item.image
              loai = item.loai
              age = item.age
              favorites = 0
              handUPdate(id, ten, brand, price, description, anh, loai, age, favorites)

            }}>
              <Image source={require('../Image/btn_3 1.png')} />
            </TouchableOpacity>

            :
            <TouchableOpacity style={{ padding: 18, backgroundColor: '#E0E0E0', borderRadius: 10, alignSelf: 'center' }}

              onPress={() => {
                id = item.id
                ten = item.name
                brand = item.breed
                price = item.price
                description = item.description
                anh = item.image
                loai = item.loai
                age = item.age
                favorites = 1
                handUPdate(id, ten, brand, price, description, anh, loai, age, favorites)

                // console.log(id,ten,brand,price,description,anh,loai,age,favorites);


              }}
            >
              <Image source={require('../Image/btn_3 1.png')} />
            </TouchableOpacity>
          }

        </View>
      </View>
    </SafeAreaView>
  )
}

export default Detail

const styles = StyleSheet.create({})