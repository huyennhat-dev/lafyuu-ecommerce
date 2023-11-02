import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  COLORS,
  INPUT_TYPE,
  SCREENS,
  TEXT_TYPES,
  kDefaultPadding,
} from '../../helpers/constants';
import { LogoComponent } from '../components/logoComponent';
import ButtonComponent from '../components/buttonComponent';
import InputComponent from '../components/inputComponent';
import {
  SyS_MessageIcon,
  SyS_PasswordIcon,
  SyS_UserIcon,
} from '../../helpers/icons';
import TextComponent from '../components/textComponent';
import axios from 'axios';
import { login } from '../../stores/reducers/loginReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { RootState } from '../../stores/configureStore';
import { API_BASE_URL } from '../../configs';
import randomCatAvatar from '../../models/user.model';

const RegisterScreen = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleRegister = async () => {
    try {
      axios.post(`${API_BASE_URL}/home/auth/register`, {
        name, email, password, photo: randomCatAvatar()
      }).then(async (res) => {
        console.log('success')
        const data = res.data
        if (data.success) {
          await AsyncStorage.setItem('TOKEN', data.token)
          await dispatch(login({ logged: true, token: data.token }));

          navigation.reset({
            index: 0,
            routes: [{ name: 'HomeTab' }],
          });
        }
      }).catch((err) => {
        console.log(err)
      })
    } catch (error) {
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.logo}>
            <LogoComponent size={72} />
          </View>
          <View style={{ alignItems: 'center' }}>
            <TextComponent data={{
              type: TEXT_TYPES.heading4,
              text: "Let’s Get Started"
            }} />
            <TextComponent data={{
              type: TEXT_TYPES.normalTextR,
              text: "Create an new account"
            }} />
          </View>
          <View style={styles.inputForms}>
            <View style={styles.marginBottom}>
              <InputComponent
                type={INPUT_TYPE.person}
                placeholder="Full Name"
                onTextChange={(val: string) => setName(val)}>
                <SyS_UserIcon width={25} height={25} fill={COLORS.defaultColor} />
              </InputComponent>
            </View>
            <View style={styles.marginBottom}>
              <InputComponent
                type={INPUT_TYPE.email}
                placeholder="Your Email"
                onTextChange={(val: string) => setEmail(val)}>
                <SyS_MessageIcon width={25} height={25} />
              </InputComponent>
            </View>
            <View style={styles.marginBottom}>
              <InputComponent
                type={INPUT_TYPE.password}
                placeholder="Password"
                onTextChange={(val: string) => setPassword(val)}>
                <SyS_PasswordIcon width={25} height={25} />
              </InputComponent>
            </View>
            <View style={styles.marginBottom}>
              <InputComponent
                type={INPUT_TYPE.password}
                placeholder="Password Again"
                onTextChange={(val: string) => setPassword(val)}>
                <SyS_PasswordIcon width={25} height={25} />
              </InputComponent>
            </View>
            <View style={styles.marginTop}>
              <ButtonComponent data={{ title: "Sign Up", onPress: handleRegister }} />
            </View>
          </View>
          <View >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TextComponent data={{ type: TEXT_TYPES.normalTextR, text: "Have a account? " }} />
              <Pressable
                onPress={() => navigation.goBack()}>
                <TextComponent data={{ type: TEXT_TYPES.smallLink, text: " Sign In" }} />
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.whiteColor,
  },
  body: {
    paddingVertical: 62,
    alignItems: 'center',
    flexDirection: 'column',
    paddingHorizontal: kDefaultPadding * 1.6,
  },
  logo: {
    marginVertical: 16,
  },
  inputForms: {
    marginVertical: 28,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  marginBottom: {
    marginBottom: 8,
  },
  marginTop: {
    marginTop: 8,
  },
});
export default RegisterScreen;
