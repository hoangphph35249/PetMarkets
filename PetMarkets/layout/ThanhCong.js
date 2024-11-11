import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const SuccessScreen = ({ navigation }) => {
  const handleTrackOrders = () => {
    // Logic for tracking orders can go here
    console.log('Track Orders Pressed');
    navigation.navigate('Oder'); // Example navigation to track orders screen
  };

  const handleBackToHome = () => {
    navigation.navigate('TrangChu'); // Example navigation back to home screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.successText}>SUCCESS!</Text>
      <Image source={require('../Image/logo.jpg')} style={styles.logo} />
      <Text style={styles.message}>
        Your order will be delivered soon. Thank you for choosing our app!
      </Text>
      <TouchableOpacity style={styles.trackButton} onPress={handleTrackOrders}>
        <Text style={styles.trackButtonText}>Track your orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={handleBackToHome}>
        <Text style={styles.backButtonText}>BACK TO HOME</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  successText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 40,
    marginBottom: 30,
  },
  trackButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginBottom: 20,
  },
  trackButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backButton: {
    borderColor: '#000',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  backButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
