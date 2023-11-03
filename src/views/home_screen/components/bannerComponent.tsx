import React, { useEffect, useState } from 'react';
import {
  Image,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { COLORS, TEXT_TYPES, kDefaultPadding } from '../../../helpers/constants';
import TextComponent from '../../components/textComponent';

const ScreenWidth = Dimensions.get('screen').width;

const PeriodComponent = ({ value }: { value: string }) => {
  return (
    <View style={styles.period}>
      <TextComponent
        data={{
          text: value,
          type: TEXT_TYPES.heading4,
          style: {
            color: COLORS.textSecondaryColor
          }
        }} />
    </View>
  );
};

const BannerComponent = ({ data }: { data: { title: string, time: string } }) => {
  const { title, time } = data;

  const [hours, setHours] = useState(parseInt(time.slice(0, 2)));
  const [minutes, setMinutes] = useState(parseInt(time.slice(3, 5)));
  const [seconds, setSeconds] = useState(parseInt(time.slice(6, 8)));

  const calculateTimeRemaining = () => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      return;
    }

    if (seconds > 0) {
      setSeconds(seconds - 1);
    } else {
      if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        if (hours > 0) {
          setHours(hours - 1);
          setMinutes(59);
          setSeconds(59);
        }
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [hours, minutes, seconds]);

  return (
    <View style={styles.body}>
      <ImageBackground
        borderRadius={5}
        style={styles.image}
        source={require('../../../../assets/images/IMG_2.jpg')}
        resizeMode="cover">
        {hours == 0 && minutes == 0 && seconds == 0 ? null : (
          <View style={styles.content}>
            <View style={{ maxWidth: ScreenWidth * 0.6 }}>
              <TextComponent
                data={{
                  type: TEXT_TYPES.heading2,
                  style: { color: COLORS.whiteColor },
                  text: title
                }} />
            </View>
            <View style={styles.promotion}>
              <PeriodComponent value={String(hours).padStart(2, '0')} />
              <PeriodComponent value={String(minutes).padStart(2, '0')} />
              <PeriodComponent value={String(seconds).padStart(2, '0')} />
            </View>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    height: 206,
    borderRadius: 5,
    alignSelf: 'stretch',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    position: 'relative',
    paddingHorizontal: kDefaultPadding * 2.4,
    paddingVertical: kDefaultPadding * 3.2,
  },

  promotion: {
    left: 24,
    bottom: 24,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
  },
  period: {
    width: 42,
    height: 42,
    marginRight: 12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.whiteColor,
  },
});

export default BannerComponent;
