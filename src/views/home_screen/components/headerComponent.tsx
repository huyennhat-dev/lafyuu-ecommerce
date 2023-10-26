import React from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import {
  SyS16_SearchIcon,
  SyS_LoveIcon,
  SyS_NotificationIcon,
} from '../../../helpers/icons';
import IconButtonComponent from '../../components/iconButtonComponent';
import { COLORS, kDefaultPadding } from '../../../helpers/constants';

const HeaderComponent = () => {
  return (
    <View style={styles.body}>
      <View style={styles.inputForm}>
        <SyS16_SearchIcon width={18} height={18} />
        <TextInput
          returnKeyType="search"
          verticalAlign="bottom"
          style={[styles.textInput]}
          placeholder="Search Product"
          onSubmitEditing={() => Alert.alert('You pressed the action button.')}
          placeholderTextColor={COLORS.textPrimaryColor}
        />
      </View>
      <View style={styles.iconBtn}>
        <IconButtonComponent icon={
          <SyS_LoveIcon width={25} height={25} />
        } />
      </View>
      <View style={styles.iconBtn}>
        <IconButtonComponent icon={
          <SyS_NotificationIcon width={25} height={25} />
        } />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    borderBottomWidth: 1,
    justifyContent: 'flex-end',
    padding: kDefaultPadding * 1.6,
    borderColor: COLORS.borderColor,
  },
  inputForm: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 0,
    paddingHorizontal: 16,
    borderColor: COLORS.borderColor,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: COLORS.textPrimaryColor,
  },
  iconBtn: {
    marginLeft: 16,
  },
});

export default HeaderComponent;
