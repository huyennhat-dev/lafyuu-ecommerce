import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import Swiper from 'react-native-swiper'
import { COLORS } from '../../../helpers/constants'

const DetailSlider = ({ images }: { images: string[] }) => {
    return (
        <View style={{}}>
            <Swiper style={styles.wrapper}
                loop={true}
                autoplay={true}
                autoplayDirection={true}
                autoplayTimeout={5000}
                dotColor={COLORS.defaultColor}
                activeDotColor={COLORS.primaryColor}
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.dotStyle}

            >
                {
                    images.map((image, index) => (
                        <View key={index} style={styles.slider}>
                            <Image style={styles.image} source={{ uri: image }} resizeMode='cover' />
                        </View>
                    ))
                }
            </Swiper>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        height: 238
    },
    slider: {
        flex: 1,
        height: 238,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        height: 238,
        width: '100%',
        resizeMode: 'cover',
    },
    dotStyle: {
        position: 'relative',
        bottom: -45
    }

})

export default DetailSlider
