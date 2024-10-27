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
import DangNhap from './layout/DangNhap';
import DangKy from './layout/DangKy';

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
      <stack.Screen  component={DangNhap} name='DangNhap'/>
      <stack.Screen  component={DangKy} name='DangKy'/>
      </stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Favorites/>
    // </View>
  );
}

const styles = StyleSheet.create({
  
});
