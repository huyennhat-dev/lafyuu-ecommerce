import React from 'react';
import { Image, StyleSheet, View, Pressable, Dimensions } from 'react-native';
import {
  COLORS,
  SCREEN_WIDTH,
  TEXT_TYPES,
  kDefaultPadding,
} from '../../helpers/constants';
import TextComponent from './textComponent';
import RatingBar from './ratingBar';
import { ProductModel } from '../../models/product.model';
import FastImage from 'react-native-fast-image';

const screenWidth = Dimensions.get('screen').width;
let itemWidth;

if (screenWidth >= SCREEN_WIDTH.desktop) {
  itemWidth = (screenWidth - 6 * (kDefaultPadding * 1.6)) / 5;
} else if (screenWidth >= SCREEN_WIDTH.tablet) {
  itemWidth = (screenWidth - 4 * (kDefaultPadding * 1.6)) / 3;
} else {
  itemWidth = (screenWidth - 3 * (kDefaultPadding * 1.6)) / 2;
}
const ProductItem = ({ data, onPress }: { data: ProductModel, onPress: () => void }) => {
  const { photos, name, sale, price, star } = data;

  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <View style={styles.body}>
          <Pressable onPress={onPress}>
            <View>
              <FastImage
                style={[styles.image, styles.mb8]}
                source={{ uri: `${photos![0]}` }}
                resizeMode="cover"
              />
              <View style={[styles.mb5]}>
                <TextComponent
                  data={{
                    maxLine: 2,
                    type: TEXT_TYPES.heading6,
                    text: name, style: {
                      color: COLORS.textSecondaryColor
                    }
                  }} />
              </View>
            </View>
          </Pressable>
          <View style={styles.mb8}>
            <RatingBar
              data={{
                star: star || 0,
                size: 12,
                press: false,
              }}
            />
          </View>
          <View style={[styles.mb5]}>
            <TextComponent data={{
              maxLine: 2,
              type: TEXT_TYPES.mediumTextB,
              style: { color: COLORS.primaryColor },
              text: ` ${(price! - price! * sale!).toFixed(0)}` + ' đ'
            }} />
          </View>

          {sale ? (
            <View style={[styles.mb5, { flexDirection: 'row' }]}>
              <TextComponent
                data={{
                  maxLine: 2,
                  type: TEXT_TYPES.smallCaptionR,
                  style: { textDecorationLine: 'line-through', marginRight: 7 },
                  text: `${price}` + ' đ'
                }} />
              <TextComponent
                data={{
                  type: TEXT_TYPES.smallCaptionB,
                  text: `${(sale! * 100).toFixed(0)}% Off`,
                  style: { color: COLORS.dangerColor }
                }} />
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: itemWidth + 16,
    height: itemWidth * 1.7,
    paddingHorizontal: 8,
    marginTop: 16,
  },
  wrap: {
    width: itemWidth,
    height: itemWidth * 1.7,
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'stretch',
    borderColor: COLORS.borderColor,
    padding: kDefaultPadding * 1.6,
  },

  body: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
  },
  image: {
    width: itemWidth - 2 * (kDefaultPadding * 1.6),
    height: itemWidth - 2 * (kDefaultPadding * 1.6),
    borderRadius: 5,
    borderColor: COLORS.borderColor,
    borderWidth: 1
  },
  mb8: {
    marginBottom: 8,
  },
  mb5: {
    marginBottom: 5,
  },
});

export default ProductItem;
