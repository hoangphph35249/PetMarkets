import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ScrollView } from 'react-native';

const ManHinhDangKy = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateAndRegister = () => {
    setErrorMessage('');
    setSuccessMessage('');

    // Kiểm tra thông tin đầu vào
    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    // Kiểm tra mật khẩu trùng khớp
    if (password !== confirmPassword) {
      setErrorMessage("Mật khẩu và xác nhận mật khẩu không trùng khớp.");
      return;
    }

    // Thực hiện đăng ký
    xuLyDangKy();
  };

  const xuLyDangKy = async () => {
    console.log('Đăng ký với:', name, email, password);
    setSuccessMessage("Đăng ký thành công!");  // Hiển thị thông báo thành công

    // Chuyển đến màn hình đăng nhập (giả lập điều hướng)
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000); // Điều hướng sau 2 giây để người dùng thấy thông báo thành công
  };

  return (
    <SafeAreaView >
      <ScrollView contentContainerStyle={{ width: '100%', alignItems: 'center' ,backgroundColor:'white', height:'100%'}}>
        <View style={styles.logoContainer}>
          <Image source={require('../Image/logo.jpg')} style={styles.logo} />
        </View>


        <View style={styles.inputContainer}>
          <Text style={{ fontSize: 17, color: '#909090', marginVertical: 10 }}>Name</Text>
          <TextInput
            style={styles.input}
          />
          <View style={{ backgroundColor: '#E0E0E0', height: 1, marginBottom: 20 }} />
          <Text style={{ fontSize: 17, color: '#909090', marginVertical: 10 }}>Email</Text>
          <TextInput
            style={styles.input}
          />
          <View style={{ backgroundColor: '#E0E0E0', height: 1, marginBottom: 20 }} />


          <Text style={{ fontSize: 17, color: '#909090', marginVertical: 10 }}>Password</Text>
          <TextInput
            style={styles.input}
          />
          <View style={{ backgroundColor: '#E0E0E0', height: 1, marginBottom: 20 }} />


          <Text style={{ fontSize: 17, color: '#909090', marginVertical: 10 }}>Confirm Password</Text>
          <TextInput
            style={styles.input}
          />
          <View style={{ backgroundColor: '#E0E0E0', height: 1, marginBottom: 20 }} />

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Đăng Ký</Text>
          </TouchableOpacity>

          <View style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Bạn đã có tài khoản ?</Text>
            <TouchableOpacity onPress={()=>{
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
});
