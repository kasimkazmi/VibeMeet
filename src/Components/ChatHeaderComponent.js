import * as React from 'react';
import {Text, TextInput, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {colors, images, fonts} from '../Constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';

const ChatHeaderComponent = props => {
  return (
    <View
      style={[
        {
          paddingRight: 20,
          paddingLeft: 10,
          paddingTop: 10,
          paddingBottom: 10,
          backgroundColor: colors.pink,
          alignItems: 'center',
          flexDirection: 'row',
        },
        props.style,
      ]}
      >
    
      <TouchableOpacity onPress={() => props.route.goBack()}>
        <Icon
          name="arrow-back-ios"
          color={colors.white}
          size={22}
          style={{paddingLeft: 8}}
        />
      </TouchableOpacity>

      <View
        style={{
          paddingRight: 30,
          width: 200,
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            borderRadius: 80,
            backgroundColor: colors.white,
            padding: 10,
          }}>
          <Image
            source={images.DP}
            style={{
              height: 22,
              width: 22,
              resizeMode: 'center',
            }}
          />
        </View>

        <Text
          style={[
            {
              color: colors.white,
              textAlign: 'center',
              paddingLeft: 8,
              fontSize: 25,
              lineHeight: 30,
              fontFamily: fonts.BlueYellow,
            },
            props.textstyle,
          ]}>
          {props.children}
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'flex-end',
        }}>
        <View style={{paddingLeft: 15}} />
        
        <TouchableOpacity>
          <Icon2
            name="call-out"
            color={'white'}
            size={12}
            style={{
              backgroundColor: colors.purple,
              borderRadius: 30,
              padding: 8,
            }}
          />
        </TouchableOpacity>
      </View>

      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    backgroundColor: 'red',
  },

  lable: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'pink',
    paddingTop: 8,
  },
  caption: {
    paddingTop: 10,
    color: colors.white,
    fontSize: 16,
    letterSpacing: 0.6,
    paddingLeft: 12,
    fontFamily: fonts.BlueYellow,
  },
  row: {
    flexDirection: 'row',
  },
  userImg: {
    height: 22,
    width: 22,
    resizeMode: 'center',
  },
  matchView: {
    justifyContent: 'center',
    backgroundColor: colors.purple,
    alignItems: 'center',
    height: 25,
    width: 70,
    marginTop: 15,
    borderRadius: 40,
  },
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 2,
      height: 13,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.2,
    elevation: 7,
  },
});
export default ChatHeaderComponent;
