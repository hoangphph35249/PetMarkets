import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, CheckBox } from 'react-native';

const PaymentMethodScreen = () => {
  const [defaultMethod, setDefaultMethod] = useState(false);

  const toggleDefaultMethod = () => {
    setDefaultMethod(!defaultMethod);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Go Back')}>
          <Text style={styles.backText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Payment method</Text>
      </View>

      <View style={styles.cardContainer}>
        {/* Placeholder for card image */}
        <View style={styles.cardImagePlaceholder} />
        <View style={styles.checkboxContainer}>
          <CheckBox value={defaultMethod} onValueChange={toggleDefaultMethod} />
          <Text style={styles.checkboxText}>Use as default payment method</Text>
        </View>
      </View>

      <View style={styles.selectedCard}>
        <View style={styles.cardInfo}>
          <Text style={styles.cardBrand}>VISA</Text>
          <Text style={styles.cardNumber}>**** **** **** 3947</Text>
          <View style={styles.cardDetails}>
            <Text style={styles.cardHolder}>Card Holder Name</Text>
            <Text style={styles.expiryDate}>Expiry Date</Text>
          </View>
          <View style={styles.cardDetails}>
            <Text style={styles.holderName}>Jennyfer Doe</Text>
            <Text style={styles.date}>05/23</Text>
          </View>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox value={defaultMethod} onValueChange={toggleDefaultMethod} />
          <Text style={styles.checkboxText}>Use as default payment method</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PaymentMethodScreen;

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
  cardContainer: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  cardImagePlaceholder: {
    height: 150,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    marginBottom: 15,
  },
  selectedCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  cardInfo: {
    marginBottom: 15,
  },
  cardBrand: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardNumber: {
    fontSize: 16,
    marginVertical: 10,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardHolder: {
    fontSize: 14,
  },
  expiryDate: {
    fontSize: 14,
  },
  holderName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 16,
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
