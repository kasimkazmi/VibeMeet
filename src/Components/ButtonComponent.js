import * as React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {colors} from '../Constants';

export const ButtonComponent = props => {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      // activeOpacity={1}

      onPress={() => props.onPress}
      style={[
        {
          flex: 1,
          paddingVertical: 12,

          alignItems: 'center',
          // backgroundColor: props.index == 0 ? "green": "pink",
          borderRadius: 30,
          backgroundColor: colors.white,

          // borderColor :props.index == 0 ? "#a35cb7" : "red",
          borderColor: 'red',
        },
        props.styles,
      ]}
      {...props}>
      <Text
        style={[
          {
            // color: props.index == 0 ? "a35cb7" : "red",
            color: colors.black,
          },
          props.textStyle,
        ]}>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
};
