import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { URL } from './TrangChu';
import { TouchableOpacity } from 'react-native';

const Seach = () => {
    const [txtSearch, settxtSearch] = useState('');
    const [result, setresult] = useState(false)
    const [ListSearch, setListSearch] = useState([]);
    const [ListPlant, setListPlant] = useState([]);
    const [ListPlanta, setListPlanta] = useState([]);
    const [listPhuKien, setlistPhuKien] = useState([])
  


    const getListSearch = async () => {
        let url = `${URL}search`;
        try {
          const res = await fetch(url);
          const data = await res.json();
          setListSearch(data);
        } catch (err) {
          console.log(err);
        }
      }
      const deleteSearch = async (id) => {
        try {
          const url = `${URL}search/${id}`;
          const res = await fetch(url, { method: "DELETE" });
          if (res.ok) getListSearch();
        } catch (err) {
          console.log(err);
        }
      }
    
      const addSearch = async () => {
        if (txtSearch == "") {
          return;
        }
        const listSearch = Array.from(new Set(ListSearch.map(item => item.txt)));
        console.log(listSearch);
        for (const txt of listSearch) {
          if (txtSearch == txt) {
            setresult(true);
            return;
          }
        }
    
        const Txtsearch = {
          txt: txtSearch
        }
        let url = `${URL}/search`;
        await fetch(url, {
          method: "POST",
          body: JSON.stringify(Txtsearch)
        })
          .then(res => {
            if (res.ok) {
              setresult(true)
              getListSearch();
            }
          })
          .catch(err => console.log(err))
      }
    
      const getListPlant = async () => {
        if (txtSearch == "") {
          return;
        }
        let url = `${URL}animals?name=${txtSearch}`;
        try {
          const res = await fetch(url);
          const data = await res.json();
          setListPlant(data);
        } catch (err) {
          console.log(err);
        }
      }
    
      
    
    
      useEffect(() => {
        if (txtSearch == "") {
          setresult(false)
        }
        getListPlant();
        getListPlanta();
        getListSearch();
        deleteSearch();
      }, [txtSearch])
    
      const handleSetTxtSearch = (txt) => {
        settxtSearch(txt);
      }

  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity onPress={() => settxtSearch("")}>
        <Image style={{ width: 20, height: 20 }}
          source={require('../Image/reset.png')} />
      </TouchableOpacity>
      <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>TÌM KIẾM</Text>
      <View style={{ width: 50 }}></View>
    </View>

    <View style={styles.search}>

      <TextInput onChangeText={(txt) => handleSetTxtSearch(txt)} value={txtSearch}
        placeholder='Search' style={{ marginStart: 10, marginEnd: 10, flex: 1 }} />
      <TouchableOpacity onPress={() => { addSearch() }}>
        <Image source={require('../Image/search.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>

    <View style={styles.listSearch}>
      {!result || txtSearch == ""
        ?
        <View style={{ gap: 10 }}>
          <Text style={{ fontSize: 15, color: 'black' }}>Tìm kiếm gần đây</Text>
          <FlatList
            scrollEnabled={false}
            data={ListSearch}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
              <View style={styles.searchHistory}>
                <View style={{ flexDirection: 'row', gap: 20 }}>
                  <Image style={{ width: 24, height: 24 }} source={require('../Image/clock.png')} />
                  <Text style={{ color: 'black', marginTop: 2 }} onPress={() => { settxtSearch(item.txt) }}>{item.txt}</Text>
                </View>
                <TouchableOpacity onPress={() => { deleteSearch(item.id) }}>
                  <Image style={{ width: 24, height: 24 }} source={require('../Image/cancel.png')} />
                </TouchableOpacity>
              </View>} >
          </FlatList>
        </View>
        :
        <View>
          {ListPlant.length == 0 && ListPlanta.length == 0
            ?
            <Text style={{ fontSize: 15 }}>Không tìm thấy</Text>
            :

            <View style={{ gap: 12 }}>
              <Text style={{ fontSize: 15 }}>Kết quả tìm kiếm</Text>
              {
                ListPlant.length != 0
                  ?
                  <View style={{ gap: 10 }}>
                    <Text>Cây trồng</Text>
                    <FlatList
                      scrollEnabled={false}
                      data={ListPlant}
                      keyExtractor={item => item.id}
                      renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => { navigation.navigate('chiTietCt', { item: item }) }}
                          style={styles.itemPlant}>
                          <Image source={{ uri: item.image }}
                            style={styles.itemImage} />
                          <View style={{ gap: 5 }}>
                            <Text style={styles.price}>{item.name}</Text>
                            <Text style={{ fontSize: 16 }}>{item.price} $</Text>
                            
                          </View>
                        </TouchableOpacity>} >
                    </FlatList>
                  </View>
                  : <View></View>
              }

           
            </View>}
        </View>
      }
    </View>
  </View>
  )
}

export default Seach

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        gap: 16
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20
      },
      search: {
        width: '100%',
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: 'row',
        padding: 10
      },
      searchHistory: {
        padding: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      icon: {
        width: 30,
        height: 30,
        marginTop: 10
      },
      listSearch: {
        gap: 12
      },
      itemPlant: {
        padding: 20,
        marginHorizontal: 20,
        borderWidth: 1,
        borderRadius: 12,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20,
        gap: 30
      },
      itemImage: {
        width: 100,
        height: 100,
        borderRadius: 12
      },
      price: {
        fontSize: 17,
        fontWeight: '600',
      }
})