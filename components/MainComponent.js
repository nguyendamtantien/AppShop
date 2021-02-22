import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Productdetail from './ProductdetailComponent';
import Profile from './ProfileComponent';
import Contact from './ContactComponent';
import Favorites from './FavoriteComponent';
import Cart from './CartComponent';
import { Card, Image, Icon } from 'react-native-elements';
// redux
import { connect } from 'react-redux';
import { fetchLeaders, fetchProducts, fetchComments, fetchPromos  } from '../redux/ActionCreators';
import { View } from 'react-native';
import { StatusBar } from 'react-native';
const mapDispatchToProps = dispatch => ({
  fetchLeaders: () => dispatch(fetchLeaders()),
  fetchProducts: () => dispatch(fetchProducts()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
});
const HomeNavigator = createStackNavigator();
function HomeNavigatorScreen() {
  return (
    <HomeNavigator.Navigator
      initialRouteName='Home'
      screenOptions={
        {
        headerStyle: { backgroundColor: '#1e88e5' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' },
        // tabBarLabel: 'Home',
        //     tabBarIcon: ({ color, size }) => (
        //       <MaterialCommunityIcons
        //         name="home"
        //         color={color}
        //         size={size}
        //         />
        //         ),
      }}> 
        <HomeNavigator.Screen name='Home' component={Home}/>
    </HomeNavigator.Navigator>
  );
}

const MenuNavigator = createStackNavigator();
function MenuNavigatorScreen() {
  return (
    <MenuNavigator.Navigator
      initialRouteName='Menu'
      screenOptions={{
        headerStyle: { backgroundColor: '#1e88e5' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}>
      <MenuNavigator.Screen name='Menu' component={Menu} />
      <MenuNavigator.Screen name='Productdetail' component={Productdetail} options={{ headerTitle: 'Product Detail' }} />
    </MenuNavigator.Navigator>
  );
}

const ProfileNavigator =createStackNavigator();
function ProfileNavigatorScreen(){
  return(
    <ProfileNavigator.Navigator
      initialRouteName='Menu'
      screenOptions={{
        headerStyle: { backgroundColor: '#1e88e5' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}>
      <ProfileNavigator.Screen name='Profile' component={Profile} options={{ headerTitle: 'Profile' }}/>
    </ProfileNavigator.Navigator>
  );
}

const ContactNavigator =createStackNavigator();
function ContactNavigatorScreen(){
  return(
    <ContactNavigator.Navigator
      initialRouteName='Menu'
      screenOptions={{
        headerStyle: { backgroundColor: '#1e88e5' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}>
      <ContactNavigator.Screen name='Contact' component={Contact} options={{ headerTitle: 'Contact Us' }}/>
    </ContactNavigator.Navigator>
  );
}
const FavoritesNavigator = createStackNavigator();
function FavoritesNavigatorScreen() {
  return (
    <FavoritesNavigator.Navigator initialRouteName='Favorites'
      screenOptions={{
        headerStyle: { backgroundColor: '#1e88e5' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}>
      <FavoritesNavigator.Screen name='Favorites' component={Favorites}
        options={({ headerTitle: 'Favorite' })} />
      <MenuNavigator.Screen name='Productdetail' component={Productdetail}
        options={{
          headerTitle: 'Product Detail'
        }} />
    </FavoritesNavigator.Navigator>
  );
}
const CartNavigator = createStackNavigator();
function CartNavigatorScreen() {
  return (
    <CartNavigator.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerStyle: { backgroundColor: "#1e88e5" },
        headerTintColor: "#fff",
        headerTitleStyle: { color: "#fff" },
      }}
    >
      <CartNavigator.Screen
        name="Cart"
        component={Cart}
        options={({ headerTitle: 'Giỏ Hàng' })}
      />
    </CartNavigator.Navigator>
  );
}
const MainNavigator = createBottomTabNavigator();
function MainNavigatorScreen() {
  return (
    <MainNavigator.Navigator initialRouteName='Home'>
      <MainNavigator.Screen name='Home' component={HomeNavigatorScreen} options={{ headerShown: false, tabBarLabel:'Home',
      tabBarIcon:({tintColor})=>(<Ionicons name="ios-home" color={tintColor} size={25}/>) }}/>
      <MainNavigator.Screen name='Menu' component={MenuNavigatorScreen} options={{ headerShown: false, tabBarLabel:'Menu',
      tabBarIcon:({tintColor})=>(<Ionicons name="ios-grid" color={tintColor} size={25}/>) }} />
      <MainNavigator.Screen name='Contact' component={ContactNavigatorScreen} options={{ headerShown: false, tabBarLabel:'Contact',
      tabBarIcon:({tintColor})=>(<Ionicons name="ios-call" color={tintColor} size={25}/>) }} />
      <MainNavigator.Screen name='Profile' component={ProfileNavigatorScreen} options={{ headerShown: false, tabBarLabel:'Profile',
      tabBarIcon:({tintColor})=>(<Ionicons name="ios-person" color={tintColor} size={25}/>) }} />
      <MainNavigator.Screen name='Favorites' component={FavoritesNavigatorScreen} options={{ headerShown: false, tabBarLabel: 'My Favorites',
      tabBarIcon:({tintColor})=>(<Ionicons name="heart" color={tintColor} size={25}/>) }} />
      <MainNavigator.Screen name="Cart" component={CartNavigatorScreen} options={{ title: "Giỏ Hàng",
      tabBarIcon: ({tintColor})=>(<Ionicons name="cart" color={tintColor} size={25}/>) }} />
    </MainNavigator.Navigator>
  );
}


class Main extends Component {
  render() {
    return (
      <NavigationContainer>
        <MainNavigatorScreen />
      </NavigationContainer>
    );
  }
  componentDidMount() {
    // redux
    this.props.fetchLeaders();
    this.props.fetchProducts();
    this.props.fetchComments();
    this.props.fetchPromos();
  }
}
export default connect(null, mapDispatchToProps)(Main);