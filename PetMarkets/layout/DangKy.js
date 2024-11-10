import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { URL } from './TrangChu';

const ManHinhDangKy = ({ navigation }) => {
  const [getpass, setpass] = useState('')
  const [getemail, setemail] = useState('');
  const [getErrStr, setErrStr] = useState('');
  const [name, setname] = useState('')
  const [phone, setphone] = useState('')
  const [ConfirmPass, setConfirmPass] = useState('')

  const handleAddUser = () => {
    if (name.trim() == '') {
      setErrStr('Name không được bỏ trống!');
      return;
    }
    if (getemail.trim() == '') {
      setErrStr('Email không được bỏ trống!');
      return;
    }
    if (getpass.trim() == '') {
      setErrStr('Pass không được bỏ trống!');
      return;
    } if (ConfirmPass.trim() == '') {
      setErrStr('ConfirmPass không được bỏ trống!');
      return;
    } if (ConfirmPass.trim() != getpass.trim()) {
      setErrStr('ConfirmPass và Pass không khớp');
      return;
    }

    // Tạo một đối tượng chứa dữ liệu của user mới
    const newUser = {
      name: name,
      email: getemail,
      phone: "",
      pass: getpass,
      location: ""
    }
    // gọi API để thêm user mới vào JSON SERVER
    let url = `${URL}users`
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        if (res.ok) {
          navigation.navigate('DangNhap', {
            email: getemail
          })
          setErrStr('')
        } else {
          Alert.alert('Error', 'Đăng ký không thành công');
        }
      })

  }

  return (
    <SafeAreaView >
      <ScrollView contentContainerStyle={{ width: '100%', alignItems: 'center', backgroundColor: 'white', height: '100%' }}>
        <View style={styles.logoContainer}>
          <Image source={require('../Image/logo.jpg')} style={styles.logo} />
        </View>


        <View style={styles.inputContainer}>
          <Text style={{ fontSize: 17, color: '#909090', marginVertical: 10 }}>Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={(txt) => setname(txt)}
          />
          <View style={{ backgroundColor: '#E0E0E0', height: 1, marginBottom: 20 }} />
          <Text style={{ fontSize: 17, color: '#909090', marginVertical: 10 }}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={(txt) => setemail(txt)}
          />
          <View style={{ backgroundColor: '#E0E0E0', height: 1, marginBottom: 20 }} />


          <Text style={{ fontSize: 17, color: '#909090', marginVertical: 10 }}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={(txt) => setpass(txt)}
          />
          <View style={{ backgroundColor: '#E0E0E0', height: 1, marginBottom: 20 }} />


          <Text style={{ fontSize: 17, color: '#909090', marginVertical: 10 }}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={(txt) => setConfirmPass(txt)}
          />
          <View style={{ backgroundColor: '#E0E0E0', height: 1, marginBottom: 20 }} />

          <Text style={styles.errorMessage}>{getErrStr}</Text>

          <TouchableOpacity style={styles.loginButton}
            onPress={() => {
              handleAddUser()
            }}
          >
            <Text style={styles.loginButtonText}>Đăng Ký</Text>
          </TouchableOpacity>

          <View style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Bạn đã có tài khoản ?</Text>
            <TouchableOpacity onPress={() => {
              navigation.navigate('DangNhap')
            }}>
              <Text style={{ fontSize: 19, fontWeight: 'bold', color: 'black' }}>  Đăng Nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ManHinhDangKy;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    margin: 10
  },
  inputContainer: {
    width: '90%',
    backgroundColor: 'white',
    elevation: 2,
    padding: 20
  },
  input: {
    color: 'gray',
  },
  forgotPassword: {
    alignSelf: 'center',
    margin: 10,
    color: 'black',
    fontSize: 19
  },
  loginButton: {
    backgroundColor: '#6394B7',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 25
  },
  loginButtonText: {
    color: 'white',
    fontSize: 19,
    padding: 15
  },
  registerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    flexDirection: 'row'
  },
  registerButtonText: {
    color: 'black',
    fontSize: 17,
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  successMessage: {
    color: 'green',
    textAlign: 'center',
    marginBottom: 10,
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});
