import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native';
import { COLORS, kDefaultPadding } from '../../helpers/constants';
import CartHeader from './components/cartHeader';
import CartItemComponent from './components/cartItem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../stores/configureStore';
import CartFooter from './components/cartFooter';
import axios from 'axios';
import { API_BASE_URL } from '../../configs';
import { fetchCart } from '../../stores/reducers/cartReducer';


const CartScreen = () => {
  const cartState = useSelector((state: RootState) => state.personalCart);
  const [totalPrice, setTotalPrice] = useState(0);


  const dispatch = useDispatch()

  const tokenState = useSelector((state: RootState) => state.personalLogin);

  const fetchAllData = () => {
    axios.get(`${API_BASE_URL}/home/cart/show`, {
      headers: {
        'x-auth-token': tokenState.token
      }
    }).then((rs) => {
      dispatch(fetchCart({ carts: rs.data.carts }))
      cartState.carts.map((cart) => {
        const price = cart.product.price! -
          (cart.product.price! * cart.product.sale!)
          * cart.quantity
        setTotalPrice(totalPrice + price)
      })
    }).catch((err) => {
      console.log(err.data)
    })
  }

  useEffect(() => {
    fetchAllData()

  }, [totalPrice])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false}>
        <CartHeader totalItem={cartState.carts.length} />
        <View style={styles.body}>
          {cartState.carts.map((item, index) => <CartItemComponent key={index} item={item} />)}

          <CartFooter price={totalPrice} />
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
    flex: 1,
    marginBottom: 60,
    alignSelf: 'stretch',
    flexDirection: 'column',
    paddingVertical: kDefaultPadding * 1.6,
    paddingHorizontal: kDefaultPadding * 1.6,
  },
})

export default CartScreen;
