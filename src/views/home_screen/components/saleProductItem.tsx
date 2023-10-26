import React from 'react';
import { Image, StyleSheet, View, Pressable } from 'react-native';
import { COLORS, TEXT_TYPES, kDefaultPadding } from '../../../helpers/constants';
import TextComponent from '../../components/textComponent';
import { ProductModel } from '../../../models/product.model';

const SaleProductItem = ({ data }: { data: ProductModel }) => {
  const { image, title, discount, price } = data;

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Pressable onPress={() => { }}>
          <View>
            <Image
              style={[styles.image, styles.mb8]}
              source={{ uri: image }}
              resizeMode="cover"
            />
            <View style={[styles.mb8]}>
              <TextComponent
                data={{
                  maxLine: 2,
                  type: TEXT_TYPES.heading6,
                  text: title, style: {
                    color: COLORS.textSecondaryColor
                  }
                }} />
            </View>
          </View>
        </Pressable>
        <View style={[styles.mb8]}>
          <TextComponent data={{
            maxLine: 2,
            type: TEXT_TYPES.smallLink,
            text: '$' + ` ${(price - price * discount).toFixed(2)}`
          }} />
        </View>
        <View style={[styles.mb8, { flexDirection: 'row' }]}>
          <TextComponent
            data={{
              maxLine: 2,
              type: TEXT_TYPES.smallCaptionR,
              style: { textDecorationLine: 'line-through', marginRight: 7 },
              text: '$' + `${price}`
            }} />
          <TextComponent
            data={{
              type: TEXT_TYPES.smallCaptionB,
              text: `${discount * 100}% Off`,
              style:{color:COLORS.dangerColor}
            }} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 141,
    height: 141 * 1.7,
    borderWidth: 1,
    marginRight: 16,
    borderRadius: 5,
    marginBottom: 16,
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
    width: 141 - 2 * (kDefaultPadding * 1.6),
    height: 141 - 2 * (kDefaultPadding * 1.6),
    borderRadius: 5,
  },
  mb8: {
    marginBottom: 8,
  },
});

export default SaleProductItem;
