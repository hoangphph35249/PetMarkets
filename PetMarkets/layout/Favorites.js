import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { URL } from './TrangChu'

const Favorites = ({navigation}) => {
  const [data, setdata] = useState([])
  const [thucAn, setthucAn] = useState([])
  const [phuKien, setphuKien] = useState([])


  const getData = async () => {
    await fetch(URL + 'animals?favorites=1')
      .then(res => res.json())
      .then(data => {
        setdata(data)
      }).catch(errr => {
        console.log(errr)

      })

  }

  const getThucAn = async () => {
    await fetch(URL + 'animals?favorites=1')
      .then(res => res.json())
      .then(data => {
        setthucAn(data)
      }).catch(errr => {
        console.log(errr)

      })

  }

  const handUPdate = async (id,ten,brand,price,description,anh,loai,age) => {
    const newData = {
        id:id,
        name: ten,
        breed: brand,
        age: age,
        price: price,
        description: description,
       image: anh,
        favorites: 0,
        loai: loai
    }
    await fetch(URL+'animals/'+id, {
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

  // const handUpdate = async ()=>{

  //     const newCart ={
  //       anhCrat: item.img,
  //       tenCrat: item.name,
  //       giaCrat: item.money,
  //       count : count,
  //       tongTien: TongTien
  //     }
  //     try{
  //      const res= await fetch(URL+`/cart`,{
  //         method:'POST',
  //         headers:{'Content-Type':'application/json'},
  //         body: JSON.stringify(newCart)
  //       })
  //       if(res.ok){
  //         console.log("Thêm thành công");
  //       }else{
  //           console.log("Thêm thất bại");
  //       }
  
  //     }catch(err){
  //       console.log(err);
  //     }
    
  // }


  useEffect(() => {
    getData()
    getThucAn()
  }, [])

  const renderItem = ({ item }) => {
    return (
      <View>
        <View style={{ padding: 10, marginTop: 0, flexDirection: 'row' }}>
          <Image style={{ width: 100, height: 100, borderRadius: 20, marginRight: 10, }} source={{ uri: `${item.image}` }} />
          <View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: 270 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 19, color: 'gray' }}>{item.name}</Text>
              <TouchableOpacity onPress={() => {
                id = item.id
                ten = item.name
                brand = item.breed
                price=item.price
                description=item.description
                anh= item.image
                loai=item.loai
                age=item.age
                handUPdate(id,ten,brand,price,description,anh,loai,age)
                
              }}>

                <Image source={require('../Image/Shape.png')} />
              </TouchableOpacity>
            </View>
            <Text style={{ fontWeight: 'bold', marginTop: 10, fontSize: 15, color: 'black' }}>$ {item.price}</Text>
          </View>

        </View>
        <View style={{ backgroundColor: '#E0E0E0', height: 1, margin: 20 }} />
      </View>
    )
  }
  return (
    <SafeAreaView style={{ height: '100%', flexDirection: 'row' }}>

      <ScrollView style={styles.conner}>
        <Text style={{ fontSize: 19, fontWeight: 'bold', margin: 10, textAlign: 'center' }}>Favorites</Text>

        <FlatList
          scrollEnabled={false}
          data={data}
          renderItem={renderItem}

        />

   

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
        <TouchableOpacity style={{alignItems:'center'}} onPress={() => {
          navigation.navigate('Favorites')
        }}>
          <Image source={require('../Image/btn_3 1.png')} />
          <Text style={{ color: 'white', textAlign: 'center' }}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Oder')
        }}>
          <Image source={require('../Image/btn_4 1.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Porofile')
        }}>
          <Image source={require('../Image/btn_5 1.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Favorites

const styles = StyleSheet.create({
  conner: {
    height: '100%'
  },
  txt: {
    fontSize: 17,
    color: 'black',
    marginLeft: 25,
    margin: 2,
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