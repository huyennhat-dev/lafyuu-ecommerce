import React from 'react';
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



const HomeScreen = ({ navigation }: { navigation: any }) => {
  const products: ProductModel[] = [];

  apiData.forEach(data => {
    const product: ProductModel = {
      id: data.id,
      title: data.title,
      image: data.image,
      star: data.star,
      price: data.price,
      discount: data.discount,
    };
    products.push(product);
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false}>
        <HeaderComponent />
        <View style={styles.body}>
          <View style={styles.element}>
            <BannerComponent data={{ title: "Super Flash Sale 50% Off", time: "12:00:10" }} />
          </View>
          <View style={[styles.element, { marginTop: kDefaultPadding * 1.6 }]}>
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
          </View>
          <View style={styles.element}>
            <HeadingComponent
              data={{
                title: "Flash Sale",
                text: "See More",
                onPress: () => { }
              }}
            />

            <FlatList
              data={products}
              horizontal={true}
              overScrollMode="never"
              style={{ paddingVertical: 12 }}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <SaleProductItem data={item} />}
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
              data={products}
              renderItem={({ item }) => <SaleProductItem data={item} />}
              keyExtractor={item => item.id} />
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
                source={require('../../../assets/images/IMG_1.png')}>
                <View style={styles.bannerContent}>
                  <TextComponent
                    data={{
                      type: TEXT_TYPES.heading2,
                      text: "Recommended Product",
                      style: { color: COLORS.whiteColor }
                    }} />
                  <TextComponent
                    data={{
                      type: TEXT_TYPES.normalTextR,
                      text: "We recommend the best for you",
                      style: { color: COLORS.whiteColor }
                    }} />
                </View>
              </ImageBackground>
            </View>
            <View style={styles.recommend}>
              {products.map(item => (
                <ProductItem
                  onPress={() => navigation.navigate(SCREENS.DetailScreen, { itemId: 123 })}
                  key={item.id}
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
  },
});

export default HomeScreen;
