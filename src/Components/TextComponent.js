import * as React from 'react';
import {Text} from 'react-native';
import {
  colors,
  images,
  fonts,
} from '../Constants';

export const TextComponent = props => {
  return (
    <Text
      {...props}
      style={[
        {
          color: colors.black,
          fontSize: 14,
          fontFamily: fonts.BlueYellow,
          
        },
        props.style,
      ]}>
      {props.children}
    </Text>
  );
};
