import React from 'react'
import { View, ScrollView, Image } from 'react-native'
import TextComponent from '../../components/textComponent'
import { COLORS, TEXT_TYPES } from '../../../helpers/constants'
import ProductItem from '../../components/productItem'
import { apiData } from '../../../apis/data'

const DetailRecommend = () => {
  return (
    <View style={{ flex: 1 }}>
      <TextComponent data={{
        type: TEXT_TYPES.heading5,
        text: 'You Might Also Like',
        style: { color: COLORS.textSecondaryColor }
      }} />
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} overScrollMode="never" style={{ flex: 1, flexDirection: 'row' }}>
        {apiData.map((item, index) => <ProductItem
          key={index}
          onPress={() => { }}
          data={{
            id: item.id,
            image: item.image,
            discount: item.discount,
            price: item.price,
            star: item.star,
            title: item.title
          }}
        />)}
      </ScrollView>
    </View>
  )
}

export default DetailRecommend
