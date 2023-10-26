import React, { ReactElement } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, TEXT_TYPES } from '../../helpers/constants';
import TextComponent from './textComponent';

type ButtonProps = {
  title: string;
  onPress: () => void;
  icon?: ReactElement
}

const ButtonComponent = ({ data }: { data: ButtonProps }) => {
  const { onPress, title, icon } = data;

  return (
    <TouchableOpacity
      style={[styles.button, icon ? styles.iconBtn : styles.normalBtn]}
      onPress={onPress}>
      <View style={{ zIndex: 9, left: 10 }}>{icon}</View>

      <View style={styles.text}>
        <TextComponent
          data={{
            text: title,
            type: TEXT_TYPES.mediumTextB,
            style: {
              color: icon ? COLORS.textPrimaryColor : COLORS.whiteColor
            }
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 55,
    padding: 16,
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  normalBtn: {
    borderColor: COLORS.primaryColor,
    backgroundColor: COLORS.primaryColor,
  },
  iconBtn: {
    borderColor: COLORS.borderColor,
    backgroundColor: COLORS.whiteColor,
  },
  text: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ButtonComponent;
