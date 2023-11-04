import React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View, StyleSheet } from 'react-native';
import { COLORS, SCREENS, TEXT_TYPES, kDefaultPadding } from '../../helpers/constants';
import CartHeader from './components/cartHeader';
import CartItemComponent from './components/cartItem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../stores/configureStore';
import CartFooter from './components/cartFooter';
import ButtonComponent from '../components/buttonComponent';
import { Alert_AlertIcon, } from '../../helpers/icons';
import TextComponent from '../components/textComponent';


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
          {cartState.carts.length ? <CartFooter price={cartState.totalPrice} /> :
            <View style={[styles.body,
            { alignItems: 'center', justifyContent: 'center' }
            ]}>
              <Alert_AlertIcon width={200} height={200} fill={COLORS.yellowColor} />
              <TextComponent data={{
                type: TEXT_TYPES.heading3, text: "Your shopping cart is currently empty, go buy some things",
                style: { color: COLORS.textSecondaryColor, textAlign: 'center' }
              }} />
            </View>
          }

        </View>

      </ScrollView>) : (
        <View
          style={[styles.body,
          { alignItems: 'center', justifyContent: 'center' }
          ]}
        >
          <Alert_AlertIcon width={200} height={200} fill={COLORS.yellowColor} />
          <TextComponent data={{
            type: TEXT_TYPES.heading2, text: "You are not logged in, please log in now",
            style: { color: COLORS.textSecondaryColor, textAlign: 'center' }
          }} />
          <TouchableOpacity onPress={() => navigation.navigate(SCREENS.LoginScreen)}>
            <TextComponent data={{
              type: TEXT_TYPES.mediumTextR, text: "Click here to log in",
              style: { color: COLORS.textSecondaryColor, textAlign: 'center', marginTop: 20 }
            }} />
          </TouchableOpacity>
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
    flex:1,
    marginBottom: 60,
    alignSelf: 'stretch',
    flexDirection: 'column',
    paddingVertical: kDefaultPadding * 1.6,
    paddingHorizontal: kDefaultPadding * 1.6,
  },
})

export default CartScreen;
