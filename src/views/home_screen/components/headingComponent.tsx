import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import TextComponent from '../../components/textComponent';
import { COLORS, TEXT_TYPES } from '../../../helpers/constants';

const HeadingComponent = ({ data }: { data: { title: string, text: string, onPress: () => void } }) => {
  const { title, text, onPress } = data;
  return (
    <View style={styles.body}>
      <TextComponent
        data={{
          type: TEXT_TYPES.heading5,
          style: { color: COLORS.textSecondaryColor }, text: title
        }} />
      <Pressable onPress={onPress}>
        <TextComponent data={{ type: TEXT_TYPES.normalLink, text: text }} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default HeadingComponent;
