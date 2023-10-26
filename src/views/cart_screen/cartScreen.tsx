import React from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native';
import { COLORS, kDefaultPadding } from '../../helpers/constants';
import CartHeader from './components/cartHeader';
import { apiData } from '../../apis/data';
import CartItem from './components/cartItem';

const CartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false}>
        <CartHeader totalItem={5} />
        <View style={styles.body}>
          {apiData.map((item, index) => <CartItem key={index} item={item}/>)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.whiteColor,
  },
  body: {
    marginBottom: 60,
    flexDirection: 'column',
    paddingVertical: kDefaultPadding * 1.6,
    paddingHorizontal: kDefaultPadding * 1.6,
  },
})

export default CartScreen;
