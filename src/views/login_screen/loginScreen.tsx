import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  Pressable,
} from 'react-native';
import { LogoComponent } from '../components/logoComponent';
import {
  COLORS,
  INPUT_TYPE,
  SCREENS,
  TEXT_TYPES,
  kDefaultPadding,
} from '../../helpers/constants';

import InputComponent from '../components/inputComponent';
import ButtonComponent from '../components/buttonComponent';
import { useDispatch, useSelector } from 'react-redux';

import {
  Other_FacebookIcon,
  Other_GoogleIcon,
  SyS_MessageIcon,
  SyS_PasswordIcon,
} from '../../helpers/icons';
import TextComponent from '../components/textComponent';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API_BASE_URL } from '../../configs';
import { login } from '../../stores/reducers/loginReducer';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import Snackbar from 'react-native-snackbar';

const size = Dimensions.get('screen');

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch();
  // const token = useSelector((state: RootState) => state.personalLogin);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {

      if (!email && !password) {
        Snackbar.show({
          text: "Email or password is invalid",
          backgroundColor: COLORS.dangerColor,
          duration: 1500
        })

        return
      }

      axios.post(`${API_BASE_URL}/home/auth/login`, {
        email, password
      }).then(async (res) => {
        console.log('success')
        const data = res.data
        if (data.success) {
          await AsyncStorage.setItem('TOKEN', data.token)
          await dispatch(login({ logged: true, token: data.token }));

          Snackbar.show({
            text: "Logged in successfully",
            backgroundColor: COLORS.primaryColor,
            duration: 1500
          })


          navigation.reset({
            index: 0,
            routes: [{ name: 'HomeTab' }],
          });
        }
      }).catch((err) => {
        Snackbar.show({
          text: "Email or password is incorrect",
          backgroundColor: COLORS.yellowColor,
          duration: 1500
        })
      })
    } catch (error) {
    }
  }

  const checkLogin = async () => {
    const token = await AsyncStorage.getItem("TOKEN")
    if (token) {
      const decodedToken: JwtPayload = jwtDecode(token!);

      const tokenExpiration = decodedToken.exp ?? 0;
      const currentTimestamp: number = Date.now();
      if (tokenExpiration > currentTimestamp) {
        await dispatch(login({ logged: true, token: token }));

        return true;
      }
    }
    return false
  }

  useEffect(() => {
    checkLogin().then((rs) => {
      if (rs) navigation.reset({
        index: 0,
        routes: [{ name: 'HomeTab' }],
      });
    })

  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.logo}>
            <LogoComponent size={72} />
          </View>
          <View style={{ alignItems: 'center' }}>
            <TextComponent
              data={{
                type: TEXT_TYPES.heading4,
                text: "Welcome to Lafyuu",
                style: { color: COLORS.textSecondaryColor }
              }} />
            <TextComponent data={{
              type: TEXT_TYPES.normalTextR,
              text: "Sign in to continue"
            }} />
          </View>
          <View style={styles.inputForms}>
            <View style={styles.marginBottom}>
              <InputComponent
                type="email"
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
            <View style={styles.marginTop}>
              <ButtonComponent
                data={{
                  title: "Sign In",
                  onPress: handleLogin
                }}
              />
            </View>
            <View style={styles.orLine}>
              <View style={styles.orLineBorder} />
              <TextComponent data={{ type: TEXT_TYPES.heading5, text: "OR" }} />
              <View style={styles.orLineBorder} />
            </View>
            <View style={styles.marginTop}>
              <ButtonComponent
                data={{
                  onPress: () => { },
                  title: "Login with Google",
                  icon: <Other_GoogleIcon width={25} height={25} />

                }} />
            </View>
            <View style={styles.marginTop}>
              <ButtonComponent data={{
                onPress: () => { },
                title: "Login with Facebook",
                icon: <Other_FacebookIcon width={25} height={25} />
              }} />
            </View>
          </View>
          <View style={styles.footer}>
            <Pressable onPress={() => { }}>
              <TextComponent data={{ type: TEXT_TYPES.smallLink, text: "Forgot Password?" }} />
            </Pressable>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TextComponent data={{ type: TEXT_TYPES.normalTextR, text: "Don’t have a account? " }} />
              <Pressable
                onPress={() => navigation.push(SCREENS.RegisterScreen)}>
                <TextComponent data={{ type: TEXT_TYPES.smallLink, text: " Register" }} />
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
  orLine: {
    marginVertical: 21,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  orLineBorder: {
    borderWidth: 1,
    width: size.width / 4,
    borderColor: COLORS.borderColor,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginBottom: {
    marginBottom: 8,
  },
  marginTop: {
    marginTop: 8,
  },
});

export default LoginScreen;
