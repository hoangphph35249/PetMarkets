import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';

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
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../Image/logo.jpg')} style={styles.logo} /> {/* Thay đổi đường dẫn hình ảnh nếu cần */}
      </View>
      <View style={styles.formContainer}>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Name"
          style={styles.input}
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
          style={styles.input}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={showPassword}
            style={styles.passwordInput}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.showPasswordIcon}>👁</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"
            secureTextEntry={showConfirmPassword}
            style={styles.passwordInput}
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Text style={styles.showPasswordIcon}>👁</Text>
          </TouchableOpacity>
        </View>

        {/* Hiển thị thông báo lỗi */}
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

        {/* Hiển thị thông báo thành công */}
        {successMessage ? <Text style={styles.successMessage}>{successMessage}</Text> : null}

        <TouchableOpacity onPress={validateAndRegister} style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Đăng Ký</Text>
        </TouchableOpacity>
        
        <Text style={styles.loginPrompt}>
          Bạn đã có tài khoản?{" "}
          <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
            Đăng Nhập
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ManHinhDangKy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  formContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 20,
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 20,
  },
  showPasswordIcon: {
    padding: 10,
    fontSize: 18,
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
  registerButton: {
    backgroundColor: '#4B9CD3',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  registerButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginPrompt: {
    textAlign: 'center',
    color: '#555',
  },
  loginLink: {
    color: '#4B9CD3',
    fontWeight: 'bold',
  },
});
