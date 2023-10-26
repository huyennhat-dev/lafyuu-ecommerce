import React from 'react'
import { View, StyleSheet } from 'react-native'
import TextComponent from './textComponent'
import { COLORS, TEXT_TYPES } from '../../helpers/constants'

const DotComponent = ({ value }: { value: number }) => {
    return (
        value ? (<View style={styles.dot}>
            <TextComponent data={{
                type: TEXT_TYPES.smallCaptionB,
                maxLine: 1,
                style: { color: COLORS.whiteColor },
                text: `${value}`
            }} />
        </View>) : null
    )
}

const styles = StyleSheet.create({
    dot: {
        top: -5,
        right: -5,
        position: 'absolute',
        borderRadius: 100,
        paddingHorizontal: 5,
        paddingVertical: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: COLORS.dangerColor
    }
})

export default DotComponent
