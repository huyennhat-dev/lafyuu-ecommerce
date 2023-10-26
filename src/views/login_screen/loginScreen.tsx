import React from 'react';
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

import {
  Other_FacebookIcon,
  Other_GoogleIcon,
  SyS_MessageIcon,
  SyS_PasswordIcon,
} from '../../helpers/icons';
import TextComponent from '../components/textComponent';

const size = Dimensions.get('screen');

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const handleEmailChange = (val: string) => {
    console.log('Email Value:', val);
  };
  const handlePasswordChange = (val: string) => {
    console.log('Password Value:', val);
  };
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
                onTextChange={handleEmailChange}>
                <SyS_MessageIcon width={25} height={25} />
              </InputComponent>
            </View>
            <View style={styles.marginBottom}>
              <InputComponent
                type={INPUT_TYPE.password}
                placeholder="Password"
                onTextChange={handlePasswordChange}>
                <SyS_PasswordIcon width={25} height={25} />
              </InputComponent>
            </View>
            <View style={styles.marginTop}>
              <ButtonComponent
                data={{
                  title: "Sign In",
                  onPress: () => navigation.push('HomeTab')
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
