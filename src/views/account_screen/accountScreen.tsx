import React, { ReactElement } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../stores/configureStore';
import { COLORS, SCREENS, TEXT_TYPES, kDefaultPadding } from '../../helpers/constants';
import TextComponent from '../components/textComponent';
import { Alert_AlertIcon, Birthday, Change, Email, Gender, Phone, Profile, Right, SyS_BagIcon, SyS_BankIcon, SyS_CreditCardIcon, SyS_LeftIcon, SyS_UserIcon } from '../../helpers/icons';
import FastImage from 'react-native-fast-image';
import ButtonComponent from '../components/buttonComponent';
import { Alert } from 'react-native';
import { logout } from '../../stores/reducers/loginReducer';
import { removeInfo } from '../../stores/reducers/infoReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { clearCart } from '../../stores/reducers/cartReducer';

type itemProps = {
  title: string,
  onPress: () => void,
  icon: ReactElement
}

const AccountItem = ({ icon, onPress, title }: itemProps) => {
  return (
    <TouchableOpacity style={styles.itemBody} onPress={onPress}>
      {icon}
      <TextComponent data={{
        type: TEXT_TYPES.heading4,
        text: title, style: { color: COLORS.textSecondaryColor, marginLeft: 16 }
      }} />
    </TouchableOpacity>
  )
}


const AccountScreen = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch()
  const state = useSelector((state: RootState) => state.personalInfo);
  const logged = useSelector((state: RootState) => state.personalLogin).logged;

  const handleLogout = () => {
    Alert.alert(
      'Confirm',
      'Do you want to log out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            await AsyncStorage.removeItem('TOKEN')
            dispatch(logout())
            dispatch(removeInfo())
            dispatch(clearCart())

            navigation.reset({
              index: 0,
              routes: [{ name: 'HomeTab' }],
            });
          },
        },
      ]
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {logged ? <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <View style={styles.header}>
            <View style={styles.imageBody}>
              <FastImage style={styles.image} source={{ uri: state.photo }} resizeMode='cover' />
            </View>
            <View>
              <TextComponent data={{
                type: TEXT_TYPES.heading3,
                text: state.name,
                maxLine: 2,
                style: { color: COLORS.textSecondaryColor, lineHeight: 25 }
              }} />
              <TextComponent data={{
                type: TEXT_TYPES.mediumTextR,
                text: "@huyennhat",
                style: { color: COLORS.textPrimaryColor, lineHeight: 16 }
              }} />
            </View>
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <AccountItem
              title='Profile'
              onPress={() => { }}
              icon={<SyS_UserIcon width={25} height={25} fill={COLORS.primaryColor} />}
            />
            <AccountItem
              title='Order'
              onPress={() => { }}
              icon={<SyS_BagIcon width={25} height={25} stroke={COLORS.primaryColor} />}
            />

            <AccountItem
              title='Payment'
              onPress={() => { }}
              icon={<SyS_CreditCardIcon width={25} height={25} stroke={COLORS.primaryColor} />}
            />
          </View>

        </View>

      </ScrollView>
        :
        <View
          style={[styles.body,
          { alignItems: 'center', justifyContent: 'center' }
          ]}
        >
          <Alert_AlertIcon width={200} height={200} fill={COLORS.yellowColor} />
          <TextComponent data={{
            type: TEXT_TYPES.heading2, text: "You are not logged in, please log in now",
            style: { color: COLORS.textSecondaryColor, textAlign: 'center' }
          }} />
          <TouchableOpacity onPress={() => navigation.navigate(SCREENS.LoginScreen)}>
            <TextComponent data={{
              type: TEXT_TYPES.mediumTextR, text: "Click here to log in",
              style: { color: COLORS.textSecondaryColor, textAlign: 'center', marginTop: 20 }
            }} />
          </TouchableOpacity>
        </View>}

      {logged && <View style={styles.logoutBtn}>
        <ButtonComponent data={{ onPress: handleLogout, title: "Logout" }} />
      </View>}
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.whiteColor,
  },
  body: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    padding: 16,
    marginBottom: 126,
    marginTop: 40,

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 16,
    // borderBottomWidth:1,
    // borderColor: COLORS.borderColor
  },
  imageBody: {
    borderWidth: 3,
    marginRight: 16,
    borderRadius: 100,
    borderColor: COLORS.primaryColor
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 100,
    margin: 5
  },

  itemBody: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16
  },
  logoutBtn: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 60,
    padding: 26
  },
});
