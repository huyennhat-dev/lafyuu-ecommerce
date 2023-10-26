import React from 'react'
import { View, StyleSheet } from 'react-native'
import TextComponent from '../../components/textComponent'
import { COLORS, TEXT_TYPES, kDefaultPadding } from '../../../helpers/constants'

const CartHeader = ({ totalItem }: { totalItem: number }) => {
    return (
        <View style={styles.body}>
            <TextComponent data={{
                type: TEXT_TYPES.heading3, text: "Your Cart",
                style: { color: COLORS.textSecondaryColor }
            }} />
            {
                totalItem ? <TextComponent data={{
                    type: TEXT_TYPES.heading4, text: `${totalItem} Items`,
                    style: { color: COLORS.primaryColor }
                }} /> : null
            }
        </View>
    )
}
const styles = StyleSheet.create({
    body: {
        height: 88,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: kDefaultPadding * 1.6,
        borderBottomColor: COLORS.borderColor,
    }
})
export default CartHeader
