import React from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import {
  COLORS,
  INPUT_TYPE,
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

const RegisterScreen = ({ navigation }: { navigation: any }) => {
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
                onTextChange={handleEmailChange}>
                <SyS_UserIcon width={25} height={25} />
              </InputComponent>
            </View>
            <View style={styles.marginBottom}>
              <InputComponent
                type={INPUT_TYPE.email}
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
            <View style={styles.marginBottom}>
              <InputComponent
                type={INPUT_TYPE.password}
                placeholder="Password Again"
                onTextChange={handlePasswordChange}>
                <SyS_PasswordIcon width={25} height={25} />
              </InputComponent>
            </View>
            <View style={styles.marginTop}>
              <ButtonComponent data={{ title: "Sign Up", onPress: () => { } }} />
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
