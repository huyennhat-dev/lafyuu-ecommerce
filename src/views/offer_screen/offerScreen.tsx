import React from 'react';
import {Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import IconButtonComponent from '../components/iconButtonComponent';
import { Offer, SyS_LeftIcon } from '../../helpers/icons';
import { COLORS, TEXT_TYPES, kDefaultPadding } from '../../helpers/constants';
import TextComponent from '../components/textComponent';

const OfferScreen = ({ navigation,title }: { navigation: any ,title:string}) => {
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
                    text: "Notification"
                }} />
            </View>
            
      </View>

          <View style={styles.profile1}>
            <Offer style={styles.icon} />
            <View>
              <Text style={styles.textprofile}>The Best Title</Text>              
              <Text style={{color: '#DCDEE3', marginTop:8}}>Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo (List/Notification/Offer List)</Text>

              <Text style={{color: '#223263', marginTop:8}}>April 30, 2014 1:01 PM </Text>
            </View>        
          </View>
          <View style={styles.profile1}>
            <Offer style={styles.icon} />
            <View>
              <Text style={styles.textprofile}>SUMMER OFFER 98% Cashback </Text>              
              <Text style={{color: '#DCDEE3', marginTop:8}}>Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor (List/Notification/Offer List)</Text>
              <Text style={{color: '#223263', marginTop:8}}>April 30, 2014 1:01 PM</Text>
            </View>        
          </View>
          <View style={styles.profile1}>
            <Offer style={styles.icon} />
            <View>
              <Text style={styles.textprofile}>Special Offer 25% OFF</Text>              
              <Text style={{color: '#DCDEE3', marginTop:8}}>Culpa cillum consectetur labore nulla </Text>
              <Text style={{color: '#223263', marginTop:8}}>April 30, 2014 1:01 PM</Text>
            </View>        
          </View>

      </ScrollView>
    </SafeAreaView>
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
  textForm: {
      flex: 1,
marginLeft: 16
  },
  icon:{
    //marginLeft: 16, 
    //paddingTop: 15,
    marginRight: 16,
    paddingBottom: 15,
    flex: 1,
  },
  profile1:{
    flex: 1,
    flexDirection: 'row',
    //alignItems: 'center',
    padding: 16,
  
  },
  textprofile:{
    fontSize: 18,
    color: '#223263',
    fontWeight: 'bold',  
    flex: 1,
    
  },
  
});
export default OfferScreen;
