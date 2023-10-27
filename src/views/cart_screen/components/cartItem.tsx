import React from 'react'
import { View, StyleSheet, Image, Pressable } from 'react-native'
import { CartItem, CartModel } from '../../../models/cart.model'
import { COLORS, TEXT_TYPES, kDefaultPadding } from '../../../helpers/constants'
import TextComponent from '../../components/textComponent'
import IconButtonComponent from '../../components/iconButtonComponent'
import { SyS16_MinusIcon, SyS16_PlusIcon, SyS_TrashIcon } from '../../../helpers/icons'

const CartItemComponent = ({ item }: { item: CartItem }) => {

  const decrease = () => {
  };

  const increase = () => {
  };

  const { product, quantity } = item
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.photos![0] }} resizeMode='cover' borderRadius={5} />
      <View style={styles.body}>
        <View style={styles.header}>
          <View style={{ flex: 1 }}>
            <TextComponent data={{
              text: product.name!,
              maxLine: 2,
              type: TEXT_TYPES.heading5,
              style: { color: COLORS.textSecondaryColor, marginRight: 8 }
            }} />
          </View>
          <Pressable onPress={() => { }}>
            <IconButtonComponent icon={(<SyS_TrashIcon width={25} height={25} stroke={COLORS.defaultColor} />)} />
          </Pressable>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View>
            <TextComponent data={{
              type: TEXT_TYPES.heading5, text: `${(product.price! - (product.price! * product.sale!)).toFixed(0)} đ`,
              style: { color: COLORS.primaryColor }
            }} />
          </View>
          <View style={styles.quantityGroup}>
            <Pressable style={styles.decrease} onPress={decrease}>
              <IconButtonComponent
                icon={<SyS16_MinusIcon width={16} height={16}
                  stroke={COLORS.defaultColor} />}
              />
            </Pressable>
            <View style={styles.quantityValue}>
              <TextComponent data={{
                type: TEXT_TYPES.heading5,
                text: `${quantity || 1}`,
                style: { color: COLORS.textPrimaryColor }
              }} />
            </View>
            <Pressable style={styles.increase} onPress={increase}>
              <IconButtonComponent
                icon={<SyS16_PlusIcon width={16} height={16}
                  stroke={COLORS.defaultColor} />}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    padding: kDefaultPadding * 1.6,
    marginBottom: kDefaultPadding * 1.6,
    borderColor: COLORS.borderColor
  },
  body: { flex: 1 },
  image: {
    height: 72,
    width: 72,
    marginRight: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  quantityGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 32,
    borderWidth: 1, borderColor: COLORS.borderColor,
    borderRadius: 5,
  },
  quantityValue: {
    paddingVertical: 2, paddingHorizontal: 16,
    backgroundColor: "#EBF0FF"
  },
  decrease: {
    paddingHorizontal: 8
  },
  increase: {
    paddingHorizontal: 8

  }

})

export default CartItemComponent
