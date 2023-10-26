import React from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS } from '../../helpers/constants';

export const LogoComponent = ({ size }: { size: number }) => {
  const sizeRatio = 4 / 10;
  const radiusRatio = 2.2 / 10;
  return (
    <View
      style={[
        styles.container,
        { width: size, height: size, borderRadius: radiusRatio * size },
      ]}>
      <View
        style={[
          styles.body,
          {
            width: size * sizeRatio,
            height: size * sizeRatio,
            borderRadius: (radiusRatio * size) / 3,
          },
        ]}>
        <View
          style={[
            styles.item,
            {
              width: (size * sizeRatio) / 2.5,
              height: (size * sizeRatio) / 2.5,
              borderRadius: (radiusRatio * size) / 10,
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryColor,
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '45 deg' }],
    backgroundColor: COLORS.whiteColor,
  },
  item: {
    backgroundColor: COLORS.primaryColor,
  },
});
