import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { COLORS, SCREENS, TEXT_TYPES } from '../helpers/constants';
import LoginScreen from '../views/login_screen/loginScreen';
import RegisterScreen from '../views/register_screen/registerScreen';
import HomeScreen from '../views/home_screen/homeScreen';
import ExploreScreen from '../views/explore_screen/exploreScreen';
import {
  SyS_CartIcon,
  SyS_HomeIcon,
  SyS_OfferIcon,
  SyS_SearchIcon,
  SyS_UserIcon,
} from '../helpers/icons';
import CartScreen from '../views/cart_screen/cartScreen';
import OfferScreen from '../views/offer_screen/offerScreen';
import AccountScreen from '../views/account_screen/accountScreen';
import DetailScreen from '../views/detail_screen/detailScreen';
import { ProductModel } from '../models/product.model';
import TextComponent from '../views/components/textComponent';
import DotComponent from '../views/components/dotComponent';
import jwtDecode, { JwtPayload } from "jwt-decode";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../stores/reducers/loginReducer';
import { RootState } from '../stores/configureStore';
import axios from 'axios';
import { API_BASE_URL } from '../configs';
import { setInfo } from '../stores/reducers/infoReducer';
import { fetchCart } from '../stores/reducers/cartReducer';
import { CartItem, CartModel } from 'src/models/cart.model';

const Tab = createBottomTabNavigator();

const BottomTab = () => {

  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.personalLogin).token || "";
  const cartState = useSelector((state: RootState) => state.personalCart) || [];

  let totalPrice: number = 0;

  const fetchCarts = () => {

    axios.get(`${API_BASE_URL}/home/cart/show`, {
      headers: { 'x-auth-token': token }
    }).then(async (rs) => {

      const data = rs.data.carts
      const cart: CartItem[] = []

      data.map((i: any) => {
        const product: ProductModel = {
          id: i['product']['_id'],
          name: i['product']['name'],
          categories: i['product']['categories'],
          photos: i['product']['photos'],
          price: i['product']['price'],
          purchases: i['product']['purchases'],
          quantity: i['product']['quantity'],
          star: i['product']['star'],
          rates: i['product']['rates'],
          sale: i['product']['sale'],
          author: i['product']['author'],
        }
        const price = (product.price! - (product.price! * product.sale!)) * i['quantity']
        totalPrice = totalPrice + price
        cart.push({
          product: product,
          price: price,
          quantity: i['quantity'],
        })
      })
      await dispatch(fetchCart({ carts: cart, totalPrice }))
    }).catch((err) => {
      console.log("err" + err)
    })
  }

  const fetchInfo = () => {
    axios.get(`${API_BASE_URL}/home/auth/get-info`, {
      headers: { 'x-auth-token': token }
    }).then(async (rs) => {
      dispatch(setInfo({
        
        name: rs.data.user.name || "",
        email: rs.data.user.email || "",
        phone: rs.data.user.phone || "",
        photo: rs.data.user.photo || "",
        address: rs.data.user.address || "",
      }));
      return rs.data
    })
  }

  const logged = async () => {
    try {
      const token = await AsyncStorage.getItem('TOKEN');
      if (token) {
        const decodedToken: JwtPayload = jwtDecode(token!);

        const tokenExpiration = decodedToken.exp ?? 0;
        const currentTimestamp: number = Date.now();
        if (tokenExpiration > currentTimestamp) {

          await dispatch(login({ logged: true, token: token }));
          return true
        }
      }
      return false
    } catch (error) {
      console.log("====>" + error);
    }
  };

  useEffect(() => {
    logged().then((rs) => {
      if (rs) {
        fetchCarts();
        fetchInfo()
      }
    });
  }, [token]);

  return (
    <Tab.Navigator
      initialRouteName={SCREENS.HomeScreen}
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [styles.tabBarStyle],
      }}>
      <Tab.Screen
        name={SCREENS.HomeScreen}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <SyS_HomeIcon
              width={25}
              height={25}
              stroke={focused ? COLORS.primaryColor : COLORS.textPrimaryColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.ExploreScreen}
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <SyS_SearchIcon
              width={25}
              height={25}
              stroke={focused ? COLORS.primaryColor : COLORS.textPrimaryColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.CartScreen}
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (

            <View style={styles.cartBtn}>

              <SyS_CartIcon
                width={25}
                height={25}
                fill={focused ? COLORS.primaryColor : COLORS.textPrimaryColor}
                stroke={focused ? COLORS.primaryColor : COLORS.textPrimaryColor}
              />

              <DotComponent value={cartState.carts.length} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.OfferScreen}
        component={OfferScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <SyS_OfferIcon
              width={25}
              height={25}
              stroke={focused ? COLORS.primaryColor : COLORS.textPrimaryColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.AccountScreen}
        component={AccountScreen}

        options={{
          tabBarIcon: ({ focused }) => (
            <SyS_UserIcon
              width={25}
              height={25}
              fill={focused ? COLORS.primaryColor : COLORS.textPrimaryColor}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};



const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"HomeTab"}>
        <Stack.Screen name={SCREENS.LoginScreen} component={LoginScreen} />
        <Stack.Screen name={SCREENS.RegisterScreen} component={RegisterScreen} />
        <Stack.Screen name="HomeTab" component={BottomTab} />
        <Stack.Screen name={SCREENS.DetailScreen} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    left: 0,
    bottom: 0,
    height: 60,
    display: 'flex',
    borderTopWidth: 1,
    position: 'absolute',
    borderColor: COLORS.borderColor,
  },
  cartBtn: {
    position: 'relative'
  },

})
export default Navigation;
