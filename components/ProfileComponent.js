import React, { Component } from 'react';
import { View, Text,StyleSheet,StatusBar } from 'react-native';
import Login from './LoginComponent';
import { Icon, Image } from "react-native-elements";
import { baseUrl } from "../shared/baseUrl";
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const ProfileItem = ({icon, name}) => (
  <View style={styles.itemContainer}>
    <MaterialCommunityIcons name={icon} size={26} color="#1e1e1e" />
    <Text style={[styles.itemText, {marginLeft: icon ? 20 : 0}]}>{name}</Text>
    <FontAwesome name="angle-right" size={26} color="#1e1e1e" onPress />
  </View>
);
const LoginNavigator = createStackNavigator();
function LoginNavigatorScreen() {
  return (
    <LoginNavigator.Navigator
      initialRouteName='Menu'
      screenOptions={{
        headerStyle: { backgroundColor: '#512DA8' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}>
      <LoginNavigator.Screen name='Login' component={Login} />
    </LoginNavigator.Navigator>
  );
}

class Profile extends Component {
  render() {
    // this.props.navigation = navigate;
    return (
      <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      <View style={styles.bodyContainer}>
        <View style={styles.userContainer}>
          <View style={styles.avatarContainer}>
          <Image
            source={{ uri: baseUrl + "images/logo.jpg" }}
            style={{ margin: 10, width: 80, height: 80 }}
          />
          </View>
          <View style={styles.textContainer} >
            <Text style={styles.welcomeText}>Chào mừng bạn đến với TH Shop</Text>
            <Text style={styles.authText}>Đăng nhập/Đăng ký</Text>
          </View>
          <FontAwesome name="angle-right" size={26} color="#1e88e5" />
        </View>
        {/*  */}
        <View style={styles.divider} />
        <ProfileItem icon="format-list-bulleted" name="Quản lý đơn hàng" />
        <ProfileItem icon="cart-outline" name="Sản phẩm đã mua" />
        <ProfileItem icon="eye-outline" name="Sản phẩm đã xem" />
        <ProfileItem icon="heart-outline" name="Sản phẩm yêu thích" />
        <ProfileItem icon="bookmark-outline" name="Sản phẩm mua sau" />
        <ProfileItem icon="star-outline" name="Sản phẩm đánh giá" />
        {/*  */}
        <View style={styles.divider} />
        <ProfileItem name="Ưu đãi cho chủ thẻ ngân hàng" />
        <ProfileItem name="Cài đặt" />
        {/*  */}
        <View style={styles.divider} />
        <ProfileItem icon="headphones" name="Hỗ trợ" />
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#ededed',
  },
  //
  userContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 22,
    alignItems: 'center',
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e88e5',
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  welcomeText: {
    color: '#828282',
  },
  authText: {
    color: '#1e88e5',
    fontSize: 18,
    fontWeight: '500',
  },
  //
  itemContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  itemText: {
    flex: 1,
    color: '#1e1e1e',
  },
  //
  divider: {
    height: 10,
  },
});
export default Profile;