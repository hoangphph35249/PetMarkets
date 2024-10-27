import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { URL } from './TrangChu';

const Detail = ({ navigation, route }) => {

  const [data, setdata] = useState([])
  
  const [haha, sethaha] = useState()
  const { item } = route.params;
  
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
    sethaha(item.favorites)
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
            <TouchableOpacity>
              <Text style={{ backgroundColor: '#E0E0E0', paddingHorizontal: 7, fontSize: 19, borderRadius: 7 }}>+</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 19, fontWeight: 'bold' }}>01</Text>
            <TouchableOpacity>
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
          <TouchableOpacity style={{ width: '60%', height: 60, padding: 20, backgroundColor: '#6394B7', borderRadius: 50, alignItems: 'center' }}>
            <Text style={{ fontSize: 19, color: 'white', fontWeight: 'bold' }}>Add To Cart</Text>
          </TouchableOpacity>

          {haha ?
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