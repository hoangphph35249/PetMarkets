import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { URL } from './TrangChu'
import { TouchableOpacity } from 'react-native';

const SeeAll = ({navigation,route}) => {
    const { loai } = route.params;
    const [data, setdata] = useState([])
  const getData = async () => {
    await fetch(URL + 'animals?loai='+loai)
      .then(res => res.json())
      .then(data => {
        setdata(data)
      }).catch(errr => {
        console.log(errr)

      })

  }


  useEffect(() => {
    getData()
  }, [])
    return (
        <ScrollView>

            <View style={{ flexDirection: 'row', margin: 20 ,justifyContent:'space-between'}}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }}>
                    <Image source={require('../Image/back.png')} />
                </TouchableOpacity>
                <Text>See All</Text>
                <View/>
            </View>

            <View style={{ flexDirection: 'row', gap: 30, marginHorizontal: 5 }}>

            </View>
            <FlatList
                numColumns={2}
                scrollEnabled={false}
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>

                    <View>

                        <View style={{ margin: 20 }}>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Detail', { item: item });
                            }}>
                                <Image style={{ width: 186, height: 200, backgroundColor: '#CCCCCC', borderRadius: 10, padding: 20 }} source={{ uri: `${item.image}` }} />
                            </TouchableOpacity>
                            <Text style={{ color: 'black', fontSize: 19, marginTop: 10, fontWeight: 'bold' }}>$ {item.price}</Text>
                            <Text style={{ fontSize: 19, color: 'black', fontWeight: 'bold' }}>{item.name}</Text>

                        </View>

                    </View>} >
            </FlatList>
        
        </ScrollView >
    )
}

export default SeeAll

const styles = StyleSheet.create({})