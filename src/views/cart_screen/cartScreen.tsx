import React from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native';
import { COLORS, SCREENS, kDefaultPadding } from '../../helpers/constants';
import CartHeader from './components/cartHeader';
import CartItemComponent from './components/cartItem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../stores/configureStore';
import CartFooter from './components/cartFooter';
import ButtonComponent from '../components/buttonComponent';
import { Alert_AlertIcon, } from '../../helpers/icons';


const CartScreen = ({ navigation }: { navigation: any }) => {

  const cartState = useSelector((state: RootState) => state.personalCart);
  const tokenState = useSelector((state: RootState) => state.personalLogin);

  return (
    <SafeAreaView style={styles.container}>
      {tokenState.logged ? (<ScrollView overScrollMode="never" showsVerticalScrollIndicator={false}>
        <CartHeader totalItem={cartState.carts.length} />
        <View style={styles.body}>

          <View style={{ flexDirection: 'column-reverse' }}>
            {cartState.carts.map((item, index) => <CartItemComponent key={index} item={item} />)}
          </View>
          <CartFooter price={cartState.totalPrice} />

        </View>

      </ScrollView>) : (
        <View style={{ flex: 1, alignItems: 'center', marginHorizontal: 16, justifyContent: 'center' }}>
          <Alert_AlertIcon width={200} height={200} fill={COLORS.yellowColor} />
          <ButtonComponent data={{ onPress: () => navigation.navigate(SCREENS.LoginScreen), title: "Login now" }} />
        </View>
      )}
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
    alignSelf: 'stretch',
    flexDirection: 'column',
    paddingVertical: kDefaultPadding * 1.6,
    paddingHorizontal: kDefaultPadding * 1.6,
  },
})

export default CartScreen;
