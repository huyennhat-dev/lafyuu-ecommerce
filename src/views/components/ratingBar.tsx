import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { SyS_StarIcon } from '../../helpers/icons';
import { COLORS, TEXT_TYPES } from '../../helpers/constants';
import TextComponent from './textComponent';

type RatingBarProps = {
  star: number;
  onPress?: (value: number) => void;
  press: boolean;
  size: number;
}

const RatingBar = ({ data }: { data: RatingBarProps }) => {
  const { star, onPress, press, size } = data;

  const [rating, setRating] = useState(star || 5);

  const handleStarPress = (value: number) => {
    onPress ? onPress(value) : null;
    setRating(value);
  };

  const renderStarColor = (value: number) => {
    const fractionalPart = rating - Math.floor(rating);
    if (value < Math.floor(rating) + 1) {
      return COLORS.yellowColor;
    } else if (value === Math.floor(rating) + 1 && fractionalPart >= 0.5) {
      return COLORS.yellowColor;
    }
    return COLORS.defaultColor;
  };

  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map((value) =>
        press ? (
          <Pressable
            key={value}
            onPress={() => handleStarPress(value)}
            style={{ marginRight: (size / 10) * 2.5 }}
          >
            <SyS_StarIcon width={size} height={size} fill={renderStarColor(value)} />
          </Pressable>
        ) : (
          <View key={value} style={{ marginRight: (size / 10) * 2 }}>
            <SyS_StarIcon width={size} height={size} fill={renderStarColor(value)} />
          </View>
        )
      )}
      {press ? (
        <TextComponent data={{ type: TEXT_TYPES.heading5, style: { color: COLORS.defaultColor }, text: `  ${rating}/5` }} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default RatingBar;
