import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TrangChu from './layout/TrangChu';
import Cart from './layout/Cart';
import Detail from './layout/Detail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Favorites from './layout/Favorites';
import Oder from './layout/Oder';
import Porofile from './layout/Porofile';
import Wellcome from './layout/WellCome';

import SeeAll from './layout/SeeAll';
import PaymentMethodScreen from './layout/PayMethods';
import ManHinhDangKy from './layout/DangKy';
import ManHinhDangNhap from './layout/DangNhap';
import AddPaymentMethodScreen from './layout/AddPayMethods';
import SuccessScreen from './layout/ThanhCong';
import SettingsScreen from './layout/Setting';
import ShippingAddressScreen from './layout/ShippingAddress';

export default function App() {
  const stack = createNativeStackNavigator()
  return (
    <NavigationContainer >
      <stack.Navigator screenOptions={{headerShown:false}}>

      <stack.Screen  component={Wellcome} name='Wellcome'/>
      <stack.Screen  component={TrangChu} name='TrangChu'/>
      <stack.Screen component={Detail} name='Detail'/>
      <stack.Screen component={Cart} name='Cart'/>
      <stack.Screen component={Favorites} name='Favorites'/>
      <stack.Screen component={Oder} name='Oder'/>
      <stack.Screen component={Porofile} name='Porofile'/>

      <stack.Screen  component={ManHinhDangNhap} name='DangNhap'/>
      <stack.Screen  component={ManHinhDangKy} name='DangKy'/>
      <stack.Screen  component={PaymentMethodScreen} name='PayMethods'/>
      <stack.Screen  component={AddPaymentMethodScreen} name='AddPayMethods'/>
      <stack.Screen  component={SuccessScreen} name='ThanhCong'/>
      <stack.Screen  component={SettingsScreen} name='Setting'/>
      <stack.Screen  component={ShippingAddressScreen} name='ShippingAddress'/>
      
      <stack.Screen  component={SeeAll} name='SeeAll'/>
     
      </stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <ManHinhDangKy/>
    // </View>
  );
}

const styles = StyleSheet.create({
  
});
