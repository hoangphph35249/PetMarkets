import { ImageBackground, ScrollView, StyleSheet, Text, View, SafeAreaView, Image, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
export const URL = 'http://192.168.1.148:3000/'
import Swiper from 'react-native-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';
const TrangChu = ({navigation}) => {
  const [data, setdata] = useState([])
  const [thucAn, setthucAn] = useState([])
  const [phuKien, setphuKien] = useState([])
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

  // const [uesr, setuesr] = useState()

  // AsyncStorage.getItem('LoginInfo', (err, result) => {
    
  //   //  console.log(result);
  //    setuesr(JSON.parse(result))
     
    
  // });

  const getData = async () => {
    await fetch(URL + 'animals?loai=1')
      .then(res => res.json())
      .then(data => {
        setdata(data)
      }).catch(errr => {
        console.log(errr)

      })
  }

  const getPhuKien = async () => {
    await fetch(URL + 'animals?loai=2')
      .then(res => res.json())
      .then(data => {
        setphuKien(data)
      }).catch(errr => {
        console.log(errr)

      })

  }
  const getThucAn = async () => {
    await fetch(URL + 'animals?loai=3')
      .then(res => res.json())
      .then(data => {
        setthucAn(data)
      }).catch(errr => {
        console.log(errr)

      })

  }
  const images = [
    require('../Image/baner1.jpg'),
    require('../Image/baner3.jpg'),
    require('../Image/baner4.jpg'),
  ];

  useEffect(() => {
    getData()
    getPhuKien()
    getThucAn()
    retrieveData()
  }, [])

  const renderItem = ({ item }) => {
    return (
      <View>
        
        <View style={{ margin: 20 }}>
         <TouchableOpacity onPress={()=>{navigation.navigate('Detail',{item : item});
         }}> 
          <Image style={{ width: 186, height: 200, backgroundColor: '#CCCCCC', borderRadius: 10, padding: 20 }} source={{ uri: `${item.image}` }} />
           </TouchableOpacity>
           <Text style={{ color: 'black', fontSize: 19, marginTop: 10, fontWeight: 'bold' }}>$ {item.price}</Text>
          <Text style={{ fontSize: 19, color: 'black', fontWeight: 'bold' }}>{item.name}</Text>

        </View>
       
      </View>
    )
  }
  return (
    <SafeAreaView style={{ height: '100%', flexDirection: 'row' }}>

      <ScrollView style={styles.conner}>
        <View style={{ padding: 10, backgroundColor: '#6394B7', height: 170, borderBottomRightRadius: 70, borderBottomLeftRadius: 70, width: '100%' }} >
        <Text style={[styles.txt, { color: 'white', fontWeight: 'bold' }]}>WellCome</Text>
        <Text style={[styles.txt, { color: 'white', fontWeight: 'bold' }]}>{user.name}</Text>
     
          <View style={styles.input} >
            <Image source={require('../Image/Vector.png')} style={styles.eyeImage} />
            <TextInput style={styles.input1}
              placeholder='Search anything ....'
            // placeholderTextColor={'#828282'}
            // onChangeText={(txt=>setpass(txt))}
            />



          </View>
        </View>


        <View style={{ height: 250, margin: 20 }}>
          <Swiper style={styles.wrapper} showsButtons={true} autoplay={true} autoplayTimeout={2000}>
            {images.map((image, index) => (
              <View style={styles.slide} key={index}>
                <Image source={image} resizeMode="cover" style={{ height: "100%", width: '100%' }} />
              </View>
            ))}
          </Swiper>
        </View>



        <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: 30 }}>
          <TouchableOpacity>
            <Image source={require('../Image/Frame 64.png')} /></TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('../Image/Group 66.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../Image/Group 67.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../Image/Group 68.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 10 }}>
          <Text style={styles.txt}>animals</Text>
          <TouchableOpacity onPress={()=>{
            navigation.navigate('SeeAll',{loai: 1})
          }}>
          <Text style={[styles.txt, { color: '#46A2A3' }]}>See all</Text>
        </TouchableOpacity>
        </View>
        <FlatList 
        scrollEnabled={false}
          keyExtractor={item => item.id}
          numColumns={2}
          data={data.filter((item, index) => index < 4)}
          renderItem={renderItem}

        />

        <View style={{ backgroundColor: 'gray', height: 1, marginHorizontal: 30, marginTop: 20 }}>

        </View>

        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 10 }}>
          <Text style={styles.txt}>accessory</Text>
          <TouchableOpacity onPress={()=>{
            navigation.navigate('SeeAll',{loai: 3})
          }}>
          <Text style={[styles.txt, { color: '#46A2A3' }]}>See all</Text>
        </TouchableOpacity>
        </View>
        <FlatList scrollEnabled={false}
          keyExtractor={item => item.id}
          numColumns={2}
          data={thucAn.filter((item, index) => index < 4)}
          renderItem={renderItem}

        />


        <View style={{ backgroundColor: 'gray', height: 1, marginHorizontal: 30, marginTop: 20 }}>

        </View>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 10 }}>
          <Text style={styles.txt}>Animals Food</Text>
          <TouchableOpacity onPress={()=>{
            navigation.navigate('SeeAll',{loai: 2})
          }}>
          <Text style={[styles.txt, { color: '#46A2A3' }]}>See all</Text>
        </TouchableOpacity>
        </View>
        <FlatList scrollEnabled={false}
          keyExtractor={item => item.id}
          numColumns={2}
          data={phuKien.filter((item, index) => index < 4)}
          renderItem={renderItem}

        />
        <View style={{height:70}}></View>
      </ScrollView>
      <View style={{ width: '92%', position: 'absolute', height: 80, padding: 20, margin: 20, backgroundColor: '#6394B7', flexDirection: 'row', justifyContent: 'space-around', borderRadius: 50, alignItems: 'center', alignSelf: 'flex-end' }}>
        <View style={{alignItems:'center'}}>



          <Image source={require('../Image/clarity_home-solid.png')} />
          <Text style={{ color: 'white', textAlign: 'center' }}>Home</Text>
        </View>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Cart')
        }}>
          <Image source={require('../Image/btn_2 1.png')} />
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>{
          navigation.navigate('Favorites')
        }}>
          <Image source={require('../Image/btn_3 1.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Oder')
        }}>
          <Image source={require('../Image/btn_4 1.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Porofile')
        }}>
          <Image source={require('../Image/btn_5 1.png')} />
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default TrangChu

const styles = StyleSheet.create({
  conner: {
    height: '100%'
  },
  txt: {
    fontSize: 17,
    color: 'black',
    marginLeft: 25,
    margin: 0,
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