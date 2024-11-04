import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { URL } from './TrangChu';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ManHinhDangNhap = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [matKhau, setMatKhau] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  
  const [getpass, setpass] = useState('')
  const [getemail, setemail] = useState('');
  const [getErrStr, setErrStr] = useState('');

  const btnDangNhap=()=>{
    if (getemail == '') {
        setErrStr('Email không được bỏ trống!');
        setModalVisible(true);
        return;
    }
    if (getpass == '') {
        setErrStr('Password không được bỏ trống!');
        setModalVisible(true);
        return;
    }
    // lấy dữ liệu về
    let url = `${URL}users?email=` + getemail;

    fetch(url)
        .then((res) => { return res.json() })
        .then(async (res_login) => {
            if (res_login.length != 1) {
                setErrStr('Email không chính xác!')
                setModalVisible(true);
                return;
            } else {
                let obj = res_login[0];
                if (obj.pass != getpass) {
                    setErrStr('Password không chính xác!');
                    setModalVisible(true);
                    return;
                } else {
                    try {
                        await AsyncStorage.setItem('LoginInfo', JSON.stringify(obj));
                        navigation.navigate('TrangChu')
                        setErrStr('')
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
        })
}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../Image/logo.jpg')} style={styles.logo} />
      </View>


      <View style={styles.inputContainer}>
        <Text style={{fontSize:17, color: '#909090',marginVertical:10}}>Email</Text>
        <TextInput
        onChangeText={(txt)=>{setemail(txt)}}
          style={styles.input}
        />
        <View style={{backgroundColor:'#E0E0E0', height:1,marginBottom:20}}/>
        <Text style={{fontSize:17, color: '#909090',marginVertical:10}}>Password</Text>
        <TextInput
        onChangeText={(txt)=>setpass(txt)}
          style={styles.input}
        />
        <View style={{backgroundColor:'#E0E0E0', height:1,marginBottom:20}}/>

        {/* Hiển thị thông báo lỗi */}
        <Text style={styles.errorMessage}>{getErrStr}</Text>

        {/* Hiển thị thông báo thành công */}
        {successMessage ? <Text style={styles.successMessage}>{successMessage}</Text> : null}

<TouchableOpacity>
        <Text style={styles.forgotPassword}>Bạn quên mật khẩu?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          // navigation.navigate('TrangChu')
          btnDangNhap()
        }} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Đăng Nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('DangKy')
        }} style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Đăng Ký</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ManHinhDangNhap;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height:'100%'
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    margin:50
  },
  inputContainer: {
    width: '90%',
    backgroundColor:'white',
    elevation: 2, 
    padding:20 
  },
  input: {
    color:'#E0E0E0',
  },
  forgotPassword: {
    alignSelf: 'center',
    margin: 10,
    color: 'black',
    fontSize:19
  },
  loginButton: {
    backgroundColor: '#6394B7',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin:25
  },
  loginButtonText: {
    color: 'white',
    fontSize: 19,
    padding:15
  },
  registerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  registerButtonText: {
    color: 'black',
    fontSize: 19,
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
});
