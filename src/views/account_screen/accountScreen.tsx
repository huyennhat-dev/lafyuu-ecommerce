import React from 'react';
import {Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../stores/configureStore';
import IconButtonComponent from '../components/iconButtonComponent';
import { COLORS, TEXT_TYPES, kDefaultPadding } from '../../helpers/constants';
import TextComponent from '../components/textComponent';
import { Birthday, Change, Email, Gender, Phone, Profile, Right, SyS_LeftIcon } from '../../helpers/icons';
import { Image } from 'react-native-svg';


const AccountScreen = ({ navigation }: { navigation: any}) => {

  const state = useSelector((state: RootState) => state.personalInfo);

  return (
    <SafeAreaView>
      
      <ScrollView>
        <View style={styles.body}>
            <Pressable onPress={() => navigation.goBack()} >
                <IconButtonComponent icon={
                    <SyS_LeftIcon width={25} height={25} stroke={COLORS.defaultColor} />
                } />
            </Pressable>
            <View style={styles.textForm}>
              <TextComponent data={{
                type: TEXT_TYPES.heading4,
                maxLine: 1,
                style: { color: COLORS.textSecondaryColor },
                text: "PROFILE",
              }} />
            </View>
        </View>
        {/* <View>
          <Text>{state.email}</Text>
          <Text>{state.name}</Text>
          <Text>{state.photo}</Text>
        </View> */}
          <View style={styles.profile}>
            <Profile/>
            <View style={styles.textForm}>
            <Text style={styles.textProfile}>{state.name}</Text>
            <Text style={{color:'#DCDEE3'}}>{state.email}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', padding: 20}}>
            <Gender style={{marginRight:16}}/>
            <Text style={styles.formProfile}>Gender</Text>
            <Text style={{color:'#DCDEE3', fontWeight:'bold'}}>Male</Text>
            <Right style={{marginLeft: 16}}/>
              
          </View>
          <View style={{flexDirection: 'row', padding: 20}}>
            <Birthday style={{marginRight:16}}/>
            <Text style={styles.formProfile}>Birthday</Text>
            <Text style={{color:'#DCDEE3', fontWeight:'bold'}}>12-12-2000</Text>
            <Right style={{marginLeft: 16}}/>
          </View>
          <View style={{flexDirection: 'row', padding: 20}}>
            <Email style={{marginRight:16}}/>
            <Text style={styles.formProfile}>Email</Text>
            <Text style={{color:'#DCDEE3', fontWeight:'bold'}}>{state.email}</Text>
            <Right style={{marginLeft: 16}}/>
          </View>
          <View style={{flexDirection: 'row', padding: 20}}>
            <Phone style={{marginRight:16}}/>
            <Text style={styles.formProfile}>Phone number</Text>
            <Text style={{color:'#DCDEE3', fontWeight:'bold'}}>(+84)935194581</Text>
            <Right style={{marginLeft: 16}}/>
          </View>
          <View style={{flexDirection: 'row', padding: 20}}>
            <Change style={{marginRight:16}}/>
            <Text style={styles.formProfile}>Change password</Text>
            <Text style={{color:'#DCDEE3', fontWeight:'bold'}}>...............</Text>
            <Right style={{marginLeft: 16}}/>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;

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
  textForm: {
      flex: 1,
      marginLeft: 16
  }
  , iconBtn: {
      marginLeft: 16,
  },
  cartBtn: {
      position: 'relative'
  },
  profile:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    marginRight:50,
  },
  textProfile:{
    //flex:1,
    color:'#223263',
    fontWeight:'bold',
    fontSize: 18
  },
  formProfile:{
    flex:1,
    color:'#223263',
    fontWeight:'bold',
    fontSize: 18
  },
  
});
