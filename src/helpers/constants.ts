import {StyleSheet} from 'react-native';

export const SCREENS = {
  LoginScreen: 'login-screen',
  RegisterScreen: 'register-screen',
  HomeScreen: 'home-screen',
  ExploreScreen: 'explore-screen',
  CartScreen: 'cart-screen',
  OfferScreen: 'offer-screen',
  AccountScreen: 'account-screen',
  DetailScreen: 'detail-screen',
};

export const INPUT_TYPE = {
  email: 'email',
  person: 'person',
  password: 'password',
  phoneNumber: 'phone-number',
};

export const kDefaultPadding = 10;

export const COLORS = {
  whiteColor: '#FFFFFF',
  primaryColor: '#40BFFF',
  borderColor: '#EBF0FF',
  defaultColor: '#9098B1',
  textPrimaryColor: '#9098B1',
  textSecondaryColor: '#223263',
  dangerColor: '#FB7181',
  yellowColor: '#FFC833',
};

export const SCREEN_WIDTH = {
  phone: 320,
  tablet: 600,
  desktop: 720,
};

export const TEXT_TYPES = {
  heading1: 'heading1',
  heading2: 'heading2',
  heading3: 'heading3',
  heading4: 'heading4',
  heading5: 'heading5',
  heading6: 'heading6',
  largeTextB: 'largeTextB',
  largeTextR: 'largeTextR',
  mediumTextB: 'mediumTextB',
  mediumTextR: 'mediumTextR',
  normalTextB: 'normalTextB',
  normalTextR: 'normalTextR',
  largeCaptionB: 'largeCaptionB',
  largeCaptionR: 'largeCaptionR',
  smallCaptionB: 'smallCaptionB',
  smallCaptionR: 'smallCaptionR',
  normalLink: 'normalLink',
  smallLink: 'smallLink',
};

export const TEXT_STYLES = StyleSheet.create({
  heading1: {
    fontSize: 32,
    letterSpacing: 0.5,
    lineHeight: 32 * 1.5,
    fontFamily: 'Poppins-Bold',
    color: COLORS.textPrimaryColor,
  },
  heading2: {
    fontSize: 24,
    letterSpacing: 0.5,
    lineHeight: 24 * 1.5,
    fontFamily: 'Poppins-Bold',
    color: COLORS.textPrimaryColor,
  },
  heading3: {
    fontSize: 20,
    letterSpacing: 0.5,
    lineHeight: 20 * 1.5,
    fontFamily: 'Poppins-Bold',
    color: COLORS.textPrimaryColor,
  },
  heading4: {
    fontSize: 16,
    letterSpacing: 0.5,
    lineHeight: 16 * 1.5,
    fontFamily: 'Poppins-Bold',
    color: COLORS.textPrimaryColor,
  },
  heading5: {
    fontSize: 14,
    letterSpacing: 0.5,
    lineHeight: 14 * 1.5,
    fontFamily: 'Poppins-Bold',
    color: COLORS.textPrimaryColor,
  },
  heading6: {
    fontSize: 10,
    letterSpacing: 0.5,
    lineHeight: 10 * 1.5,
    fontFamily: 'Poppins-Bold',
    color: COLORS.textPrimaryColor,
  },
  largeTextB: {
    fontSize: 16,
    letterSpacing: 0.5,
    lineHeight: 16 * 1.8,
    fontFamily: 'Poppins-Bold',
    color: COLORS.textPrimaryColor,
  },
  largeTextR: {
    fontSize: 16,
    letterSpacing: 0.5,
    lineHeight: 16 * 1.8,
    fontFamily: 'Poppins-Regular',
    color: COLORS.textPrimaryColor,
  },
  mediumTextB: {
    fontSize: 14,
    letterSpacing: 0.5,
    lineHeight: 14 * 1.8,
    fontFamily: 'Poppins-Bold',
    color: COLORS.textPrimaryColor,
  },
  mediumTextR: {
    fontSize: 14,
    letterSpacing: 0.5,
    lineHeight: 14 * 1.8,
    fontFamily: 'Poppins-Regular',
    color: COLORS.textPrimaryColor,
  },
  normalTextB: {
    fontSize: 12,
    letterSpacing: 0.5,
    lineHeight: 12 * 1.8,
    fontFamily: 'Poppins-Bold',
    color: COLORS.textPrimaryColor,
  },
  normalTextR: {
    fontSize: 12,
    letterSpacing: 0.5,
    lineHeight: 12 * 1.8,
    fontFamily: 'Poppins-Regular',
    color: COLORS.textPrimaryColor,
  },
  largeCaptionB: {
    fontSize: 12,
    letterSpacing: 0.5,
    lineHeight: 12 * 1.5,
    fontFamily: 'Poppins-Bold',
    color: COLORS.textPrimaryColor,
  },
  largeCaptionR: {
    fontSize: 12,
    letterSpacing: 0.5,
    lineHeight: 12 * 1.5,
    fontFamily: 'Poppins-Regular',
    color: COLORS.textPrimaryColor,
  },
  smallCaptionB: {
    fontSize: 10,
    letterSpacing: 0.5,
    lineHeight: 10 * 1.5,
    fontFamily: 'Poppins-Bold',
    color: COLORS.textPrimaryColor,
  },
  smallCaptionR: {
    fontSize: 10,
    letterSpacing: 0.5,
    lineHeight: 10 * 1.5,
    fontFamily: 'Poppins-Regular',
    color: COLORS.textPrimaryColor,
  },
  normalLink: {
    fontSize: 14,
    letterSpacing: 0.5,
    lineHeight: 14 * 1.5,
    fontFamily: 'Poppins-Bold',
    color: COLORS.primaryColor,
  },
  smallLink: {
    fontSize: 12,
    letterSpacing: 0.5,
    lineHeight: 12 * 1.5,
    fontFamily: 'Poppins-Bold',
    color: COLORS.primaryColor,
  },
});
