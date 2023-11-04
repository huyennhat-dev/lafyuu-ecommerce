import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, NativeScrollEvent, NativeSyntheticEvent, Dimensions } from 'react-native';
import { COLORS, SCREENS, kDefaultPadding } from '../../helpers/constants';
import ProductItem from '../components/productItem';
import { ProductModel } from '../../models/product.model';
import { SyS16_SearchIcon, SyS_MicIcon } from '../../helpers/icons';
import IconButtonComponent from '../components/iconButtonComponent';
import axios from 'axios';
import { API_BASE_URL } from '../../configs';
import { ActivityIndicator } from 'react-native';




const ExploreScreen = ({ navigation }: { navigation: any }) => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [value, setValue] = useState("")
  const [page, setPage] = useState(1)
  const [loadingMore, setLoadingMore] = useState(false);
  const [loading, setLoading] = useState(false);


  const searchProduct = async () => {
    setLoading(true);
    axios.get(`${API_BASE_URL}/home/product/search/search?key=${value}&page=${page}`).then(rs => {
      const data = rs.data.products.map((data: any) => ({
        id: data._id,
        name: data.name,
        photos: data.photos,
        price: data.price,
        sale: data.sale,
        star: data.star
      }));
      setProducts(data);
      setLoading(false);
    }).catch(error => {
      setLoading(false);
    });
  }
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;

    if (
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20 &&
      !loadingMore

    ) {
      setLoadingMore(true);
      loadMoreData();
    }
  };

  const loadMoreData = async () => {
    const response = await axios.get(
      `${API_BASE_URL}/home/product/search/search?key=${value}&page=${page + 1}`
    );

    const newProducts = response.data.products.map((data: any) => ({
      id: data._id,
      name: data.name,
      photos: data.photos,
      price: data.price,
      sale: data.sale,
      star: data.star
    }));

    setProducts((prevProducts) => [...prevProducts, ...newProducts]);

    setPage((prevPage) => prevPage + 1);

    setLoadingMore(false);
  };

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView overScrollMode="never"
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
      >

        <View style={styles.headerBody}>
          <View style={styles.headerInputForm}>
            <SyS16_SearchIcon width={18} height={18} />
            <TextInput
              value={value}
              returnKeyType="search"
              verticalAlign="bottom"
              style={[styles.headerTextInput]}
              placeholder="Enter keyword"
              onSubmitEditing={searchProduct}
              placeholderTextColor={COLORS.textPrimaryColor}
              onChangeText={text => setValue(text)}
            />
          </View>
          <View style={styles.iconBtn}>
            <IconButtonComponent icon={
              <SyS_MicIcon width={25} height={25} />
            } />
          </View>

        </View>
        {loading ? (
          <View style={{
            flex: 1,
            marginTop: Dimensions.get('window').height / 3,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <ActivityIndicator size={50} color={COLORS.primaryColor} />
          </View>
        ) : (
          <View style={styles.body}>

            <View style={styles.productBody}>
              {
                products.map((item, index) => (
                  <ProductItem
                    onPress={() =>
                      navigation.navigate(SCREENS.DetailScreen, { itemId: item.id })
                    }
                    key={index}
                    data={item}
                  />
                ))
              }
            </View>
            {loadingMore && <View style={{
              flex: 1,
              height: 100,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ActivityIndicator size={50} color={COLORS.primaryColor} />
            </View>}
          </View>

        )}

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: COLORS.whiteColor,
  },
  body: {
    marginBottom: 60,
    alignItems: 'center',
    flexDirection: 'column',
    paddingHorizontal: 8
  },
  productBody: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignSelf: 'stretch'
  },
  headerBody: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    borderBottomWidth: 1,
    justifyContent: 'flex-end',
    padding: kDefaultPadding * 1.6,
    borderColor: COLORS.borderColor,
  },
  headerInputForm: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 0,
    paddingHorizontal: 16,
    borderColor: COLORS.borderColor,
  },
  headerTextInput: {
    flex: 1,
    paddingLeft: 10,
    color: COLORS.textPrimaryColor,
  },
  iconBtn: {
    marginLeft: 16,
  },
})
export default ExploreScreen;
