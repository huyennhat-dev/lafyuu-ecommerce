import React, { useEffect, useState } from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { COLORS, SCREENS, TEXT_TYPES, kDefaultPadding } from '../../helpers/constants';
import HeaderComponent from './components/headerComponent';
import BannerComponent from './components/bannerComponent';
import HeadingComponent from './components/headingComponent';
import CategoryItem from '../components/categoryItem';
import {
  Pro_DressIcon,
  Pro_ManBagIcon,
  Pro_ManShoesIcon,
  Pro_ShirtIcon,
  Pro_WomanBagIcon,
  Pro_WomanShoeIcon,
} from '../../helpers/icons';
import TextComponent from '../components/textComponent';
import SaleProductItem from './components/saleProductItem';
import ProductItem from '../components/productItem';

import { ProductModel } from '../../models/product.model';
import { apiData } from '../../apis/data';
import { API_BASE_URL } from '../../configs';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../stores/configureStore';
import { fetchCart } from '../../stores/reducers/cartReducer';


const HomeScreen = ({ navigation }: { navigation: any }) => {


  const [newProducts, setNewProducts] = useState<ProductModel[]>([]);
  const [saleProducts, setSaleProducts] = useState<ProductModel[]>([]);
  const [recommendProducts, setRecommendProducts] = useState<ProductModel[]>([]);


  const fetchNewProduct = () => {
    axios.get(`${API_BASE_URL}/home/index/new-products`).then((rs) => {
      const products = rs.data.products.map((data: any) => ({
        id: data._id,
        name: data.name,
        photos: data.photos,
        price: data.price,
        sale: data.sale,
        star: data.star
      }));
      setNewProducts(products);
    }).catch(err => {
      console.log(err)
    })
  }

  const fetchSaleProduct = () => {
    axios.get(`${API_BASE_URL}/home/index/sale-products`).then((rs) => {
      const products = rs.data.products.map((data: any) => ({
        id: data._id,
        name: data.name,
        photos: data.photos,
        price: data.price,
        sale: data.sale,
        star: data.star
      }));
      setSaleProducts(products);
    }).catch(err => {
      console.log(err)
    })
  }

  const fetchRecommendProduct = () => {
    axios.get(`${API_BASE_URL}/home/index/recommend-product`).then((rs) => {
      const products = rs.data.products.map((data: any) => ({
        id: data._id,
        name: data.name,
        photos: data.photos,
        price: data.price,
        sale: data.sale,
        star: data.star
      }));
      setRecommendProducts(products);
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    fetchNewProduct()
    fetchSaleProduct()
    fetchRecommendProduct()
  }, [])



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false}>
        <HeaderComponent navigation={navigation} />
        <View style={styles.body}>
          <View style={styles.element}>
            <BannerComponent data={{ title: "Super Flash Sale 50% Off", time: "12:00:10" }} />
          </View>
          {/* <View style={[styles.element, { marginTop: kDefaultPadding * 1.6 }]}>
            <HeadingComponent
              data={{
                title: "Category",
                text: "More Category",
                onPress: () => { }
              }}
            />
            <ScrollView
              horizontal={true}
              overScrollMode="never"
              style={{ paddingVertical: 12 }}
              showsHorizontalScrollIndicator={false}>
              <CategoryItem data={{
                title: "High Heels", onPress: () => { },
                icon: <Pro_WomanShoeIcon width={25} height={25} />
              }} />
              <CategoryItem data={{
                title: "High Heels", onPress: () => { },
                icon: <Pro_WomanShoeIcon width={25} height={25} />
              }} />
              <CategoryItem data={{
                title: "High Heels", onPress: () => { },
                icon: <Pro_WomanShoeIcon width={25} height={25} />
              }} />
              <CategoryItem data={{
                title: "High Heels", onPress: () => { },
                icon: <Pro_WomanShoeIcon width={25} height={25} />
              }} />
              <CategoryItem data={{
                title: "High Heels", onPress: () => { },
                icon: <Pro_WomanShoeIcon width={25} height={25} />
              }} />
              <CategoryItem data={{
                title: "High Heels", onPress: () => { },
                icon: <Pro_WomanShoeIcon width={25} height={25} />
              }} />
              <CategoryItem data={{
                title: "High Heels", onPress: () => { },
                icon: <Pro_WomanShoeIcon width={25} height={25} />
              }} />
              <CategoryItem data={{
                title: "High Heels", onPress: () => { },
                icon: <Pro_WomanShoeIcon width={25} height={25} />
              }} />

            </ScrollView>
          </View> */}
          <View style={[styles.element, { marginTop: kDefaultPadding * 1.6 }]}>
            <HeadingComponent
              data={{
                title: "New Product",
                text: "See More",
                onPress: () => { }
              }}
            />

            <FlatList
              data={newProducts}
              horizontal={true}
              overScrollMode="never"
              style={{ paddingVertical: 12 }}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <SaleProductItem
                data={item}
                onPress={
                  () => navigation.navigate(SCREENS.DetailScreen,
                    { itemId: item.id })} />}
              keyExtractor={item => item.id} />
          </View>
          <View style={styles.element}>
            <HeadingComponent
              data={{
                title: "Mega Sale",
                text: "See More",
                onPress: () => { }
              }}
            />
            <FlatList
              horizontal={true}
              overScrollMode="never"
              style={{ paddingVertical: 12 }}
              showsHorizontalScrollIndicator={false}
              data={saleProducts}
              renderItem={({ item }) => <SaleProductItem
                data={item}
                onPress={
                  () => navigation.navigate(SCREENS.DetailScreen,
                    { itemId: item.id })}
              />}
              keyExtractor={(item) => item.id} />
          </View>
          <View
            style={[
              styles.element,
              { paddingHorizontal: kDefaultPadding * 0.8 },
            ]}>
            <View style={styles.bannerBody}>
              <ImageBackground
                borderRadius={5}
                resizeMode="cover"
                style={{ width: '100%', height: '100%' }}
                source={require('../../../assets/images/IMG_1.jpg')}>
                <View style={styles.bannerContent}>
                  <TextComponent
                    data={{
                      type: TEXT_TYPES.heading2,
                      text: "Special Offer 25% OFF",
                      style: { color: COLORS.whiteColor }
                    }} />
                  
                </View>
              </ImageBackground>
            </View>
            <View style={styles.recommend}>
              {recommendProducts.map((item, index) => (
                <ProductItem
                  onPress={
                    () => navigation.navigate(SCREENS.DetailScreen,
                      { itemId: item.id })}
                  key={index}
                  data={item} />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.whiteColor,
  },
  body: {
    marginBottom: 60,
    alignItems: 'center',
    flexDirection: 'column',
    paddingVertical: kDefaultPadding * 1.6,
  },
  element: {
    flex: 1,
    paddingHorizontal: kDefaultPadding * 1.6,

    alignSelf: 'stretch',
  },
  bannerBody: {
    flex: 1,
    height: 206,
    borderRadius: 5,
    paddingHorizontal: kDefaultPadding * 0.8,
    alignSelf: 'stretch',
  },
  bannerContent: {
    flex: 1,
    position: 'relative',
    paddingHorizontal: kDefaultPadding * 2.4,
    paddingVertical: kDefaultPadding * 4.8,
  },
  recommend: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignSelf: 'stretch'
  },
});

export default HomeScreen;
