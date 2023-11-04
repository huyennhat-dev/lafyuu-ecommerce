import React, { useEffect, useState } from 'react'
import { Pressable, SafeAreaView, ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native';
import HTML from 'react-native-render-html';
import TextComponent from '../components/textComponent'
import { COLORS, SCREENS, TEXT_TYPES, kDefaultPadding } from '../../helpers/constants'
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
import axios from 'axios';
import { API_BASE_URL } from '../../configs';
import { ProductModel } from '../../models/product.model';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../stores/configureStore';
import { addProductToCart } from '../../stores/reducers/cartReducer';
import ReviewProduct from './components/reviewProduct';
import Snackbar from 'react-native-snackbar';


type RootStackParamList = {
    DetailScreen: { itemId: number };
};

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'DetailScreen'>;
const DetailScreen = ({ navigation }: { navigation: any }) => {
    const dispatch = useDispatch()
    const route = useRoute<DetailScreenRouteProp>();
    const loginState = useSelector((state: RootState) => state.personalLogin);

    const { itemId } = route.params;

    const [product, setProduct] = useState<ProductModel>();

    const [quantity, setQuantity] = useState(1)

    const fetchProductData = () => {
        try {
            axios.get(`${API_BASE_URL}/home/product/${itemId}`).then((rs) => {
                const pro: ProductModel = {
                    id: rs.data.product._id,
                    name: rs.data.product.name,
                    photos: rs.data.product.photos,
                    price: rs.data.product.price,
                    sale: rs.data.product.sale,
                    star: rs.data.product.star,
                    description: rs.data.product.description,
                    rates: rs.data.product.rates
                }

                setProduct(pro)
            })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchProductData()
    }, [])

    const addToCart = () => {


        if (!loginState.logged) {
            navigation.navigate(SCREENS.LoginScreen);
            return
        }
        dispatch(addProductToCart({
            product: product!,
            quantity: quantity,
            price: (product?.price! - product?.price! * product?.sale!) * quantity
        }))

        axios.post(
            `${API_BASE_URL}/home/cart/create`,
            { id: itemId, quantity: quantity },
            { headers: { 'x-auth-token': loginState.token } }
        )
            .then((rs) => {
                Snackbar.show({
                    text: 'Add to cart successfully',
                    duration: 1500,
                    backgroundColor: "rgba(51, 255, 51, 0.7)"

                });
                console.log('rs:', rs.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    const { width } = useWindowDimensions();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false}>
                <DetailHeader navigation={navigation} title={product?.name!} />
                <DetailSlider images={product?.photos! ?? []} />
                <View style={styles.body}>
                    <View style={styles.title}>
                        <View style={{ flex: 1 }}>
                            <TextComponent data={{
                                type: TEXT_TYPES.heading3,
                                style: { color: COLORS.textSecondaryColor },
                                text: product?.name!
                            }} />
                        </View>
                        <Pressable onPress={() => { }} style={{ marginLeft: 8 }}>
                            <IconButtonComponent icon={<SyS_LoveIcon width={25} height={25} stroke={COLORS.defaultColor} />} />
                        </Pressable>

                    </View>
                    <View style={styles.rating}>
                        <RatingBar data={{ press: false, star: product?.star ?? 0, size: 16 }} />
                        <TextComponent
                            data={{
                                type: TEXT_TYPES.normalTextR,
                                style: {
                                    marginLeft: 8,
                                    color: COLORS.textPrimaryColor
                                },
                                text: `(${product?.star!}/5) ${product?.rates?.length! ?? 0} review`
                            }} />
                    </View>
                    <View style={styles.price}>
                        <TextComponent data={{
                            type: TEXT_TYPES.heading3,
                            text: `$ ${((product?.price! - (product?.sale! * product?.price!)) || 0).toFixed(0)}`,
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
                                text: `${(product?.price!) || 0}` + ' đ'
                            }} />
                        <TextComponent
                            data={{
                                type: TEXT_TYPES.heading5,
                                text: `${((product?.sale! * 100) || 0).toFixed(0)}% Off`,
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
                        <ButtonComponent data={{ onPress: addToCart, title: "Add to cart" }} />
                    </View>
                    <View style={styles.descriptionBody}>
                        <TextComponent data={{
                            type: TEXT_TYPES.heading5,
                            style: { color: COLORS.textSecondaryColor },
                            text: 'Descriptions'
                        }} />
                        <HTML
                            contentWidth={width - 32}
                            source={{ html: product?.description! ?? "" }}
                            baseStyle={styles.description}
                        />
                    </View>

                    <ReviewProduct productId={product?.id ?? ""} />

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
        fontSize: 13,
        letterSpacing: 0.5,
        lineHeight: 13 * 1.8,
        fontFamily: 'Poppins-Regular',
        color: COLORS.textPrimaryColor,
    },
    reviewProduct: {
        flex: 1,
        marginTop: 16
    }
})

export default DetailScreen
