import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../stores/configureStore';

const AccountScreen = () => {

  const state = useSelector((state: RootState) => state.personalInfo);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>{state.email}</Text>
          <Text>{state.name}</Text>
          <Text>{state.photo}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;
