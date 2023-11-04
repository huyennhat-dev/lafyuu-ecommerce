import React, { useState, useEffect } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { COLORS, TEXT_TYPES, kDefaultPadding } from '../../helpers/constants';
import TextComponent from '../components/textComponent';
import { NotificationModel, notificationData } from '../../models/notification';
import OfferItem from './components/offerItem';

const OfferScreen = ({ navigation }: { navigation: any }) => {

  const [notifications, setNotifications] = useState<NotificationModel[]>([])

  useEffect(() => {
    const data = notificationData
    setNotifications(data)
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TextComponent data={{
            type: TEXT_TYPES.heading4,
            maxLine: 1,
            style: { color: COLORS.textSecondaryColor },
            text: "Notification"
          }} />
        </View>
        <View style={styles.body}>
          {notifications.map((item) => <OfferItem
            key={item.id}
            content={item.content}
            time={item.time}
            title={item.title} />)
          }
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.whiteColor,
  },

  body: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    padding: kDefaultPadding * 1.6,
    marginBottom: 40
  },
  header: {
    flex: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: kDefaultPadding * 1.6,
    borderBottomColor: COLORS.borderColor,
  },


});
export default OfferScreen;
