import React, { useState } from 'react'
import { Pressable, SafeAreaView, ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native';
import HTML from 'react-native-render-html';
import TextComponent from '../components/textComponent'
import { COLORS, TEXT_TYPES, kDefaultPadding } from '../../helpers/constants'
import DetailHeader from './components/detailHeader';
import DetailSlider from './components/detailSlider';
import RatingBar from '../components/ratingBar';
import IconButtonComponent from '../components/iconButtonComponent';
import { SyS_LoveIcon } from '../../helpers/icons';
import QuantityComponent from './components/quantityComponent';
import HeadingComponent from '../home_screen/components/headingComponent';
import ButtonComponent from '../components/buttonComponent';
import ReviewComponent from '../components/reviewComponent';
import DetailRecommend from './components/detailRecommend';

const images = [
    'https://github.com/leecade/react-native-swiper/blob/master/examples/components/Swiper/img/1.jpg?raw=true',
    'https://github.com/leecade/react-native-swiper/blob/master/examples/components/Swiper/img/2.jpg?raw=true',
    'https://github.com/leecade/react-native-swiper/blob/master/examples/components/Swiper/img/3.jpg?raw=true',
    'https://github.com/leecade/react-native-swiper/blob/master/examples/components/Swiper/img/4.jpg?raw=true'
]

const htmlContent = `
<p>This is <strong>HTML</strong> content.</p>
<img
  width="1200" height="800"
  style=" align-self: center;"
  src="https://i.ytimg.com/vi/WcRO16RdKyc/maxresdefault.jpg"
/>
<table class="custom-table">
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
  </tr>
  <tr>
    <td>Row 2, Cell 1</td>
    <td>Row 2, Cell 2</td>
  </tr>
</table>
<p>More text here...</p>
`;

const customStyles = {
    customTable: {
        border: '1px solid #000',
        borderCollapse: 'collapse',
    },
    customTableCell: {
        border: '1px solid #000',
        padding: '8px',
    },
};

type RootStackParamList = {
    DetailScreen: { itemId: number };
};

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'DetailScreen'>;
const DetailScreen = ({ navigation }: { navigation: any }) => {
    const route = useRoute<DetailScreenRouteProp>();
    const { itemId } = route.params;

    const [quantity, setQuantity] = useState(1)

    const { width } = useWindowDimensions();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false}>
                <DetailHeader navigation={navigation} />
                <DetailSlider images={images} />
                <View style={styles.body}>
                    <View style={styles.title}>
                        <View style={{ flex: 1 }}>
                            <TextComponent data={{
                                type: TEXT_TYPES.heading3,
                                style: { color: COLORS.textSecondaryColor },
                                text: "Nike Air Zoom Pegasus 36 Miami"
                            }} />
                        </View>
                        <Pressable onPress={() => { }} style={{ marginLeft: 8 }}>
                            <IconButtonComponent icon={<SyS_LoveIcon width={25} height={25} stroke={COLORS.defaultColor} />} />
                        </Pressable>

                    </View>
                    <View style={styles.rating}>
                        <RatingBar data={{ press: false, star: 4, size: 16 }} />
                        <TextComponent
                            data={{
                                type: TEXT_TYPES.normalTextR,
                                style: {
                                    marginLeft: 8,
                                    color: COLORS.textPrimaryColor
                                },
                                text: '(4/5) 356 review'
                            }} />
                    </View>
                    <View style={styles.price}>
                        <TextComponent data={{
                            type: TEXT_TYPES.heading3, text: `$ ${100 - (0.24 * 100)}`,
                            style: {
                                color: COLORS.primaryColor,
                                marginRight: 8

                            }
                        }} />
                        <TextComponent
                            data={{
                                type: TEXT_TYPES.heading5,
                                style: {
                                    textDecorationLine: 'line-through',
                                    marginRight: 8
                                },
                                text: '$' + `${100}`
                            }} />
                        <TextComponent
                            data={{
                                type: TEXT_TYPES.heading5,
                                text: `${0.24 * 100}% Off`,
                                style: { color: COLORS.dangerColor }
                            }} />
                    </View>
                    <View style={styles.quantity}>
                        <TextComponent data={{
                            type: TEXT_TYPES.heading5,
                            style: { color: COLORS.textSecondaryColor },
                            text: 'Enter quantity'
                        }} />
                        <QuantityComponent quantity={quantity} setQuantity={setQuantity} />
                    </View>
                    <View style={styles.button}>
                        <ButtonComponent data={{ onPress: () => { }, title: "Add to cart" }} />
                    </View>
                    <View style={styles.descriptionBody}>
                        <TextComponent data={{
                            type: TEXT_TYPES.heading5,
                            style: { color: COLORS.textSecondaryColor },
                            text: 'Descriptions'
                        }} />
                        <HTML
                            contentWidth={width - 32}
                            source={{ html: htmlContent }}
                            baseStyle={styles.description}
                        />
                    </View>
                    <View style={styles.reviewProduct}>
                        <HeadingComponent data={{
                            onPress: () => { },
                            title: "Review Product",
                            text: "See More"
                        }} />
                        {[1, 2, 3, 4, 5].map((item, index) => (
                            <ReviewComponent key={index} props={{
                                data:
                                {
                                    avatar: images[0],
                                    id: item.toString(),
                                    images: images,
                                    star: 5,
                                    username: "James Lawson",
                                    content: "air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites."
                                }
                            }} />
                        ))}
                    </View>
                    <View>
                        <DetailRecommend />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.whiteColor,
    },
    body: {
        marginBottom: 60,
        flexDirection: 'column',
        paddingVertical: kDefaultPadding * 1.6,
        paddingHorizontal: kDefaultPadding * 1.6,
    },
    title: {
        flex: 1,
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rating: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    price: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    quantity: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8
    },
    button: { marginVertical: 16 },
    descriptionBody: {
        marginBottom: 8

    },
    description: {
        fontSize: 12,
        letterSpacing: 0.5,
        lineHeight: 12 * 1.8,
        fontFamily: 'Poppins-Regular',
        color: COLORS.textPrimaryColor,
    },
    reviewProduct: {
        flex: 1,

    }
})

export default DetailScreen
