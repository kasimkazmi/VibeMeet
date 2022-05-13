import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  ImageBackground,
  ImageStore,
} from 'react-native';
import {colors, fonts, images} from '../Constants';
import Icon2 from 'react-native-vector-icons/Feather';

const MatchCard = props => {
  return (
    <View
      style={[
        {
          height:120,
          width:"100%",
          borderTopRightRadius: 360,
          borderBottomEndRadius: 30,
          borderTopStartRadius: 30,
          borderBottomStartRadius: 360,
          backgroundColor: colors.pink,
        },
        props.style,
      ]}>
      <View />

      <View
        style={{
          flex: 1,
          marginTop: 12,
          paddingLeft: '6%',
          alignItems: 'center',
          paddingRight: '17%',
        }}>
        <View style={styles.row}>
          <View
            style={{
              backgroundColor: colors.purple,
              borderRadius: 30,
              flexDirection: 'row',
              left: 10,
              padding: 10,
            }}>
            <Image source={images.MiddleIcon} style={styles.userImg} />
          </View>
          <View
            style={{
              backgroundColor: colors.purple,
              borderRadius: 30,
              padding: 10,
            }}>
            <Image source={images.heartIcon} style={styles.userImg} />
          </View>

          <View style={{flex: 1, paddingRight: 10}} />
          <View style={styles.matchView}>
            <Text style={[{color: colors.white, fontSize: 10}]}>
              {props.match}
            </Text>
          </View>
        </View>
        <Text style={[styles.caption, props.textstyle]}>{props.children}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({

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
export default MatchCard;
