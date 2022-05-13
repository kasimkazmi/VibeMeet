import React from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {colors, images, fonts} from '../Constants';
import Icon from 'react-native-vector-icons/Ionicons';
import Draggable from 'react-native-draggable';
import {Button} from 'react-native-paper';

const MagicSwalCard = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, paddingLeft: 20}}>
          <Text style={styles.lable}>Send magic question !</Text>
        </View>
        <View
          style={{
            backgroundColor: colors.pink,
            borderRadius: 30,
            marginRight: 15,
            alignItems: 'flex-end',
            padding: 10,
          }}>
          <Image
            source={images.MiddleIcon}
            style={{
              height: 32,
              width: 32,
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          flex: 0.6,
          marginTop: 10,
          borderRadius: 30,
        }}
      />

      <Draggable x={260} y={60}   moveX={20} shouldReverse>
        <Icon
          name="ios-arrow-forward-circle"
          color={colors.purple}
          size={50}
          style={{top: 10}}
        />
      </Draggable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    borderRadius: 30,
    paddingTop: 10,
    backgroundColor: colors.lightGray,
    marginHorizontal: 20,
  },

  lable: {
    fontSize: 28,
    lineHeight: 30,
    fontFamily: fonts.Darling,
    color: colors.purple,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },

  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 210,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.2,
    elevation: 1,
  },
});
export default MagicSwalCard;
