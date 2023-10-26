import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Pressable } from 'react-native';
import { COLORS, INPUT_TYPE, TEXT_STYLES } from '../../helpers/constants';
import { SyS_HideIcon, SyS_ShowIcon } from '../../helpers/icons';

const InputComponent = (props: any) => {
  const { type, children, placeholder } = props;
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showValue, setShowValue] = useState(false);

  const onChangeTextInput = (val: string) => {
    setValue(val);
    if (props.onTextChange) {
      props.onTextChange(val);
    }
  };

  return (
    <View
      style={[
        styles.body,
        { borderColor: isFocused ? COLORS.primaryColor : COLORS.borderColor },
      ]}>
      <View style={styles.suffixIcon}>{children}</View>
      <TextInput
        value={value}
        selectionColor={COLORS.primaryColor}
        spellCheck={true}
        textAlignVertical='bottom'
        style={[
          styles.textInput,
          value ? TEXT_STYLES.mediumTextB : TEXT_STYLES.mediumTextR,
        ]}
        placeholder={placeholder}
        keyboardType="default"
        secureTextEntry={type === INPUT_TYPE.password ? !showValue : false}
        placeholderTextColor={COLORS.textPrimaryColor}
        onChangeText={text => onChangeTextInput(text)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {type == INPUT_TYPE.password && (
        <Pressable
          style={styles.suffixIcon}
          onPress={() => setShowValue(!showValue)}>
          {showValue ? (
            <SyS_HideIcon width={25} height={25} />
          ) : (
            <SyS_ShowIcon width={25} height={25} />
          )}
        </Pressable>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    height: 48,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  suffixIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    marginLeft: 5,
  },
});
export default InputComponent;
