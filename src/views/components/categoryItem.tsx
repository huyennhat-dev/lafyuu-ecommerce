import React, { ReactElement } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import TextComponent from './textComponent';
import { COLORS, TEXT_TYPES } from '../../helpers/constants';

type categoryItemProps = {
  icon: ReactElement,
  title: string,
  onPress: () => void
}

const CategoryItem = ({ data }: { data: categoryItemProps }) => {
  const { icon, title, onPress } = data;
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.body}>{icon}</View>
        <TextComponent data={{
          type: TEXT_TYPES.smallCaptionR,
          text: title
        }} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    marginRight: 12,
    alignItems: 'center',
  },
  body: {
    width: 70,
    height: 70,
    marginBottom: 8,
    borderWidth: 1,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.primaryColor,
  },
});

export default CategoryItem;
