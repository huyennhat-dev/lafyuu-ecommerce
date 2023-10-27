import React from 'react'
import { View, StyleSheet } from 'react-native'
import { COLORS, TEXT_TYPES } from '../../../helpers/constants'
import TextComponent from '../../components/textComponent'
import ButtonComponent from '../../components/buttonComponent'

const CartFooter = ({ price }: { price: number }) => {
    return (
        <View style={styles.body}>
            <View style={styles.price}>
                <TextComponent data={{
                    type: TEXT_TYPES.heading4,
                    style: { color: COLORS.textSecondaryColor },
                    text: "TOTAL PRICE: "
                }} />
                <TextComponent data={{
                    type: TEXT_TYPES.heading3,
                    style: { color: COLORS.dangerColor },
                    text: `${price} đ`
                }} />
            </View>
            <ButtonComponent data={{ onPress: () => { }, title: "CHECK OUT" }} />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        paddingTop: 32,
        paddingHorizontal: 16,
        borderTopWidth: 1,
        borderTopColor: COLORS.borderColor,
    },
    price: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 32,
        justifyContent: 'space-between'
    }
})

export default CartFooter
