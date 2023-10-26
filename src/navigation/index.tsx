import React from 'react';
import { StyleSheet, View } from 'react-native';

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

const carts: ProductModel[] = [];

const Tab = createBottomTabNavigator();

const BottomTab = () => {

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

              <DotComponent value={carts.length} />
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
        initialRouteName={SCREENS.LoginScreen}>
        <Stack.Screen name={SCREENS.LoginScreen} component={LoginScreen} />
        <Stack.Screen
          // options={{headerShown: true}}
          name={SCREENS.RegisterScreen}
          component={RegisterScreen}
        />
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
