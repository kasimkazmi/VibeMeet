import * as React from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {colors, images, fonts} from '../Constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BackArrow = props => {
  return (
      <View
        style={[
          {
            paddingLeft: 10,
            paddingTop: 15,
            paddingBottom: 15,
            backgroundColor: colors.pink,
            flexDirection: 'row',
          },
          props.style,
        ]}>
        <TouchableOpacity       
      onPress={()=>props.route.goBack()}
>
          <Icon name="arrow-back-ios" color={colors.white} size={22} />
        </TouchableOpacity>

        <View
          style={{
            paddingRight: 30,
            flex: 1,
            justifyContent: 'center',
          }}>
          <Text
            style={[
              {
                color: colors.white,
                textAlign: 'center',
                fontSize: 24,
                lineHeight: 24,
                fontFamily: fonts.BlueYellow,
              },
              props.textstyle,
            ]}>
            {props.children}
          </Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  lable: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'pink',
    paddingTop: 8,
  },
});
export default BackArrow;
