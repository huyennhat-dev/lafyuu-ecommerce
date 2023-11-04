import React from 'react'
import { View, Image, ScrollView, StyleSheet } from 'react-native'
import { ReviewModel } from '../../models/review.model'
import TextComponent from './textComponent'
import { COLORS, TEXT_TYPES } from '../../helpers/constants'
import RatingBar from './ratingBar'

type reviewProps = {
    data: ReviewModel
}

const ReviewComponent = ({ props }: { props: reviewProps }) => {
    const { avatar, id, images, star, username, content, time } = props.data
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image} source={{ uri: avatar }} resizeMode='cover' borderRadius={100} />
                <View style={{ flex: 1, paddingRight: 8 }}>
                    <TextComponent data={{
                        text: username,
                        maxLine: 1,
                        type: TEXT_TYPES.heading5,
                        style: { color: COLORS.textSecondaryColor, marginBottom: 3 }
                    }} />
                    <RatingBar data={{ press: false, star: star, size: 14 }} />

                </View>
            </View>
            <View style={styles.content}>
                <TextComponent data={{
                    text: content,
                    type: TEXT_TYPES.normalTextR,
                }} />
            </View>
            <View style={{ flex: 1, marginBottom: 8 }}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} overScrollMode="never" style={{ flex: 1, flexDirection: 'row' }}>
                    {images.map((item, index) => <Image
                        key={index}
                        borderRadius={5}
                        resizeMode='cover'
                        source={{ uri: item }}
                        style={{ width: 50, height: 50, marginRight: 12 }}
                    />)}
                </ScrollView>
            </View>
            <View>
                <TextComponent data={{
                    text: time,
                    type: TEXT_TYPES.normalTextR,
                }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 12
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
    },
    image: {
        height: 48,
        width: 48,
        marginRight: 10
    },
    content: {
        marginBottom: 8
    }
})

export default ReviewComponent
