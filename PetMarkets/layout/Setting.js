import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SettingsScreen = () => {
  const [name, setName] = useState('Le Van Liem');
  const [email, setEmail] = useState('liemkhiet123@gmail.com');
  const [isSalesEnabled, setIsSalesEnabled] = useState(true);
  const [isNewArrivalsEnabled, setIsNewArrivalsEnabled] = useState(false);
  const [isDeliveryEnabled, setIsDeliveryEnabled] = useState(false);

  const toggleSwitch = (setter) => () => setter(prevState => !prevState);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Setting</Text>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <TouchableOpacity>
            <MaterialIcons name="edit" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Name" />
        <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" keyboardType="email-address" />
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Password</Text>
          <TouchableOpacity>
            <MaterialIcons name="edit" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <TextInput style={styles.input} value="********" editable={false} secureTextEntry />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.switchContainer}>
          <Text>Sales</Text>
          <Switch value={isSalesEnabled} onValueChange={toggleSwitch(setIsSalesEnabled)} />
        </View>
        <View style={styles.switchContainer}>
          <Text>New arrivals</Text>
          <Switch value={isNewArrivalsEnabled} onValueChange={toggleSwitch(setIsNewArrivalsEnabled)} />
        </View>
        <View style={styles.switchContainer}>
          <Text>Delivery status changes</Text>
          <Switch value={isDeliveryEnabled} onValueChange={toggleSwitch(setIsDeliveryEnabled)} />
        </View>
      </View>

      <TouchableOpacity style={styles.faqButton}>
        <Text style={styles.faqText}>FAQ</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  faqButton: {
    padding: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    alignItems: 'center',
  },
  faqText: {
    fontSize: 16,
  },
});
