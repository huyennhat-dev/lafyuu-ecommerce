import React, { ReactElement } from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { TEXT_STYLES, TEXT_TYPES } from '../../helpers/constants';

type textProps = {

  type: string,
  maxLine?: number,
  style?: TextStyle,
  text?: string;

}
const TextComponent = ({ data }: { data: textProps }) => {
  const { text, type, maxLine, style } = data;

  if (TEXT_TYPES[type as keyof typeof TEXT_TYPES]) {
    const defaultStyle = TEXT_STYLES[type as keyof typeof TEXT_TYPES];

    const combinedStyle: TextStyle = {
      ...defaultStyle,
      ...style,

    };
    return (
      <Text
        numberOfLines={maxLine ? maxLine : 0}
        style={combinedStyle}>
        {text}
      </Text>
    );
  } else {
    return <Text>{text}</Text>;
  }
};

export default TextComponent;
