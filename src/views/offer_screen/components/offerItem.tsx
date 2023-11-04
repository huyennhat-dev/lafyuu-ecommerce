import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Offer } from '../../../helpers/icons'
import TextComponent from '../../../views/components/textComponent'
import { COLORS, TEXT_TYPES } from '../../../helpers/constants'
type Props = {
    title: string,
    content: string,
    time: string
}

const OfferItem = ({ content, time, title }: Props) => {
    return (
        <View style={styles.itemBody}>
            <View style={styles.icon}>
                <Offer width={20} height={20} />
            </View>
            <View style={styles.itemContent}>
                <TextComponent data={{
                    type: TEXT_TYPES.heading5, text: title,
                    style: { color: COLORS.textSecondaryColor }
                }} />
                <TextComponent data={{
                    type: TEXT_TYPES.normalTextR, text: content,
                    style: { color: COLORS.textSecondaryColor }
                }} />
                <TextComponent data={{
                    type: TEXT_TYPES.smallCaptionR, text: time,
                    style: { color: COLORS.textPrimaryColor }
                }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemBody: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 32,
        alignItems: 'flex-start'
    },
    icon: {
        marginRight: 16
    },
    itemContent: {
        flex: 1
    }
})

export default OfferItem