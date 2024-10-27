import { Button, Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Wellcome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('../Image/logo.jpg')} style={styles.logo} />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 30 }}>
        <Text style={styles.subtitle}>
          Unveiling a World
        </Text>
        <Text style={styles.description}>
          <Text style={styles.descriptionHighlight}>Toys & Accessories & Food</Text>
        </Text>
        <Text style={styles.subtitle}>
          For Your Pet
        </Text>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.features}>
          Browse the latest styles from top brands
        </Text>
        <Text style={styles.features}>Get personalized recommendations</Text>
        <Text style={styles.features}>Enjoy fast, free shipping</Text>
      </View>
      <TouchableOpacity style={styles.ButtonBackground} onPress={()=>{navigation.navigate("TrangChu")}}>
        <Text style={styles.ButtonText}>
          Let's Get Started
        </Text>
      </TouchableOpacity> 
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate("DangNhap")}}>
          <Text style={{ color: '#4CD964' }}> SIGN IN</Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  )
}

export default Wellcome

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  logo: {
    width: 433,
    height: 446,
  },
  subtitle: {
    fontSize: 18,
    color: 'black'

  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    margin: 18,
  },
  descriptionHighlight: {
    color: '#4CD964',
  },
  features: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
    color: '#808080'
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: 200,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signIn: {
    color: '#2196F3',
  },
  ButtonBackground: {
    backgroundColor: '#6394B7',
    height: 40,
    width: 200,
    borderRadius: '1000',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20

  },
  ButtonText: {
    textAlign: 'center',
    color: '#FFFFFF',

  }
});