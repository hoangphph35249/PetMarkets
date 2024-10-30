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
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
          style={styles.input}
        />
        <TextInput
          value={matKhau}
          onChangeText={setMatKhau}
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
        />

        {/* Hiển thị thông báo lỗi */}
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

        {/* Hiển thị thông báo thành công */}
        {successMessage ? <Text style={styles.successMessage}>{successMessage}</Text> : null}

        <Text style={styles.forgotPassword}>Bạn quên mật khẩu?</Text>
        <TouchableOpacity onPress={xuLyDangNhap} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Đăng Nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Đăng Ký</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ManHinhDangNhap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  inputContainer: {
    width: '90%',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 10,
    color: 'blue',
  },
  loginButton: {
    backgroundColor: 'blue',
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: 'gray',
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
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
