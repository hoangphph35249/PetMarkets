import { useEffect, useState } from 'react'
import { Alert, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { URL } from './TrangChu'


const Cart = ({navigation}) => {
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

    const handDelete = async (id) => {
       await fetch(URL + 'Cart/' + id,
             { method: 'DELETE' })
            .then(res => {
                if (res.ok) {
                    getData()
                    console.log(id);
                    
                }
            }).catch(err=>console.log(err)
            )

    }

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
                                handDelete(id)
                                
                            }}>

                                <Image source={require('../Image/Shape.png')} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontWeight: 'bold', marginTop: 10, fontSize: 15, color: 'black' }}>$ {item.price}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, width: 100 }}>
                            <TouchableOpacity>
                                <Text style={{ backgroundColor: '#E0E0E0', paddingHorizontal: 7, fontSize: 19, borderRadius: 7 }}>+</Text>
                            </TouchableOpacity>

                            <Text style={{ fontSize: 19, fontWeight: 'bold' }}>{item.soLuong}</Text>
                            <TouchableOpacity>
                                <Text style={{ backgroundColor: '#E0E0E0', paddingHorizontal: 10, fontSize: 19, borderRadius: 7 }}>-</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
                <View style={{ backgroundColor: '#E0E0E0', height: 1, margin: 20 }} />
            </View>
        )
    }
    return (
        <SafeAreaView style={{ height: '100%', flexDirection: 'row' }}>

            <ScrollView style={styles.conner}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
                    <TouchableOpacity onPress={()=>{
                        navigation.goBack()
                    }}>
                    <Image source={require('../Image/back.png')} />
                    </TouchableOpacity>
                    <Text style={styles.txt}>Cart</Text>
                    <Text style={styles.txt}></Text>
                </View>


                <FlatList
                    scrollEnabled={false}
                    keyExtractor={item => item.id}
                    data={data}
                    renderItem={renderItem}
                />

                <View style={{height:150}}/>


            </ScrollView>
            <View style={{ width: '92%', position: 'absolute', padding: 20, margin: 20, justifyContent: 'space-around', borderRadius: 10, alignSelf: 'flex-end' }}>
                <View style={{ backgroundColor: '#E0E0E0', height: 1, marginVertical: 20 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: 'gray' }}>Total:</Text>
                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: 'gray' }}>$ 5000</Text>
                </View>

                <TouchableOpacity style={{ width: '100%', height: 60, padding: 20, backgroundColor: '#6394B7', borderRadius: 10, alignItems: 'center' }}>
                    <Text style={{ fontSize: 19, color: 'white', fontWeight: 'bold' }}>Check Out</Text>
                </TouchableOpacity>
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