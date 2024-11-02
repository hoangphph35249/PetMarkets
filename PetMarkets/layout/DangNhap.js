import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';

const ManHinhDangNhap = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [matKhau, setMatKhau] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const xuLyDangNhap = async () => {
    setErrorMessage('');
    setSuccessMessage('');

    // Giả lập kiểm tra email và mật khẩu
    if (!email || !matKhau) {
      setErrorMessage("Vui lòng điền đầy đủ email và mật khẩu.");
      return;
    }

    if (email === 'user@example.com' && matKhau === 'password123') {
      setSuccessMessage("Đăng nhập thành công!");
      setTimeout(() => {
        navigation.navigate('Home'); // Điều hướng đến màn hình chính (Home) sau khi đăng nhập thành công
      }, 2000); // Chờ 2 giây để người dùng thấy thông báo thành công
    } else {
      setErrorMessage("Email hoặc mật khẩu không đúng.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../Image/logo.jpg')} style={styles.logo} />
      </View>


      <View style={styles.inputContainer}>
        <Text style={{fontSize:17, color: '#909090',marginVertical:10}}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <View style={{backgroundColor:'#E0E0E0', height:1,marginBottom:20}}/>
        <Text style={{fontSize:17, color: '#909090',marginVertical:10}}>Password</Text>
        <TextInput
          value={matKhau}
          onChangeText={setMatKhau}
          style={styles.input}
        />
        <View style={{backgroundColor:'#E0E0E0', height:1,marginBottom:20}}/>

        {/* Hiển thị thông báo lỗi */}
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

        {/* Hiển thị thông báo thành công */}
        {successMessage ? <Text style={styles.successMessage}>{successMessage}</Text> : null}

<TouchableOpacity>
        <Text style={styles.forgotPassword}>Bạn quên mật khẩu?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('TrangChu')
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
