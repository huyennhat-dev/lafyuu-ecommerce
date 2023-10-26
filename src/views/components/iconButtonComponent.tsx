import React, { ReactElement } from 'react';
import { View } from 'react-native';

const IconButtonComponent = ({ icon }: { icon: ReactElement }) => {
  // const {children} = props;
  return <View>{icon}</View>;
};

export default IconButtonComponent;
