import { useEffect, useState } from 'react'
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { URL } from './TrangChu'


const Cart = () => {
    const [data, setdata] = useState([])

    const getData = async () => {
        await fetch(URL + 'Cart')
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

    const renderItem = ({ item }) => {
        return (
            <View style={{ padding: 10, margin: 20, flexDirection: 'row' }}>
                <Image style={{ width: 100, height: 100, borderRadius: 20, marginRight: 10, }} source={{ uri: `${item.image}` }} />
                <View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row',width:270 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 19, color: 'gray' }}>{item.name}</Text>
                        <TouchableOpacity>
                        
                            <Image source={require('../Image/Shape.png')} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontWeight: 'bold', marginTop: 10, fontSize: 15, color: 'black' }}>$ {item.price}</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',margin:10,width:100}}>
                        <TouchableOpacity>
                    <Text style={{backgroundColor:'gray',paddingHorizontal:6,fontSize:19,borderRadius:7}}>+</Text>
                    </TouchableOpacity>
                    
                    <Text style={{fontSize:19,fontWeight:'bold'}}>{item.soLuong}</Text>
                    <TouchableOpacity>
                    <Text style={{backgroundColor:'gray',paddingHorizontal:9,fontSize:19,borderRadius:7}}>-</Text>
                   </TouchableOpacity> 
                   </View>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={{ height: '100%', flexDirection: 'row' }}>

            <ScrollView style={styles.conner}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
                    <Image source={require('../Image/back.png')} />
                    <Text style={styles.txt}>Cart</Text>
                    <Text style={styles.txt}></Text>
                </View>


                <FlatList
                    scrollEnabled={false}
                    keyExtractor={item => item.id}
                    data={data}
                    renderItem={renderItem}
                />



            </ScrollView>
            <View style={{ width: '92%', position: 'absolute', height: 80, padding: 20, margin: 20, backgroundColor: '#6394B7', flexDirection: 'row', justifyContent: 'space-around', borderRadius: 50, alignItems: 'center', alignSelf: 'flex-end' }}>
                <View>



                </View>
            </View>
        </SafeAreaView>
    )
}

export default Cart

const styles = StyleSheet.create({
    conner: {
        height: '100%'
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