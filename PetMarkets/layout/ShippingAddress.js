import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, CheckBox } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const addresses = [
  { id: '1', name: 'Le Van Liem', address: '25 rue Robert Latouche, Nice, 06200, Côte D’azur, France' },
  { id: '2', name: 'Nguyen Van Liem', address: '25 rue Robert Latouche, Nice, 06200, Côte D’azur, France' },
  { id: '3', name: 'Tran Thi Liem', address: '25 rue Robert Latouche, Nice, 06200, Côte D’azur, France' },
];

const ShippingAddressScreen = () => {
  const [selectedAddress, setSelectedAddress] = useState('1');

  const handleAddressSelection = (id) => {
    setSelectedAddress(id);
  };

  const renderItem = ({ item }) => (
    <View style={styles.addressContainer}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={selectedAddress === item.id}
          onValueChange={() => handleAddressSelection(item.id)}
        />
        <Text style={styles.checkboxText}>Use as the shipping address</Text>
      </View>
      <View style={styles.addressDetails}>
        <View style={styles.addressInfo}>
          <Text style={styles.addressName}>{item.name}</Text>
          <Text style={styles.address}>{item.address}</Text>
        </View>
        <TouchableOpacity style={styles.editIcon}>
          <MaterialIcons name="edit" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Go Back')}>
          <Text style={styles.backText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Shipping address</Text>
      </View>

      <FlatList
        data={addresses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ShippingAddressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: 15,
    marginBottom: 20,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addressInfo: {
    flex: 1,
  },
  addressName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  address: {
    fontSize: 14,
    color: '#777',
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
